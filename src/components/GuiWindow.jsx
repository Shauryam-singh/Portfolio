import { useRef, useState, useEffect } from "react";
import Draggable from "react-draggable";
import { motion } from "framer-motion";

function GuiWindow({
  guiType,
  position,
  maximized,
  onClose,
  onMinimize,
  onMaximize,
  content,
  icon,
  gradient,
  focused,
  onFocus, // Callback to notify parent when the window is focused
}) {
  const guiRef = useRef(null);
  const [animationState, setAnimationState] = useState("opening");
  const [isMaximized, setIsMaximized] = useState(maximized);
  const [lastPosition, setLastPosition] = useState(position);

  // Handle maximize toggle
  const toggleMaximize = () => {
    if (isMaximized) {
      // Restore to original position
      setIsMaximized(false);
      guiRef.current.style.left = `${lastPosition.x}px`;
      guiRef.current.style.top = `${lastPosition.y}px`;
      onMaximize(guiType, false); // Notify parent that the GUI is no longer maximized
    } else {
      // Save current position before maximizing
      setLastPosition(guiRef.current.getBoundingClientRect());
      setIsMaximized(true);
      onMaximize(guiType, true); // Notify parent that the GUI is maximized
    }
  };

  // Prevent overflow when dragging
  useEffect(() => {
    if (guiRef.current && !isMaximized) {
      const rect = guiRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const overflowRight = rect.right > windowWidth;
      if (overflowRight) {
        guiRef.current.style.left = `${windowWidth - rect.width - 20}px`;
      }

      const overflowBottom = rect.bottom > windowHeight;
      if (overflowBottom) {
        guiRef.current.style.top = `${windowHeight - rect.height - 40}px`;
      }
    }
  }, [position, isMaximized]);

  const handleClose = () => {
    setAnimationState("closing");
    setTimeout(() => onClose(guiType), 300); // Wait for the animation to complete
  };

  const handleMinimize = () => {
    if (!isMaximized) {
      setAnimationState("minimizing");
      setTimeout(() => onMinimize(guiType), 300); // Wait for the animation to complete
    }
  };

  const motionVariants = {
    closing: {
      opacity: 0,
      scale: 0.9,
      x: "-100%",
      y: "-100%",
      transition: { duration: 0.4 },
    },
    minimizing: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
    },
  };

  const handleFocus = () => {
    if (onFocus) {
      onFocus(guiType); // Notify parent that this window was focused
    }
  };

  return (
    <Draggable
      handle=".handle"
      bounds="parent"
      defaultPosition={lastPosition}
      position={isMaximized ? { x: 0, y: 0 } : null}
      nodeRef={guiRef}
      disabled={isMaximized} // Disable dragging when maximized
    >
      <motion.div
        ref={guiRef}
        className={`absolute ${isMaximized ? "w-full h-full top-0 left-0" : ""} bg-cover bg-center bg-no-repeat rounded-md shadow-xl flex flex-col gui-window`}
        style={{
          background: gradient,
          width: `${isMaximized ? "100%" : "70vw"}`, // Adjust width for smaller screens
          height: `${isMaximized ? "100%" : "80vh"}`, // Adjust height for smaller screens
          zIndex: focused ? 49 : 10, // Adjust z-index for focused state
        }}
        initial="opening"
        animate={animationState}
        variants={motionVariants}
        onClick={handleFocus} // Set focus on click
      >
        <div className="flex justify-between items-center p-2 text-white handle cursor-pointer rounded-t-md">
          <div className="flex">
            <img src={icon} alt={`${guiType} icon`} className="h-6 w-6 mr-2" />
            <h3 className="text-sm md:text-base">{guiType}</h3>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleMinimize}
              className={`bg-yellow-500 hover:bg-yellow-300 rounded-full h-3 w-3 ${isMaximized ? "cursor-not-allowed opacity-50" : ""}`}
              disabled={isMaximized} // Disable minimize button when maximized
            ></button>
            <button
              onClick={toggleMaximize}
              className="bg-green-500 hover:bg-green-300 rounded-full h-3 w-3"
            ></button>
            <button
              onClick={handleClose}
              className="bg-red-500 hover:bg-red-300 rounded-full h-3 w-3"
            ></button>
          </div>
        </div>

        <div className="w-full h-full backdrop-blur-3xl bg-white/10 rounded-md pt-0 text-white overflow-auto">
          {content}
        </div>
      </motion.div>
    </Draggable>
  );
}

export default GuiWindow;
