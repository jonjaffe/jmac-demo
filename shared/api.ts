/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Successful response from POST /api/agent/docs-tests
 */
export interface DocsTestsAgentResponse {
  agentId: string;
  runId: string;
  url: string;
}

/**
 * Error response from agent kickoff endpoints
 */
export interface DocsTestsAgentErrorResponse {
  error: string;
}
