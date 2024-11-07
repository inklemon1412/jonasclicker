import React from 'react'
import {useNavigate} from 'react-router-dom'

const ReturnBtn = () => {
    const navigate = useNavigate();

    function goBack(){
        navigate ("/")
    }


return (
    <div className ="w-40 p-2 m-1 text-center">
      <button className= "font-bold py-2 w-full rounded-lg mt-1 bg-lime-300 hover:bg-blue-700 text-black"
      onClick = {goBack}>
        Har ikke mer poæng. Ta meg tilbake :(
      </button>
    </div>
  )
}

export default ReturnBtn