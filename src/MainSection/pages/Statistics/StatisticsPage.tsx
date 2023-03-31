import axios from 'axios'
import React, { useEffect, useState } from 'react'
import data from '../../../../data'

const statisticsURL = 'http://localhost:8081/api/statistics'
export default function StatisticsPage() {
    const [listStatistics, setListStatistics] = useState<String[]>([])
    const GetStatistics = async(e:Event) => {
        e.preventDefault()
        try{
            const response = await axios.get(statisticsURL)
            console.log(response.data)
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
        GetStatistics
    },[])
  return (

    <div>StatisticsPage</div>
  )

}
