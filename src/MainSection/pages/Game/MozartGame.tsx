import React from 'react'
import MozartNotesDown from './GameComponents/Board/Mozart'
import { BallKeyboard } from './GameComponents/GameController/BallKeyboard'

export default function MozartGame() {
  return (
    <div>
        <MozartNotesDown/>
        <BallKeyboard />
    </div>
  )
}
