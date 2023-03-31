import { Divider } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/PracticeLevelPage.css"

export default function PracticeLevelPage() {
  return (
      <div className="general-container">

    <div className='practice-container'>
        <div className="practice-title">
          Odisea
        </div>
        <div className="practice-body">
          Esta canción es particularmente rápida y de hermosa melodía
          <Divider />
            <button className='start-game'><Link to ="/artri/game">Jugar </Link></button>
        </div>
    </div>
      </div>
  )
}
