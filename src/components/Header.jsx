import React, { useState, useEffect } from "react";
import "../App.css";

const Header = () => {
  const [time, setTime] = useState(new Date());
  const [activeMenu, setActiveMenu] = useState(null);
  const [soundMuted, setSoundMuted] = useState(false);
  const [wifiDisabled, setWifiDisabled] = useState(false);
  const [showNetworks, setShowNetworks] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const toggleMute = () => {
    setSoundMuted(!soundMuted);
    setActiveMenu(null);
  };

  const toggleWiFi = () => {
    setWifiDisabled(!wifiDisabled);
    setActiveMenu(null);
  };

  const handleViewNetworks = () => {
    setShowNetworks(!showNetworks);
  };

  const networks = [
    { name: "Home Network", strength: "/assets/strong-signal.jpg" },
    { name: "Office WiFi", strength: "/assets/medium-signal.jpg" },
    { name: "Public WiFi", strength: "/assets/weak-signal.jpg" },
  ];

  return (
    <div className="header-animation absolute top-0 left-0 w-full z-50">
      <div className="flex sm:flex-row items-center backdrop-blur-lg bg-white/10 shadow h-9 px-3 justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/assets/logo.jpg" alt="Logo" className="w-14" />
        </div>

        {/* Buttons Section */}
        <div className="relative flex items-center gap-3 flex-wrap justify-end sm:justify-start w-full sm:w-auto">
          {/* Translate Button */}
          <div className="relative">
            <button
              className="p-1 hover:bg-white/20 rounded transition"
              onClick={() => toggleMenu("translate")}
            >
              <img src="/assets/translate.jpg" alt="Translate" className=" w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            {activeMenu === "translate" && (
              <div className="absolute top-9 right-0 bg-white/10 text-white backdrop-blur-lg shadow rounded w-36 sm:w-40">
                <ul className="py-1 text-sm">
                  <li className="px-2 sm:px-4 py-2 hover:backdrop-blur-md cursor-pointer flex items-center gap-1">
                    <img src="/assets/english.jpg" className="w-7 sm:w-8" /> English
                  </li>
                  <li className="px-2 sm:px-4 py-2 hover:backdrop-blur-md cursor-pointer flex items-center gap-1">
                    <img src="/assets/spain.jpg" className="w-7 sm:w-8" /> Español
                  </li>
                  <li className="px-2 sm:px-4 py-2 hover:backdrop-blur-md cursor-pointer flex items-center gap-1">
                    <img src="/assets/france.jpg" className="w-7 sm:w-8" /> Français
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* WiFi Button */}
          <div className="relative">
            <button
              className="p-1 hover:bg-white/20 rounded transition"
              onClick={() => toggleMenu("wifi")}
            >
              <img
                src={wifiDisabled ? "/assets/disable-wifi.jpg" : "/assets/wifi.jpg"}
                alt="WiFi"
                className=" w-4 h-4 sm:w-5 sm:h-5"
              />
            </button>
            {activeMenu === "wifi" && (
              <div className="absolute top-9 right-0 bg-white/10 backdrop-blur-lg text-white shadow rounded w-36 sm:w-40">
                <ul className="py-1 text-sm">
                  <li
                    className="px-3 sm:px-4 py-2 hover:backdrop-blur-md cursor-pointer"
                    onClick={handleViewNetworks}
                  >
                    View Networks
                  </li>
                  <li
                    className="px-3 sm:px-4 py-2 hover:backdrop-blur-lg cursor-pointer"
                    onClick={toggleWiFi}
                  >
                    {wifiDisabled ? "Enable WiFi" : "Disable WiFi"}
                  </li>
                </ul>
                {showNetworks && (
                  <div className="bg-white/10 text-white mt-1 p-2 rounded shadow">
                    <ul>
                      {networks.map((network, index) => (
                        <li key={index} className="flex justify-between items-center py-1">
                          <span>{network.name}</span>
                          <img src="/assets/wifi.jpg" alt="Signal Strength" className="w-4 sm:w-5 h-4 sm:h-5" />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sound Button */}
          <div className="relative">
            <button
              className="p-1 hover:bg-white/20 rounded transition"
              onClick={() => toggleMenu("sound")}
            >
              <img
                src={soundMuted ? "/assets/mute.jpg" : "/assets/sound.jpg"}
                alt="Sound"
                className=" w-4 h-4 sm:w-5 sm:h-5"
              />
            </button>
            {activeMenu === "sound" && (
              <div className="absolute top-9 right-0 bg-white/10 backdrop-blur-lg text-white shadow rounded w-36 sm:w-40">
                <ul className="py-1 text-sm">
                  <li
                    className="px-2 sm:px-4 py-2 hover:backdrop-blur-md cursor-pointer"
                    onClick={toggleMute}
                  >
                    {soundMuted ? "Unmute" : "Mute"}
                  </li>
                  <li className="px-2 sm:px-4 py-2 hover:backdrop-blur-md cursor-pointer">
                    Volume Up
                  </li>
                  <li className="px-2 sm:px-4 py-2 hover:backdrop-blur-md cursor-pointer">
                    Volume Down
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Time Display */}
          <div className="font-mono text-sm text-white">{formatTime(time)}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
