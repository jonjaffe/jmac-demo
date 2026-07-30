/**
 * Shared prompt for the docs + unit-tests Cursor cloud agent.
 * Used by the admin API (manual) and mirrored in scripts/prompts/docs-and-tests.md for CI.
 */
export const DOCS_TESTS_AGENT_PROMPT = `You are updating documentation and unit tests for this repository.

## Goal
Keep docs and tests in sync with the application code.

## Scope (strict)
Only modify these paths:
- docs/**
- README.md
- AGENTS.md
- **/*.{spec,test}.{ts,tsx}
- vitest.config.ts
- client/test/** (test helpers/setup only)

Do NOT change product UI, business logic, styling, routes (except docs about them), or dependencies unless required for a failing test to compile.

## PR mode (when working on an existing PR)
1. Inspect the PR diff (changed files vs the base branch).
2. Update docs so they accurately describe what was added or changed.
3. Add or update unit tests covering what was added or changed.
4. Follow existing Vitest + Testing Library patterns (see client/test/, *.spec.ts(x)).
5. Commit with a message that includes the marker [agent-docs-tests] so CI does not loop.

## Manual / baseline mode (when starting from main)
1. Review the current application structure (client pages/components, server routes, shared types).
2. Ensure docs/ and README accurately describe the app as it exists today.
3. Ensure unit tests cover feature components, key pages, and Express API routes.
4. Open or update a PR with your changes. Include [agent-docs-tests] in the commit message.

## Quality bar
- Docs should be concise, accurate, and match code paths (routing is in client/main.tsx).
- Tests should be meaningful smoke/unit coverage, not snapshot spam.
- Prefer co-located *.spec.ts(x) files next to sources.
- Run tests if possible; fix any failures you introduce.
`;

export const AGENT_COMMIT_MARKER = "[agent-docs-tests]";
