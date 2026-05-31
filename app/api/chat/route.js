export async function GET() {
  return Response.json({
    keyExists: !!process.env.DADGPT_API_KEY
  });
}
