import axios from 'axios'
import React, { useEffect, useState } from 'react'


const statisticsURL = 'http://localhost:8081/api/statistics/member'
export default function StatisticsPage() {
    const [listStatistics, setListStatistics] = useState<String[]>([])
    const GetStatistics = async() => {
        try{
            await axios.get(statisticsURL).
            then(results =>setListStatistics(results.data))
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
        GetStatistics()
    },[])
  return (

    <div>StatisticsPage</div>
  )

}
