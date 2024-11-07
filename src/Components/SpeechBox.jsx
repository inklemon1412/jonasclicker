import React, {useState, useEffect} from 'react';


const SpeechBox = ({changeSpeech}) => {
   useEffect(() => {
    changeSpeech();
   }, []);


return (
<div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 text-white rounded-e-xl rounded-es-xl dark:bg-gray-700">
    
      
       {changeSpeech()}
     
      </div>
);
};


export default SpeechBox;