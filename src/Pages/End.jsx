import React from 'react';
import EndBtn from '../Components/WinBtn';

const End = ({ setPoints, setPointsPerClick }) => {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen bg-black text-white overflow-hidden">
          <h1 className="text-center text-5xl font-extrabold mb-8 animate-pulse">
            Takk for å ha spilt Jonas Klikkeren!
          </h1>
          
          <div className="h-3/4 w-full overflow-hidden">
            
          </div>
          <div className="mt-auto mb-4">
            <EndBtn setPoints={setPoints} setPointsPerClick={setPointsPerClick} />
          </div>
        </div>
      );
    };
    
export default End;