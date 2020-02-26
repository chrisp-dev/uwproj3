import React, { useState } from "react";
import Head from "./message-bits/Head";
import MessageBody from "./message-bits/MessageBody";

export default function Messages(props) {
  const [matches, setMatches] = useState([
    { name: 'Jay', image: 'https://ca.slack-edge.com/TQ1KWR5HU-UQKNHH7QE-5caa6237aac7-512' },
    { name: 'Jay', image: 'https://ca.slack-edge.com/TQ1KWR5HU-UQKNHH7QE-5caa6237aac7-512' },
    { name: 'Jay', image: 'https://ca.slack-edge.com/TQ1KWR5HU-UQKNHH7QE-5caa6237aac7-512' },
    { name: 'Jay', image: 'https://ca.slack-edge.com/TQ1KWR5HU-UQKNHH7QE-5caa6237aac7-512' },
    { name: 'Jay', image: 'https://ca.slack-edge.com/TQ1KWR5HU-UQKNHH7QE-5caa6237aac7-512' },
    { name: 'Jay', image: 'https://ca.slack-edge.com/TQ1KWR5HU-UQKNHH7QE-5caa6237aac7-512' },
    { name: 'Jay', image: 'https://ca.slack-edge.com/TQ1KWR5HU-UQKNHH7QE-5caa6237aac7-512' },
  ]);
  const [messages, setMessages] = useState([
    // const [messages, setMessage] = useState([
    {
      id: 69,
      name: "Nate",
      preview: "some message preview",
      image: "https://ca.slack-edge.com/TQ1KWR5HU-UQKNHH7QE-5caa6237aac7-512"
    }
  ]);



  return (
    <section className="relative h-full w-full py-16">
      <div className="container mx-auto h-full px-4">
        <Head matches={matches} />
        <MessageBody message={messages[0]} />
      </div>
    </section>
  );
}
