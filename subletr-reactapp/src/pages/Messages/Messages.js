//import { io } from "socket.io-client";
import React from 'react';
import '../../App.css'
import ChatBox from "./components/ChatBox";

export default function Message() {
    const URL = "http://localhost:3001";
    //const socket = io(URL, { autoConnect: false });

    //socket.onAny((event, ...args) => {
    //console.log(event, args);
    //});

    return (
        <div className='messages'>
                <ChatBox  />
        </div>
        )
}