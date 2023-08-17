import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StView from '../Interface/StatisticsViewInterface'
import '../styles/StView.css'
import  useSWR  from 'swr'

export default function GetStatisticsView() {
    const [data, setData] = useState<StView[]>([])
    
    const findAllStatistics = async () =>{
        try{
        await axios.get('http://localhost:8081/api/statistics/member')
        .then(results=>setData(results.data))
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        findAllStatistics()
    },[])

    
    return (
    <>
    {data?.map((stmember:StView)=>(
        <div key={stmember.id} className='table'>
            <div className='row'>
            {stmember.member}
            </div>
            <div className='row'>
            {stmember.song}
            </div>
            <div className='row'>
            {stmember.date}    
            </div>
            <div className='row'>
            {stmember.score}
            </div>

        </div>
    ))}
    </>
  )
}
