import React from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";

export default function ChatBox()  {
    return (
        <main className="chat-box">
            <div className="messages-wrapper">
                <Message />
            </div>
        <SendMessage />
        </main>
    );
};