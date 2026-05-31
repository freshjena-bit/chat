export async function POST(req) {
  try {
    const { message } = await req.json();

    const response = await fetch(
      "https://www.dadgpt.live/v1/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.DADGPT_API_KEY}`,
        },
        body: JSON.stringify({
          model: "dadgpt-default",
          messages: [
            {
              role: "user",
              content: message,
            },
          ],
        }),
      }
    );

    const text = await response.text();

    return Response.json({
      status: response.status,
      response: text,
    });
  } catch (err) {
    return Response.json({
      error: String(err),
    });
  }
}
