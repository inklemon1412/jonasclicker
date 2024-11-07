import React, {useState} from 'react';




function Buy({text, cost, points, setPoints}) {
    const [clicked, setClicked]=useState(false);

    function buyItem(){
       setPoints(points-cost);
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
            onClick={buyItem}
            disabled={points < cost}
          >
            Ja takk veldig gjerne
          </button>
          {clicked && <p className="mt-2 text-sm">Takk for handelen!</p>}
        </div>
      )
    }

    export default Buy