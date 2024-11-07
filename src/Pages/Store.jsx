import React, {useState} from 'react';
import Upgrade from '../Components/Upgrade';
import Buy from '../Components/Items';
import BoughtAni from '../Components/BoughtAni';
import {useNavigate} from 'react-router-dom'
import ReturnBtn from '../Components/ReturnBtn';


const Store = ({text, points, setPoints, pointsPerClick, setPointsPerClick}) => {
    const navigate = useNavigate();

    function increasePoints(){
        setPoints(points + pointsPerClick);
        }
        function returnToMain(){
            navigate("/")
        }

    return(
    <div className="bg-teal-600 text white w-screen flex-col items-center mx-auto justify-center h-screen text-center">
        <h1 className="pt-10 text-4xl">Poænga dine: {points}</h1>
        <br/>
        <ReturnBtn/>
        <br/>
        <div className="grid-cols-3 flex justify-center pt-8" >
        <BoughtAni/>
        <Upgrade
                text={"Testing"}
                cost={0}
                increase={5}
                points={points}
                setPoints={setPoints}
                pointsPerClick={pointsPerClick}
                setPointsPerClick={setPointsPerClick}
            />
        <Upgrade
                text={"Kjøp 1 ekstra boost for 100 poeng"}
                cost={100}
                increase={1}
                points={points}
                setPoints={setPoints}
                pointsPerClick={pointsPerClick}
                setPointsPerClick={setPointsPerClick}
            />
            <Upgrade
                text={"Kjøp 2 ekstra booster for 200 poeng"}
                cost={200}
                increase={2}
                points={points}
                setPoints={setPoints}
                pointsPerClick={pointsPerClick}
                setPointsPerClick={setPointsPerClick}
                
            />
             <Upgrade
                text={"Kjøp 3 ekstra booster for 300 poeng"}
                cost={300}
                increase={3}
                points={points}
                setPoints={setPoints}
                pointsPerClick={pointsPerClick}
                setPointsPerClick={setPointsPerClick}
                
            />
            

        </div>
        
        <div className="grid-cols-3 flex justify-center pt-8" >
        <Buy
            text={"Kjøp meg litt snus. Bare 500 poeng for en deal!"}
            cost={500}
            points={points}
            setPoints={setPoints}
            />
            <Buy
            text={"Energidrikke for 500?"}
            cost={500}
            points={points}
            setPoints={setPoints}
            />
            <Buy
            text={"Potetgull for 600 takk"}
            cost={600}
            points={points}
            setPoints={setPoints}
            />
        </div>
        </div>
        )
}


export default Store