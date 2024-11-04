import React, {useState} from 'react';
import Face from "../Img/face.png";
import SpeechBox from '../Components/SpeechBox';
import { speechArray } from '../Data/Speech';



const Main = ({speech, setSpeech, points, setPoints, pointsPerClick, setPointsPerClick}) => {


    function increasePoints(){
        setPoints(points + pointsPerClick);
        }
        function changeSpeech(){
           setSpeech (speech + speechArray);
           return (
            
           )
        }
        
    return(
        <div className="bg-teal-600 text white w-screen flex-col items-center mx-auto justify-center h-screen text-center">
        <h1 className="pt-10 text-4xl">Your points: {points}</h1>
        <br/>
        <br/>
        <img src={Face} alt="hehe" className="w-40 h-45 items-center mx-auto justify-center mb-8 animate-bounce" onClick={() => increasePoints() && changeSpeech()}/>
        <div className="grid-cols-3 flex justify-center pt-8" >
            <SpeechBox
            speech={""}
             />

            </div>
        
        

        </div>

    )
}

export default Main