import crypto from "node:crypto";

export default function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    res.status(500).send("GITHUB_CLIENT_ID is not configured.");
    return;
  }

  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const state = crypto.randomBytes(16).toString("hex");

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: `https://${host}/api/callback`,
    scope: "repo",
    state,
  });

  res.setHeader(
    "Set-Cookie",
    `decap_oauth_state=${state}; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=600`
  );
  res.redirect(302, `https://github.com/login/oauth/authorize?${params}`);
}
