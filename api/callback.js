function sendResult(res, status, content) {
  const message = `authorization:github:${status}:${JSON.stringify(content)}`;
  const safeMessage = JSON.stringify(message).replace(/</g, "\\u003c");

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader(
    "Set-Cookie",
    "decap_oauth_state=; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=0"
  );
  res.status(200).send(`<!doctype html>
<html>
  <body>
    <script>
      (function () {
        var message = ${safeMessage};
        function receive(e) {
          if (e.origin !== window.location.origin) return;
          window.opener.postMessage(message, e.origin);
          window.removeEventListener("message", receive, false);
        }
        window.addEventListener("message", receive, false);
        window.opener.postMessage("authorizing:github", window.location.origin);
      })();
    </script>
  </body>
</html>`);
}

export default async function handler(req, res) {
  const { code, state } = req.query;
  const expectedState = req.cookies?.decap_oauth_state;

  if (!code || !state || state !== expectedState) {
    sendResult(res, "error", { message: "Invalid or expired login attempt. Please try again." });
    return;
  }

  try {
    const response = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });
    const data = await response.json();

    if (data.error || !data.access_token) {
      sendResult(res, "error", { message: data.error_description || "GitHub login failed." });
      return;
    }

    sendResult(res, "success", { token: data.access_token, provider: "github" });
  } catch {
    sendResult(res, "error", { message: "Could not reach GitHub. Please try again." });
  }
}
