import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type {
  DocsTestsAgentErrorResponse,
  DocsTestsAgentResponse,
} from "@shared/api";

type AgentStatus =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success"; data: DocsTestsAgentResponse }
  | { kind: "error"; message: string };

const Admin = () => {
  const [adminToken, setAdminToken] = useState("");
  const [status, setStatus] = useState<AgentStatus>({ kind: "idle" });

  const runAgent = async () => {
    setStatus({ kind: "loading" });
    try {
      const response = await fetch("/api/agent/docs-tests", {
        method: "POST",
        headers: {
          "x-admin-token": adminToken,
        },
      });
      const data = (await response.json()) as
        | DocsTestsAgentResponse
        | DocsTestsAgentErrorResponse;

      if (!response.ok) {
        setStatus({
          kind: "error",
          message: "error" in data ? data.error : "Request failed",
        });
        return;
      }

      setStatus({ kind: "success", data: data as DocsTestsAgentResponse });
    } catch (err) {
      setStatus({
        kind: "error",
        message: err instanceof Error ? err.message : "Request failed",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-xl">
        <p className="text-sm text-muted-foreground mb-2">
          <Link to="/" className="hover:text-foreground underline-offset-4 hover:underline">
            Home
          </Link>
          {" / "}
          Admin
        </p>
        <h1 className="text-3xl font-serif font-semibold mb-3">Admin</h1>
        <p className="text-muted-foreground mb-8">
          Manually kick off the Cursor cloud agent that refreshes documentation
          and unit tests from <code className="text-sm">main</code> and opens a
          pull request. The same workflow also runs automatically on every PR.
        </p>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="admin-token">Admin token</Label>
            <Input
              id="admin-token"
              type="password"
              autoComplete="off"
              placeholder="x-admin-token value"
              value={adminToken}
              onChange={(e) => setAdminToken(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Must match the server <code>ADMIN_TOKEN</code> environment
              variable.
            </p>
          </div>

          <Button
            className="btn-primary"
            onClick={runAgent}
            disabled={status.kind === "loading" || !adminToken}
          >
            {status.kind === "loading" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Starting agent…
              </>
            ) : (
              "Run docs & tests agent"
            )}
          </Button>

          {status.kind === "success" && (
            <div className="border border-border p-4 space-y-2 text-sm">
              <p className="font-medium text-foreground">Agent started</p>
              <p>
                Agent ID:{" "}
                <code className="text-xs">{status.data.agentId}</code>
              </p>
              <p>
                Run ID: <code className="text-xs">{status.data.runId}</code>
              </p>
              <a
                href={status.data.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                Open in Cursor
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          )}

          {status.kind === "error" && (
            <p className="text-sm text-destructive" role="alert">
              {status.message}
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
