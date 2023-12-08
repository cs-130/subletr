import React, { useState, useContext, useEffect } from 'react';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  MessageInput,
  Sidebar,
  ConversationList,
  Conversation,
  Avatar,
  Message
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import avatarIcon from "./john.jpg";
import avatarIcon2 from "./anon.jpg";
import socket from './components/Socket';
import { UserContext } from '../../context/UserContext';


// Fake conversation data
const fakeConversationData = [
    {
        id: 1,
        name: "Rental Agent",
        status: "available",
        messages: [
          { text: "Hello! Are you still looking for an apartment?", direction: "incoming" },
          { text: "Yes, I am. Do you have any listings available?", direction: "outgoing" },
          { text: "We have a two-bedroom apartment in the city center. Are you interested?", direction: "incoming" },
          { text: "That sounds great. Can you tell me more about the rent and amenities?", direction: "outgoing" },
          { text: "The rent is $1200 per month, including utilities. The apartment has a fully equipped kitchen and a balcony.", direction: "incoming" },
          { text: "Is there a parking space available?", direction: "outgoing" },
          { text: "Yes, there's underground parking included.", direction: "incoming" },
          { text: "Sounds good. Can I schedule a viewing for this weekend?", direction: "outgoing" },
          { text: "Certainly! How about Saturday at 10 AM?", direction: "incoming" },
          { text: "Perfect, see you then!", direction: "outgoing" },
        ],
    },
    {
        id: 2,
        name: "Agent Smith",
        status: "available",
        messages: [
          { text: "Good day! We've got a lovely studio apartment near the park. Interested?", direction: "incoming" },
          { text: "Sounds nice. Is it pet-friendly?", direction: "outgoing" },
          { text: "Absolutely! It's perfect for pet owners. Plus, it has a spacious balcony.", direction: "incoming" },
          { text: "Great, I'd like to know more about the lease terms and the monthly rent.", direction: "outgoing" },
          { text: "The lease is for a minimum of one year, and the rent is $1000 per month.", direction: "incoming" },
          { text: "Does that include utilities?", direction: "outgoing" },
          { text: "Yes, all utilities are included. Would you like to schedule a viewing?", direction: "incoming" },
        ],
      },
      {
        id: 3,
        name: "Emma from City Realty",
        status: "busy",
        messages: [
          { text: "Hi there! I noticed you're looking for a 1-bedroom apartment. We have a few options.", direction: "incoming" },
          { text: "Yes, I'm looking for something downtown. What do you have?", direction: "outgoing" },
          { text: "We have a recently renovated unit, 10 minutes walk from Main Street, with a great view of the city.", direction: "incoming" },
          { text: "That sounds promising. What's the rent, and does it come furnished?", direction: "outgoing" },
          { text: "It's $1300 per month unfurnished. We do offer furnishing options for an additional fee.", direction: "incoming" },
          { text: "Could you send me some photos and the exact location?", direction: "outgoing" },
        ],
      },
    {
      id: 4,
      name: "Lakeside Properties",
      status: "away",
      messages: [
        { text: "Hello! Are you interested in waterfront properties?", direction: "incoming" },
        { text: "Yes, that would be amazing. What are the prices like?", direction: "outgoing" },
        { text: "They start at $1500, including a private dock.", direction: "incoming" },
      ],
    },
    {
      id: 5,
      name: "Downtown Real Estate",
      status: "online",
      messages: [
        { text: "We have a special offer on some of our downtown apartments this month.", direction: "incoming" },
        { text: "That's interesting. Can you give me more details?", direction: "outgoing" },
        { text: "Sure! There's a 20% discount for the first six months.", direction: "incoming" },
      ],
    },
    {
      id: 6,
      name: "Suburban Homes",
      status: "offline",
      messages: [
        { text: "Looking for a quiet place? We have some new listings in the suburbs.", direction: "incoming" },
        { text: "I prefer a quiet neighborhood. Do you have any 2-bedroom homes?", direction: "outgoing" },
        { text: "Yes, we do. They come with a backyard and a garage.", direction: "incoming" },
      ],
    },
  ];

function ChatPage() {
    const {
        userId,
        saveMessage,
        getMyConversations,
        getMyMessages,
        getUserName,
        conversationIds,
        messages,
        setMessages
      } = useContext(UserContext)
      console.log(messages);

    useEffect(() => {
    if (!userId) 
        window.location.href = `http://localhost:5000/auth/google`
    }, [userId])

    useEffect(() => {
      getMyConversations();
    }, [getMyConversations]);

    useEffect(() => {
      getMyMessages();
    }, [getMyMessages]);

    useEffect(() => {
      async function fetchUserNames() {
        // Find active conversations
        let result = [];
        for (let conversation of conversationIds) {
          let username = await getUserName(conversation);
          let entry = {
            id: conversation,
            name: username
          }
          result.push(entry);
        }
        setActiveConversations(result);
      }
      fetchUserNames();
    }, [getUserName, conversationIds])
    
    if (userId)
    {
      socket.connect();
      socket.emit("session", userId);
    }

  // State to track the active conversation
  const [activeConversation, setActiveConversation] = useState(null);

  // State to track the active messages
  const [activeMessages, setActiveMessages] = useState([]);

  // State to track the active conversations
  const [activeConversations, setActiveConversations] = useState([]);

  // Function to handle clicking on a conversation
  const handleConversationClick = (conversationId) => {
    setActiveConversation(conversationId);
  };

  // Update active messages for new conversations or messages
  useEffect(() => {
    setActiveMessages(messages.filter(message => message.from === activeConversation || message.to === activeConversation) || []);
    console.log("update active messages");
    }, [activeConversation, messages, setMessages])

  console.log(activeConversations);

  // Function to send message
  const [message, setMessage] = useState("");
  const sendMessageOnClick = async (message) => {
    console.log("entered send message on click")
    if (message.trim() === "") {
        return;
    }
    socket.emit("message", {
      text: message,
      from: userId,
      to: activeConversation,
      time: Date.now()
    });
    await saveMessage({
        text: message,
        from: userId,
        to: activeConversation,
        time: Date.now()
    });
    let newMessages = [...messages];
    console.log(newMessages);
    newMessages.push({
      text: message,
      from: userId,
      to: activeConversation,
      time: Date.now()
    });
    setMessages(newMessages);
    console.log(messages);
    setMessage("");
  };

  // Receive message
  socket.on("message", ({ text, from, to, time }) => {
    console.log("received message");
    let newMessages = [...messages];
    newMessages.push({
      text: text,
      from: from,
      to: to,
      time: time
    });
    setMessages(newMessages);
  });

  return (
    <div style={{ position: "relative", height: "90%" }}>
      <MainContainer>
        <Sidebar position="left" scrollable={false}>
          <ConversationList>
            {activeConversations.map(conversation => (
              <Conversation
                key={conversation.id}
                name={conversation.name}
                onClick={() => handleConversationClick(conversation.id)}
              >
                <Avatar src={avatarIcon2} name={conversation.name} status={conversation.status} />
              </Conversation>
            ))}
          </ConversationList>
        </Sidebar>

        <ChatContainer>
          <MessageList>
            {console.log(activeMessages)}
            {activeMessages.map((message, index) => (
              <Message key={index} model={{ message: message.text, direction: message.from === userId ? "outgoing" : "incoming" }} />
            ))}
          </MessageList>
          <MessageInput value = {message} onChange={setMessage} onSend={sendMessageOnClick} placeholder="Type message here" className='message-input'>
            
          </MessageInput>
        </ChatContainer>
      </MainContainer>
    </div>
  );
}

export default ChatPage;