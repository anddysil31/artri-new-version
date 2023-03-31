class MovNotes{
    x:number;
    y:number;
    // dy:number;

    constructor(x:number, y:number, canvas:any){   
        this.x = x;
        this.y =y;
        // this.dy = dy;

    }
    draw(ctx:any, color:string, dy:number){
        this.y+=dy
        ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(this.x,this.y, 120, 0, 2*Math.PI )
        ctx.fill()
    }
    
}

export {
    MovNotes
}