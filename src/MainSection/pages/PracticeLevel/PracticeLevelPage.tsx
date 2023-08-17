import { Divider } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import MusicCard from './components/MusicCard'
import "./styles/PracticeLevelPage.css"


const musicData = [
  {
  title: 'Para Elisa', 
  description:'Es una bagatela para piano solo, compuesta en la menor por el compositor alemán Ludwig van Beethoven.',
  link:'/artri/auth/game/1'
  },
  {
    title:'Waltz in A minor', 
    description:'Vals n.°19 en la menor de Frédéric Chopin. El vals fue escrito en algún momento entre 1847 y 1849, [1] pero no fue publicado hasta 1860, después de la muerte del compositor, por Jacques Maho',
    link:'/artri/auth/game/2'
  },
  {
    title:'Marcha Turca', 
    description:'Es una sonata para piano compuesta por Wolfgang Amadeus Mozart. Aún no es sabido a ciencia cierta cuándo y dónde compuso Mozart la sonata',
    link:'/artri/auth/game/3'
  }
]

export default function PracticeLevelPage() {
  return (
      <div className='general-container'> 
        {musicData.map((music, index)=>{
          return(
            <div>
              <MusicCard name={`${musicData[index].title}`} 
              description={`${musicData[index].description}`}
              link={musicData[index].link}/>
            </div>
          )
        })}
      </div>
  )
}
