import React, {useState} from 'react';


function Upgrade({text, cost, increase, points, setPoints, pointsPerClick, setPointsPerClick}) {
  const [clicked, setClicked]=useState(false);

    function buyUpgrade(){
        setPoints(points-cost);
        setPointsPerClick(pointsPerClick+increase);
        if (!clicked){
          setClicked(true);
         }
        
       
    }
   
   
    return (
        <div className="shadow-md purple border rounded-2xl w-40 p-2 m-1 text-center">
            <h1 className='font-bold'>{text}</h1>
            <button
            className={`font-bold py-2 w-full rounded-lg mt-1 ${
              points >= cost
                ? "bg-blue-500 hover:bg-blue-700 text-black"
                : "bg-gray-400 cursor-not-allowed opacity-50 text-black"
            }`}
            onClick={buyUpgrade}
           
            disabled={points < cost}
          >
            Ja takk veldig gjerne
          </button>
          {clicked && <p className="mt-2 text-sm">Mer poeng til deg!</p>}
        </div>
        
      )
    }

    export default Upgrade