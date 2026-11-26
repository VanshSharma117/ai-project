import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import "./Chat.css";
import Input from "./Input";
import Message from "./Message";
import { sendMessage } from "../Api/ChatApi";

const Chat = () => {
    const [messages, setMessages] = useState([]);

    const handleSend = async (text) => {

        // Add user message
        const userMessage = {
            role: "user",
            text: text,
        };

        setMessages((prev) => [...prev, userMessage]);

        try {

            // Send message to backend
            const response = await sendMessage(text);

            // Add AI response
            const botMessage = {
                role: "assistant",
                text: response.reply,
            };

            setMessages((prev) => [...prev, botMessage]);

        } catch (error) {

            console.error(error);

        }

    };

    return (
        <div className="chatBox">
            <div className="headerSection">
                <div style={{ cursor: "pointer" }}>
                    <BsRobot />
                </div>

                <div style={{ cursor: "pointer" }}>
                    NOVA AI
                </div>

                <div style={{ cursor: "pointer" }}>
                    <FaUserCircle />
                </div>
            </div>

            {/* <hr /> */}

            <div className="bodySection">
                <Message messages={messages} />
            </div>

            <Input onSend={handleSend} />
        </div>
    );
};

export default Chat;