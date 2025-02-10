import React from "react";

loading () {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      {/* Loader Container */}
      <div className="flex flex-col items-center gap-4">
        
        {/* Sharingan Spinner */}
        <div className="relative flex items-center justify-center w-40 h-40 rounded-full bg-red-700 border-8 border-black shadow-[0_0_30px_10px_rgba(255,0,0,0.8)]">
          
          {/* Rotating Inner Layer (Tomoe, Pupil, and Ring) */}
          <div className="absolute w-full h-full animate-spin duration-[3s]">

            {/* Black Circular Ring (Moves with Tomoe) */}
            <div className="absolute inset-0 border-4 border-black rounded-full"></div>

            {/* Three Tomoe (Black Dots) - These Move */}
            <div className="absolute w-full h-full">
              <div className="absolute w-8 h-8 bg-black rounded-full"
                  style={{ top: "15%", left: "50%", transform: "translate(-50%, -50%)" }}></div>
              <div className="absolute w-8 h-8 bg-black rounded-full"
                  style={{ top: "75%", left: "22%", transform: "translate(-50%, -50%)" }}></div>
              <div className="absolute w-8 h-8 bg-black rounded-full"
                  style={{ top: "75%", right: "22%", transform: "translate(50%, -50%)" }}></div>
            </div>

            {/* Inner Black Circle (Moves with Tomoe) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-black rounded-full"></div>
            </div>

          </div>

          {/* Glowing Outer Ring (Subtle Animation) */}
          <div className="absolute w-full h-full rounded-full border-4 border-red-500 animate-pulse"></div>

        </div>

        {/* Loading Text */}
        <p className="text-red-500 text-2xl font-bold animate-pulse tracking-widest">Loading...</p>

      </div>
    </div>
  );
};

export default loading;
