import React, {useState, useEffect} from 'react';
import {speechArray} from "../Data/Speech";

const SpeechBox = ({speech}) => {
    const [mainSpeech, setMainSpeech] = useState('');
    function changeSpeech(){
           
    }
    useEffect (() => {
        let randomNumber = Math.floor(Math.random() * speechArray.length);
        setMainSpeech(speech[randomNumber]);
        return() => {
    };
}, [speech]);

return (
<div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 text-white rounded-e-xl rounded-es-xl dark:bg-gray-700">
      
        My wisdom is thus: {mainSpeech} 
     
      </div>
);
};


export default SpeechBox;