/**
 * GitHub Action entry: launch a Cursor cloud agent against the open PR
 * to update docs and unit tests for the PR diff.
 *
 * Env:
 *   CURSOR_API_KEY   - required
 *   GITHUB_REPOSITORY - owner/repo (provided by Actions)
 *   PR_URL            - full PR URL
 *   PR_NUMBER         - optional, used to build PR_URL if missing
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Agent, CursorAgentError } from "@cursor/sdk";

function loadPrompt() {
  const here = dirname(fileURLToPath(import.meta.url));
  return readFileSync(join(here, "prompts/docs-and-tests.md"), "utf8").trim();
}

function resolvePrUrl() {
  if (process.env.PR_URL) return process.env.PR_URL;
  const repo = process.env.GITHUB_REPOSITORY;
  const number = process.env.PR_NUMBER;
  if (repo && number) {
    return `https://github.com/${repo}/pull/${number}`;
  }
  throw new Error("PR_URL or GITHUB_REPOSITORY + PR_NUMBER is required");
}

function resolveRepoUrl() {
  if (process.env.GITHUB_REPO_URL) return process.env.GITHUB_REPO_URL;
  const repo = process.env.GITHUB_REPOSITORY;
  if (!repo) throw new Error("GITHUB_REPOSITORY or GITHUB_REPO_URL is required");
  return `https://github.com/${repo}`;
}

async function main() {
  const apiKey = process.env.CURSOR_API_KEY;
  if (!apiKey) {
    console.error("CURSOR_API_KEY is required");
    process.exit(1);
  }

  const prUrl = resolvePrUrl();
  const repoUrl = resolveRepoUrl();
  const prompt = `${loadPrompt()}

## Mode
PR automation. You are attached to ${prUrl}. Update documentation and unit tests for what this PR added or changed. Commit with [agent-docs-tests] in the message. Push to the PR head branch (do not open a separate PR).`;

  console.log(`Starting docs/tests agent for ${prUrl}`);

  let agent;
  try {
    agent = await Agent.create({
      apiKey,
      model: { id: "composer-2.5" },
      cloud: {
        repos: [{ url: repoUrl, prUrl }],
        workOnCurrentBranch: true,
        skipReviewerRequest: true,
      },
    });

    const run = await agent.send(prompt);
    console.log(`agentId=${agent.agentId} runId=${run.id}`);

    const result = await run.wait();
    if (result.status === "error") {
      console.error(`run failed: ${result.id}`);
      process.exit(2);
    }

    console.log(`run finished: ${result.status}`);
    const branchPr = result.git?.branches?.[0]?.prUrl;
    if (branchPr) console.log(`prUrl=${branchPr}`);
  } catch (err) {
    if (err instanceof CursorAgentError) {
      console.error(
        `startup failed: ${err.message}, retryable=${err.isRetryable}`,
      );
      process.exit(1);
    }
    throw err;
  } finally {
    if (agent && typeof agent[Symbol.asyncDispose] === "function") {
      await agent[Symbol.asyncDispose]();
    }
  }
}

main();
