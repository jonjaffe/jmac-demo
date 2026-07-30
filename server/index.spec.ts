import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import request from "supertest";
import { createServer } from "./index";

describe("Express API", () => {
  const app = createServer();

  it("GET /api/ping returns greeting", async () => {
    const res = await request(app).get("/api/ping");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      message: "Hello from Express server v2!",
    });
  });

  it("GET /api/demo returns demo message", async () => {
    const res = await request(app).get("/api/demo");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Hello from Express server" });
  });
});

describe("POST /api/agent/docs-tests", () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    process.env.ADMIN_TOKEN = "test-admin-token";
    process.env.CURSOR_API_KEY = "cursor_test_key";
    process.env.GITHUB_REPO_URL = "https://github.com/jonjaffe/jmac-demo";
  });

  afterEach(() => {
    process.env = { ...originalEnv };
    vi.unstubAllGlobals();
  });

  it("rejects missing admin token", async () => {
    const app = createServer();
    const res = await request(app).post("/api/agent/docs-tests");
    expect(res.status).toBe(401);
    expect(res.body.error).toBe("Unauthorized");
  });

  it("rejects invalid admin token", async () => {
    const app = createServer();
    const res = await request(app)
      .post("/api/agent/docs-tests")
      .set("x-admin-token", "wrong");
    expect(res.status).toBe(401);
  });

  it("starts a cloud agent and returns 202", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 201,
      json: async () => ({
        agent: {
          id: "bc-agent-123",
          url: "https://cursor.com/agents/bc-agent-123",
        },
        run: { id: "run-456" },
      }),
    });
    vi.stubGlobal("fetch", fetchMock);

    const app = createServer();
    const res = await request(app)
      .post("/api/agent/docs-tests")
      .set("x-admin-token", "test-admin-token");

    expect(res.status).toBe(202);
    expect(res.body).toEqual({
      agentId: "bc-agent-123",
      runId: "run-456",
      url: "https://cursor.com/agents/bc-agent-123",
    });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.cursor.com/v1/agents",
      expect.objectContaining({
        method: "POST",
      }),
    );
  });
});
