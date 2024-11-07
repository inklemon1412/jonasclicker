import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

import SpeechBox from '../Components/SpeechBox';
import StoreBtn from '../Components/StoreBtn';
import { speechArray } from '../Data/Speech';



const Main = ({speech, setSpeech, points, setPoints, pointsPerClick, setPointsPerClick}) => {
const navigate = useNavigate();



    function increasePoints(){
        setPoints(points + pointsPerClick);
        if (points > 5000){
          navigate("/end");
        }
        }
        
        function changeSpeech(){
          let randomIndex = Math.floor(Math.random() * speechArray.length);
          return speechArray[randomIndex];
           
        }
    return(
        <div className="bg-teal-600 text white w-screen flex-col items-center mx-auto justify-center h-screen text-center">
        <h1 className="pt-10 text-4xl">Poænga dine: {points}</h1>
        <br/>
        <StoreBtn/>
        <br/>
        <img src="/img/Face.png" alt="hehe" className="w-40 h-45 items-center mx-auto justify-center mb-8 animate-bounce" onClick={() => increasePoints() && changeSpeech()}/>
        <div className="grid-cols-3 flex justify-center pt-8" >
            <SpeechBox changeSpeech={changeSpeech} />
            </div>
        </div>
        

    )
}

export default Main