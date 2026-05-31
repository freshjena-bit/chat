export async function POST(req) {
  const { message } = await req.json();

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
            content: message
          }
        ]
      })
    }
  );

  const data = await response.json();

  return Response.json({
    reply: data.choices?.[0]?.message?.content || "No response"
  });
}
