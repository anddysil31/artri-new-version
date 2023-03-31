import axios from "axios"
import { useEffect, useState } from "react"
// import { statistics } from "../../../service/Address copy/StatisticsService/StatisticsService"

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
        // axios.post(statistics, data).then(response => {console.log(response)})
        // .catch(err => console.log(err))
    }
   return(
    <div>
        {score}
        {/* <button onClick={saveData}>Save</button> */}
    </div>
   )

}