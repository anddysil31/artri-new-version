import React, { useRef, useEffect, useState } from "react";
import { MovNotes } from "./MovNotes";
import PlayerStats from "../PlayerStats/PlayerStats";
import data from "../../../../../../data";
import "./styles/NotesDown.css";
import PlayerSaveData from "../PlayerStats/PlayerSaveData";
import { PlayCircleOutlined } from "@ant-design/icons";

let { player } = data;
const NotesDown = () => {
  const [score, setScore] = useState(0); // UseState for manage the score
  const [startGame, setStartGame] = useState(false) //Manage the start and end game

  const canvasRef = useRef<HTMLCanvasElement>(null);

  let blue = new MovNotes(160, 0, canvasRef);
  let red = new MovNotes(460, 0, canvasRef);
  let orange = new MovNotes(760, 0, canvasRef);
  let yellow = new MovNotes(1060, 0, canvasRef);

  const colorsNotes = [blue, red, orange, yellow];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    canvas.width = 1220;
    canvas.height = 600;

    const ctx = canvas?.getContext("2d");
    if (!ctx) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "a" &&
        blue.y > canvas.height - 200 &&
        blue.y < canvas.height - 30
      ) {
        setScore((score) => score + 10); 
        ctx?.clearRect(0, 0, ctx.canvas?.width, ctx.canvas?.height);
      }
      if (
        event.key === "s" &&
        red.y > canvas.height - 200 &&
        red.y < canvas.height - 30
      ) {
        setScore((score) => score + 10);
      }
      if (
        event.key === "d" &&
        orange.y > canvas.height -200 &&
        orange.y < canvas.height - 30
      ) {
        setScore((score) => score + 10);
      }
      if (
        event.key === "f" &&
        yellow.y > canvas.height - 200 &&
        yellow.y < canvas.height - 30
      ) {
        setScore((score) => score + 10);
      }
    };

    let animationFrameId: any;
    const song = new Audio(`/src/MainSection/notes/ForElisa.mp3`);
    document.addEventListener("keydown", handleKeyDown, true);
    if(startGame) {
          song.play()
      
      
    const render = () => {
      blue.draw(ctx, "blue", 2);
      if (blue.y > canvas.height + 120) {
        red.draw(ctx, "red", 2);
      }
      if (red.y > canvas.height + 120) {
        orange.draw(ctx, "orange", 2);
      }
      if (orange.y > canvas.height + 70) {
        yellow.draw(ctx, "yellow", 3);
      }
      if (yellow.y > canvas.height + 1000) {
        setScore(player.score);
        setStartGame(false);
        song.pause();
      }
      

      PlayerStats(ctx, player, canvas);
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();
}
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      document.addEventListener("keydown", handleKeyDown, true);
    };
  }, [startGame]);
 
  return (
    <div>
      <canvas ref={canvasRef} className="gameNotes" />
      <PlayerSaveData score={score} />
      {(!startGame)&&
      <button onClick={()=>setStartGame(true) } className='startButton'>
        <p className="startIcon"><PlayCircleOutlined /></p>
      </button> 
      }
      </div>
  );
};

NotesDown.defaultProps = {
  width: 1000,
  height: 1000,
};


export default NotesDown;
