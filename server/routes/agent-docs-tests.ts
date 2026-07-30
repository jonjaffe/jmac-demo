import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import type { RequestHandler } from "express";
import type {
  DocsTestsAgentErrorResponse,
  DocsTestsAgentResponse,
} from "@shared/api";
import { DOCS_TESTS_AGENT_PROMPT } from "@shared/docs-tests-agent-prompt";

interface CursorCreateAgentResponse {
  agent?: {
    id?: string;
    url?: string;
  };
  run?: {
    id?: string;
  };
}

function loadPrompt(): string {
  try {
    const here = dirname(fileURLToPath(import.meta.url));
    const promptPath = join(
      here,
      "../../scripts/prompts/docs-and-tests.md",
    );
    return readFileSync(promptPath, "utf8").trim();
  } catch {
    return DOCS_TESTS_AGENT_PROMPT;
  }
}

export const handleDocsTestsAgent: RequestHandler = async (_req, res) => {
  const adminToken = process.env.ADMIN_TOKEN;
  const provided = _req.header("x-admin-token");

  if (!adminToken || provided !== adminToken) {
    const body: DocsTestsAgentErrorResponse = {
      error: "Unauthorized",
    };
    res.status(401).json(body);
    return;
  }

  const apiKey = process.env.CURSOR_API_KEY;
  if (!apiKey) {
    const body: DocsTestsAgentErrorResponse = {
      error: "CURSOR_API_KEY is not configured",
    };
    res.status(500).json(body);
    return;
  }

  const repoUrl =
    process.env.GITHUB_REPO_URL ?? "https://github.com/jonjaffe/jmac-demo";
  const startingRef = process.env.GITHUB_DEFAULT_BRANCH ?? "main";
  const prompt = `${loadPrompt()}

## Mode
Manual kickoff from the admin page. Work from ${startingRef}, refresh docs and tests for the current codebase, and open a pull request. Include [agent-docs-tests] in your commit message.`;

  try {
    const response = await fetch("https://api.cursor.com/v1/agents", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: { text: prompt },
        model: { id: "composer-2.5" },
        name: "Docs and unit tests",
        repos: [{ url: repoUrl, startingRef }],
        autoCreatePR: true,
        skipReviewerRequest: true,
      }),
    });

    const data = (await response.json()) as CursorCreateAgentResponse & {
      error?: { message?: string };
      message?: string;
    };

    if (!response.ok) {
      const body: DocsTestsAgentErrorResponse = {
        error:
          data.error?.message ||
          data.message ||
          `Cursor API error (${response.status})`,
      };
      res.status(502).json(body);
      return;
    }

    const agentId = data.agent?.id;
    const runId = data.run?.id;
    if (!agentId || !runId) {
      const body: DocsTestsAgentErrorResponse = {
        error: "Cursor API returned an unexpected response",
      };
      res.status(502).json(body);
      return;
    }

    const body: DocsTestsAgentResponse = {
      agentId,
      runId,
      url: data.agent?.url ?? `https://cursor.com/agents/${agentId}`,
    };
    res.status(202).json(body);
  } catch (err) {
    const body: DocsTestsAgentErrorResponse = {
      error: err instanceof Error ? err.message : "Failed to start agent",
    };
    res.status(500).json(body);
  }
};
