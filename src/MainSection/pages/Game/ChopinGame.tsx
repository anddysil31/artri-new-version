import React from 'react'
import ChopinNotesDown from './GameComponents/Board/Chopin'

import { BallKeyboard } from './GameComponents/GameController/BallKeyboard'

export default function ChopinGame() {
  return (
    <div>
        <ChopinNotesDown />
        <BallKeyboard />
    </div>
  )
}
