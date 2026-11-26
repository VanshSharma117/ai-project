import React, { useState } from "react";
import "./Chat.css";
import { BsSendFill } from "react-icons/bs";

const Input = ({ onSend }) => {
    const [userInput, setUserInput] = useState("");

    const handleClick = () => {
        if (userInput.trim() === "") return;

        onSend(userInput);

        setUserInput("");
    };

    return (
        <div className="Inputbox">
            <div className="boxinput">

                <input
                    className="userinput"
                    type="text"
                    placeholder="Ask anything..."
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />

                <button className="Btnsend" onClick={handleClick}>
                    <BsSendFill />
                    <span>Send</span>
                </button>

            </div>
        </div>
    );
};

export default Input;