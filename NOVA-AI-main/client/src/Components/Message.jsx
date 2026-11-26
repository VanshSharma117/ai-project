import React from "react";
import { BsRobot } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import "./Chat.css";

const Message = ({ messages }) => {
    const currentTime = new Date().toLocaleTimeString();
    // const hoverToshowTime = () => {
    //     const currentTime = new Date().toLocaleTimeString();
    // }

    return (
        <div className="messageSection">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={
                        message.role === "user"
                            ? "usermessage"
                            : "botmessage"
                    }
                >
                    {message.role === "assistant" && (
                        <div className="icon">
                            <BsRobot />
                        </div>
                    )}

                    <div className="messageContent">
                        <div className="messageBubble">
                            {message.text}
                        </div>

                        <small className="currTime">
                            {currentTime}
                        </small>
                    </div>

                    {message.role === "user" && (
                        <div className="icon">
                            <FaUserCircle />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Message;