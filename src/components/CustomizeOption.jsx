import React from "react";

function CustomizeOption({ currentBackground, backgroundOptions = [], onSelectBackground }) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Customize Background</h1>

      {/* Display Current Background */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Current Background:</h2>
        <div
          className="w-full h-40 bg-blur bg-center mt-2 border rounded"
          style={{ backgroundImage: `url(${currentBackground})` }}
        ></div>
      </div>

      {/* Section to choose a new background */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Choose a New Background:</h2>
        <div className="flex gap-4 flex-wrap">
          {backgroundOptions.length > 0 ? (
            backgroundOptions.map((bg, index) => (
              <div
                key={index}
                className="w-32 h-20 bg-blur bg-center border rounded cursor-pointer hover:scale-105 transition-transform"
                style={{ backgroundImage: `url(${bg})` }}
                onClick={() => onSelectBackground(bg)} // Select new background
              >
                <div className="w-full h-full flex justify-center items-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold">Select</span>
                </div>
              </div>
            ))
          ) : (
            <p>No options available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomizeOption;
