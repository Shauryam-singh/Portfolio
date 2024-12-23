import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../App.css";

function Terminal() {
  const [isTyping, setIsTyping] = useState(true);  // Start with typing the welcome message
  const [text, setText] = useState("");  // Store terminal text
  const [commandHistory, setCommandHistory] = useState([]);  // Track command history
  const [currentCommand, setCurrentCommand] = useState("");  // Current command being typed
  const [cursorVisible, setCursorVisible] = useState(true);  // Control cursor blinking
  const terminalRef = useRef(null);

  // Custom welcome message and initial instructions
  const welcomeMessage = `Welcome to OS 1.0 (x64)

*Website: xyz
*Support: shauryamsingh9@gmail.com

(i) Type "help" to start!`;

  // Update terminal text with typing animation
  useEffect(() => {
    if (isTyping) {
      let index = 0;
      const timer = setInterval(() => {
        if (index < welcomeMessage.length) {
          setText((prevText) => prevText + welcomeMessage[index]);
          index++;
        } else {
          clearInterval(timer);
          setText((prevText) => prevText); // Add the prompt after welcome message
          setIsTyping(false);  // Stop typing animation after the message is finished
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, [isTyping]);

  // Blink the cursor
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  // Handle user input and command execution
  const handleCommand = (event) => {
    if (event.key === "Enter") {
      // Store the current command in history
      setCommandHistory((prev) => [...prev, currentCommand]);
      setText((prev) => prev + "\nguest@os: ~$" + currentCommand + "\n");  // Append entered command

      // Process the command
      let output = "";
      if (currentCommand === "help") {
        output = "\nAvailable commands: help, clear, echo <text>, date, ls, whoami, mkdir <dir>, touch <file>, cat <file>, exit";
      } else if (currentCommand === "clear") {
        setText(`Welcome to OS 1.0 (x64)

*Website: xyz
*Support: shauryamsingh9@gmail.com

(i) Type "help" to start!`);  // Clear terminal text
        setCurrentCommand("");  // Reset input field
        return;  // Skip adding the prompt after clear command
      } else if (currentCommand.startsWith("echo")) {
        const message = currentCommand.slice(5);
        output = `\n${message}`;
      } else if (currentCommand === "date") {
        const date = new Date();
        output = `\n${date.toLocaleString()}`;  // Display current date and time
      } else if (currentCommand === "ls") {
        output = "\nDocuments\nPictures\nDownloads\nDesktop";  // Simulate directory listing
      } else if (currentCommand === "whoami") {
        output = "\nguest";  // Simulate the user info
      } else if (currentCommand.startsWith("mkdir")) {
        const dirName = currentCommand.slice(6);
        if (dirName) {
          output = `\nDirectory ${dirName} created.`;
        } else {
          output = "\nmkdir: missing operand";
        }
      } else if (currentCommand.startsWith("touch")) {
        const fileName = currentCommand.slice(6);
        if (fileName) {
          output = `\nFile ${fileName} created.`;
        } else {
          output = "\ntouch: missing operand";
        }
      } else if (currentCommand.startsWith("cat")) {
        const fileName = currentCommand.slice(4);
        if (fileName) {
          output = `\nContent of ${fileName}: (simulated content)`;
        } else {
          output = "\ncat: missing file name";
        }
      } else if (currentCommand === "exit") {
        output = "\nExiting terminal... (simulated)";  // Simulate terminal exit
      } else {
        output = `\nUnknown command: ${currentCommand}`;
      }

      // Update terminal text with command output and add the prompt once
      setText((prev) => prev + output);
      
      // Reset input
      setCurrentCommand("");
    }
  };

  const handleChange = (event) => {
    setCurrentCommand(event.target.value);
  };

  return (
    <motion.div
      ref={terminalRef}
      className="w-full h-full text-gray-400 font-mono p-6 rounded-lg relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Terminal Content */}
      <div className="overflow-auto max-h-full mb-4 custom-scrollbar">
        <pre className="whitespace-pre-wrap break-words">{text}</pre>
      </div>

      {/* Input */}
      {!isTyping && (
        <div className="relative flex">
          <span className="text-white">guest@os:~$</span>
          <motion.input
            type="text"
            className="bg-transparent border-none outline-none text-white w-full"
            placeholder=""
            value={currentCommand}
            onChange={handleChange}
            onKeyPress={handleCommand}
            autoFocus
            maxLength="200"
          />
          <span
            className={`absolute right-0 bottom-0 h-6 w-1 bg-green-400 transition-all duration-300 ${cursorVisible ? "opacity-100" : "opacity-0"}`}
          ></span>
        </div>
      )}
    </motion.div>
  );
}

export default Terminal;
