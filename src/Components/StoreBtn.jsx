import React from 'react'
import {useNavigate} from 'react-router-dom'

const StoreBtn = () => {
    const navigate = useNavigate();

    function goToStore(){
        navigate ("/store")
    }


return (
    <div className ="w-40 p-2 m-1 text-center">
      <button className= "font-bold py-2 w-full rounded-lg mt-1 bg-lime-300 hover:bg-blue-700 text-black"
      onClick = {goToStore}>
        Ta meg til butikken B)
      </button>
    </div>
  )
}

export default StoreBtn