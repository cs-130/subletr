import React, { useState } from "react";

export default function SendMessage() {
    const [message, setMessage] = useState("");
    const sendMessage = async (event) => {
        event.preventDefault();
        if (message.trim() === "") {
            return;
        }
        //const { uid, displayName, photoURL } = auth.currentUser;
        /* await addDoc(collection(db, "messages"), {
            text: message,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid,
        }); */
        setMessage("");
      };
    return (
        <form onSubmit={(event) => sendMessage(event)} className="send-message">
            <label htmlFor="messageInput" hidden>
                Enter Message
            </label>
            <input
                id="messageInput"
                name="messageInput"
                type="text"
                className="form-input__input"
                placeholder="type message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    );
};