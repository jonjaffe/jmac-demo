import { describe, it, expect, vi } from "vitest";
import { renderWithProviders, screen } from "@/test/test-utils";
import userEvent from "@testing-library/user-event";
import Admin from "./Admin";

describe("Admin page", () => {
  it("renders kickoff controls", () => {
    renderWithProviders(<Admin />);
    expect(screen.getByRole("heading", { name: "Admin" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Run docs & tests agent/i }),
    ).toBeDisabled();
  });

  it("calls the agent endpoint with the admin token", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        agentId: "bc-agent-123",
        runId: "run-456",
        url: "https://cursor.com/agents/bc-agent-123",
      }),
    });
    vi.stubGlobal("fetch", fetchMock);

    renderWithProviders(<Admin />);
    await user.type(screen.getByLabelText(/Admin token/i), "secret");
    await user.click(
      screen.getByRole("button", { name: /Run docs & tests agent/i }),
    );

    expect(fetchMock).toHaveBeenCalledWith("/api/agent/docs-tests", {
      method: "POST",
      headers: { "x-admin-token": "secret" },
    });
    expect(await screen.findByText("Agent started")).toBeInTheDocument();
    expect(screen.getByText(/bc-agent-123/)).toBeInTheDocument();

    vi.unstubAllGlobals();
  });
});
