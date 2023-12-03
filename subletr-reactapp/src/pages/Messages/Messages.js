import { io } from "socket.io-client";
import React from 'react';
import '../../App.css'
import ChatBox from "./components/ChatBox";
import ChatList from "./components/ChatList";

export default function Messages() {
    const URL = "http://localhost:3001";
    //const socket = io(URL, { autoConnect: false });

    //socket.onAny((event, ...args) => {
    //console.log(event, args);
    //});

    return (
        <div className='messages-container'>
            <div className='chatbox'>
                <ChatBox  />
            </div>
            <div className='chat-sidepanel'>
                <ChatList  />
            </div>
        </div>
        )
}