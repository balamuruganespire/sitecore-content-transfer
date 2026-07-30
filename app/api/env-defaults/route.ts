export const runtime = "nodejs";

/**
 * Returns default OAuth credentials from server-side env vars, for prefilling
 * the source/target forms on load. Values still round-trip to the browser
 * (visible in the network tab) — only wire this up for trusted/local use.
 */
export async function GET() {
  return Response.json({
    source: {
      clientId: process.env.SOURCE_CLIENT_ID || "",
      clientSecret: process.env.SOURCE_CLIENT_SECRET || "",
    },
    target: {
      clientId: process.env.TARGET_CLIENT_ID || "",
      clientSecret: process.env.TARGET_CLIENT_SECRET || "",
    },
  });
}
