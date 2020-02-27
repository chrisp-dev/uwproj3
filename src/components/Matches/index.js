import React, { useState, useEffect } from "react";
import Head from "./message-bits/Head";
import MessageBody from "./message-bits/MessageBody";
import API from "../../utils/API";

export default function Messages(props) {
  const [matches, setMatches] = useState([
    { name: "Jay", image: "https://ca.slack-edge.com/TQ1KWR5HU-UQKNHH7QE-5caa6237aac7-512" },
    { name: "Jay", image: "https://ca.slack-edge.com/TQ1KWR5HU-UQKNHH7QE-5caa6237aac7-512" },
    { name: "Jay", image: "https://ca.slack-edge.com/TQ1KWR5HU-UQKNHH7QE-5caa6237aac7-512" },
    { name: "Jay", image: "https://ca.slack-edge.com/TQ1KWR5HU-UQKNHH7QE-5caa6237aac7-512" },
    { name: "Jay", image: "https://ca.slack-edge.com/TQ1KWR5HU-UQKNHH7QE-5caa6237aac7-512" },
    { name: "Jay", image: "https://ca.slack-edge.com/TQ1KWR5HU-UQKNHH7QE-5caa6237aac7-512" },
    { name: "Jay", image: "https://ca.slack-edge.com/TQ1KWR5HU-UQKNHH7QE-5caa6237aac7-512" }
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

  useEffect(() => {
    API.getMatches().then(matches => {
      console.log('DURP:',matches)
      setMatches(matches.data)});
  }, []);
  useEffect(() => {
    API.getMessage().then(messages => setMessages(messages.data));
  }, []);

  return (
    <section className="relative h-full w-full py-16">
      <div className="container mx-auto h-full px-4">
        <Head matches={matches} />
        <MessageBody messages={messages}/>
      </div>
    </section>
  );
}
