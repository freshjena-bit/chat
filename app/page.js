"use client";

import { useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  async function send() {
    if (!msg) return;

    const userMsg = msg;

    setChat((c) => [...c, { role: "user", text: userMsg }]);
    setMsg("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMsg }),
    });

    const data = await res.json();

    setChat((c) => [
      ...c,
      { role: "assistant", text: data.reply },
    ]);
  }

  return (
    <div style={{
      maxWidth: 900,
      margin: "0 auto",
      padding: 20
    }}>
      <h1>DadGPT</h1>

      <div style={{
        height: "70vh",
        overflow: "auto",
        border: "1px solid #ccc",
        padding: 10
      }}>
        {chat.map((m, i) => (
          <div key={i}>
            <b>{m.role}:</b> {m.text}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          style={{ flex: 1 }}
        />
        <button onClick={send}>
          Kirim
        </button>
      </div>
    </div>
  );
  }
