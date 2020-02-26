import React, { useState } from "react";
import Head from "./message-bits/Head";
import MessageBody from "./message-bits/MessageBody";

export default function Messages(props) {
  const [messages] = useState([
    // const [messages, setMessage] = useState([
    {
      id: 69,
      name: "Nate",
      preview: "some message preview",
      image: "https://ca.slack-edge.com/TQ1KWR5HU-UQKNHH7QE-5caa6237aac7-512"
    }
  ]);

  return (
    <section className="relative py-16 bg-black" style={{ backgroundImage: "url('music_notes.gif')" }}>
      <div className="container mx-auto px-4">
        <Head message={messages[0]} />
        <MessageBody message={messages[0]} />
      </div>
    </section>
  );
}
