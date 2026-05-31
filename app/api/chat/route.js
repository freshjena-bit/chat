export async function GET() {
  const response = await fetch(
    "https://worm.zeabur.app/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.DADGPT_API_KEY}`
      },
      body: JSON.stringify({
        model: "wormgpt-v1",
        messages: [
          {
            role: "user",
            content: "halo wormgpt"
          }
        ]
      })
    }
  );

  const text = await response.text();

  return Response.json({
    status: response.status,
    body: text
  });
}
