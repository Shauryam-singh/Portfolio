import { useState, useEffect } from "react";
import BottomBar from "./components/BottomBar";
import AboutGui from "./components/AboutGui";
import SkillsGui from "./components/SkillsGui";
import CustomizeOption from "./components/CustomizeOption";
import Header from "./components/Header";
import GuiWindow from "./components/GuiWindow";
import ContextMenu from "./components/ContextMenu";
import "./App.css";
import ProjectGui from "./components/ProjectGui";
import Github from "./components/Github";
import Contact from "./components/Contact";
import Terminal from "./components/Terminal";

function App() {
  const [openGuis, setOpenGuis] = useState([]);
  const [guiPositions, setGuiPositions] = useState({});
  const [maximizedGuis, setMaximizedGuis] = useState({});
  const [minimizedGuis, setMinimizedGuis] = useState([]);
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 });
  const [currentBackground, setCurrentBackground] = useState("/assets/background.jpg");
  const [focusedGui, setFocusedGui] = useState(null); // Track the focused GUI
  const backgroundOptions = [
    "/assets/background.jpg",
    "/assets/bg1.jpg",
    "/assets/bg2.jpg",
    "/assets/bg3.jpg",
    "/assets/bg4.jpg",
  ];

  const handleSelectBackground = (newBg) => {
    setCurrentBackground(newBg); // Update the current background
  };

  const guiDimensions = {
    About: { width: "30vw", height: "20vh", icon: "/assets/about.jpg", gradient: "radial-gradient(circle, rgba(24,50,92,1) 0%, rgba(12,25,46,1) 100%)" },
    Skills: { width: "35vw", height: "25vh", icon: "/assets/skills.jpg", gradient: "radial-gradient(circle, rgba(24,50,92,1) 0%, rgba(12,25,46,1) 100%" },
    Projects: { width: "40vw", height: "30vh", icon: "/assets/projects.jpg", gradient: "radial-gradient(circle, rgba(24,50,92,1) 0%, rgba(12,25,46,1) 100%" },
    Terminal: { width: "45vw", height: "35vh", icon: "/assets/terminal.jpg", gradient: "radial-gradient(circle, rgba(24,50,92,1) 0%, rgba(12,25,46,1) 100%" },
    Github: { width: "45vw", height: "35vh", icon: "/assets/github.jpg", gradient: "radial-gradient(circle, rgba(24,50,92,1) 0%, rgba(12,25,46,1) 100%" },
    Contact: { width: "45vw", height: "35vh", icon: "/assets/contact.jpg", gradient: "radial-gradient(circle, rgba(24,50,92,1) 0%, rgba(12,25,46,1) 100%" },
    Customize: { width: "45vw", height: "35vh", icon: "/assets/customize.jpg", gradient: "radial-gradient(circle, rgba(24,50,92,1) 0%, rgba(12,25,46,1) 100%" },
  };

  const handleOpenGui = (guiType) => {
    if (!openGuis.includes(guiType)) {
      const { width, height } = guiDimensions[guiType] || { width: "50vw", height: "40vh" };
      const lastGui = openGuis[openGuis.length - 1];
      const lastPosition = guiPositions[lastGui] || { x: 5, y: 35 }; // Default relative position

      setOpenGuis((prev) => [...prev, guiType]);
      setGuiPositions((prev) => ({ ...prev, [guiType]: { x: lastPosition.x + 15, y: lastPosition.y + 5 } }));
    }
    setFocusedGui(guiType); // Set the clicked GUI as focused
  };

  const handleCloseGui = (guiType) => {
    setOpenGuis((prev) => prev.filter((gui) => gui !== guiType));
    setMaximizedGuis((prev) => {
      const updated = { ...prev };
      delete updated[guiType];
      return updated;
    });
    setGuiPositions((prev) => {
      const updated = { ...prev };
      delete updated[guiType];
      return updated;
    });
    setMinimizedGuis((prev) => prev.filter((gui) => gui !== guiType));
  };

  const handleMinimize = (guiType) => {
    setMinimizedGuis((prev) => [...prev, guiType]);
    setOpenGuis((prev) => prev.filter((gui) => gui !== guiType));
  };

  const handleMaximize = (guiType) => {
    setMaximizedGuis((prev) => ({ ...prev, [guiType]: !prev[guiType] }));
  };

  const renderGuiContent = (guiType) => {
    switch (guiType) {
      case "About":
        return <AboutGui />;
      case "Skills":
        return <SkillsGui />;
      case "Projects":
        return <ProjectGui />;
      case "Terminal":
        return <Terminal />;
      case "Github":
        return <Github />;
      case "Contact":
        return <Contact />;
      case "Customize":
        return (
          <CustomizeOption
            currentBackground={currentBackground}
            backgroundOptions={backgroundOptions}
            onSelectBackground={handleSelectBackground}
          />
        );
      default:
        return <div>Content for {guiType}</div>;
    }
  };

  const handleRightClick = (event) => {
    event.preventDefault();
    setContextMenu({ visible: true, x: event.clientX, y: event.clientY });
  };

  const handleCloseContextMenu = (event) => {
    if (!event.target.closest(".context-menu")) {
      setContextMenu({ visible: false, x: 0, y: 0 });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseContextMenu);
    return () => {
      document.removeEventListener("click", handleCloseContextMenu);
    };
  }, []);

  return (
    <div
      className="w-full h-screen flex flex-col bg-blur bg-cover bg-center"
      onContextMenu={handleRightClick}
      style={{ backgroundImage: `url(${currentBackground})` }}
    >
      {Object.values(maximizedGuis).every((isMaximized) => !isMaximized) && <Header />}
      
      {/* Conditionally hide BottomBar if any window is maximized */}
      {!Object.values(maximizedGuis).includes(true) && (
        <BottomBar
          onAppClick={handleOpenGui}
          openGuis={openGuis}
          minimizedGuis={minimizedGuis}
        />
      )}
      
      {openGuis.map((guiType) => {
        const isMaximized = maximizedGuis[guiType];
        const { icon, gradient } = guiDimensions[guiType] || {};
        const width = isMaximized ? "100%" : guiDimensions[guiType].width;
        const height = isMaximized ? "100%" : guiDimensions[guiType].height;
        const position = isMaximized ? { x: 0, y: 0 } : guiPositions[guiType];

        return (
          <GuiWindow
            key={guiType}
            guiType={guiType}
            position={position}
            maximized={isMaximized}
            onClose={handleCloseGui}
            onMinimize={handleMinimize}
            onMaximize={handleMaximize}
            content={renderGuiContent(guiType)}
            width={width}
            height={height}
            icon={icon}
            gradient={gradient}
            focused={guiType === focusedGui} // Pass the focused state
            onFocus={() => setFocusedGui(guiType)} // Update the focused state when clicked
          />
        );
      })}
      
      {contextMenu.visible && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onCustomizeClick={() => handleOpenGui("Customize")}
        />
      )}
    </div>
  );
}

export default App;
