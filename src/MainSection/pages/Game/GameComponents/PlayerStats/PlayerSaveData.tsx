import axios from "axios"
import { useEffect, useState } from "react"

const statisticsURL = "htpp://localhost:8081/api/statistics"

interface PlayerProps{
    score:number
}

export default function PlayerSaveData( {score}:PlayerProps){
    
    const fecha = new Date()
    const data ={
        date:fecha,
        score:score,
        songId:1,
        memberId:1
    }
    const saveData = async() =>{
    try{
        await axios.post(statisticsURL, data)
    } catch (err){
        console.error(err)
    }
    }
   return(
    <div style={{ fontSize:'80px', position:'absolute', marginLeft:'2ex'}}>
        {score}
        <button onClick={saveData}>Guardar</button>
    </div>
   )

}