"use client";
import { firebaseGetData, firebasePostData } from "@/lib/firebase/firebaseService";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function MessagesList() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const { data: session } = useSession();

  firebaseGetData("messages").then((data) => {
    setMessages(Object.values(data));
  });

  return (
    <div className="w-full min-h-full flex justify-between flex-col flex-1 pb-5">
      <div className="flex flex-1 gap-5 flex-col">
        {messages &&
          messages.map((message: any, i) => (
            <div className="flex items-center" key={i}>
              <span className="me-5 px-4 py-1 ring-1 rounded-lg">{message?.name}</span>
              <span>{message?.message}</span>
            </div>
          ))}
      </div>
      <div className="flex gap-5">
        <input value={message} onChange={(e) => setMessage(e.target.value)} className="ring-1 w-full h-24 px-4" type="text" />
        <button
          onClick={() => {
            firebasePostData("messages", { message: message, name: session?.user?.name });
            setMessage("");
          }}
          className="ring-1 px-5"
        >
          Gönder
        </button>
      </div>
    </div>
  );
}
