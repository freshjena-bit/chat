export async function GET() {
  const response = await fetch(
    "https://www.dadgpt.live/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.DADGPT_API_KEY}`
      },
      body: JSON.stringify({
        model: "dadgpt-default",
        messages: [
          {
            role: "user",
            content: "halo"
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
