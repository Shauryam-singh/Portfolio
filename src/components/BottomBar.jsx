function BottomBar({ onAppClick, openGuis, minimizedGuis }) {
  const baseApps = ["About", "Projects", "Skills", "Terminal", "Github", "Contact"];
  const isCustomizeVisible = openGuis.includes("Customize") || minimizedGuis.includes("Customize");
  const apps = isCustomizeVisible ? [...baseApps, "Customize"] : baseApps;

  return (
    <div className="fixed bottom-0 w-screen z-50">
      <div className="animated bottom-bar-animation">
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-wrap justify-between items-center backdrop-blur-2xl border-[1px] border-white/10 bg-white/5 h-16 sm:px-10 pt-2 md:py-0 rounded-md">
            {apps.map((label, index) => (
              <button
                key={index}
                onClick={() => onAppClick(label)}
                className="flex flex-col items-center px-2 mb-2 sm:mb-0"
              >
                <div className="group w-10 h-10 sm:w-12 sm:h-12 hover:-translate-y-4 hover:scale-125 hover:mx-2 transition-all relative">
                  <p className="invisible group-hover:visible absolute m-auto left-0 right-0 text-white text-xs p-2 w-max bg-white/5 rounded-md -translate-y-10">
                    {label}
                  </p>
                  <img
                    src={`../src/assets/${label.toLowerCase()}.jpg`}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    alt={label}
                  />
                  {/* Show a small line if the app is opened or minimized */}
                  {(openGuis.includes(label) || minimizedGuis.includes(label)) && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-1 bg-white/80 rounded-full" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
