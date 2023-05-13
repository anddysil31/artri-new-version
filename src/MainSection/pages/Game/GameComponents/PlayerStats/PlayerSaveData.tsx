import axios from "axios"
import { useEffect, useState } from "react"

const statisticsURL = "htpp://localhost:8081/api/v1/statistics"

interface PlayerProps{
    score:number
    songId:number
    memberId:number
}

export default function PlayerSaveData( {score,songId, memberId}:PlayerProps){
    
    const fecha = new Date()
    const data ={
        date:fecha,
        score:score,
        songId:songId,
        memberId:memberId
    }
    const saveData = async() =>{
    try{
        await axios.post(statisticsURL, data)
    } catch (err){
        console.error(err)
    }
    }
   return(
    <div style={{ fontSize:'80px', position:'absolute', marginLeft:'2.5ex', marginTop:'0.5ex'}}>
        {score}
        <button onClick={saveData} style={{ fontSize:'22px'}}>Guardar</button>
    </div>
   )

}