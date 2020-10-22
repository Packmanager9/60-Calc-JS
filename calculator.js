


let zimgs = []

for(let i = 0; i < 60; i++) {
    zimgs.push(Object.assign(new Image(), { 'src': `a${i}.png` }));
    }

const tutorial_canvas = document.getElementById("tutorial");
const tutorial_canvas_context = tutorial_canvas.getContext('2d');
tutorial_canvas.style.background = "#FFFFFF00"

let flex = tutorial_canvas.getBoundingClientRect();

// Add the event listeners for mousedown, mousemove, and mouseup
const tip = {}
let xs
let ys

tutorial_canvas_context.fillStyle = "black";
tutorial_canvas_context.font = `${30}px Arial`;

let keysPressed = {}

document.addEventListener('keydown', (event) => {

    if(event.key > -1 && event.key < 10){
        keysPressed[event.key.toLocaleLowerCase()] = true;
    }
        counter = 0
        let num = Object.keys(keysPressed)
        if(num.length == 1){
            if(!num.includes(' ')){
                workingnum.push(parseInt(num.join(''), 10))
            }
        }


        

    if(keysPressed[' ']){
       let thisnum = new BaseSixtyNumber(workingnum.join(''))
    }else if(event.key == 'x' ){
        tutorial_canvas_context.clearRect(0,0,tutorial_canvas.width, tutorial_canvas.height)
        workingnum = []
    }else{
        tutorial_canvas_context.fillText(`${workingnum.join('')}`, 10, 50)
    }
 });
 
 document.addEventListener('keyup', (event) => {
            delete keysPressed[event.key.toLocaleLowerCase()];
  });


window.addEventListener('mousedown', e => {
      flex = tutorial_canvas.getBoundingClientRect();
      xs = e.clientX - flex.left;
      ys = e.clientY - flex.top;
      tip.x = xs
      tip.y = ys
      tip.body = tip
 });

 
class BaseSixtyNumber{
    constructor(num){
        this.number = num
        this.digits = this.sixtify(num)

        tutorial_canvas_context.clearRect(0,0,tutorial_canvas.width, tutorial_canvas.height)
        for(let t=0;t<this.digits.length;t++){
        tutorial_canvas_context.drawImage(zimgs[this.digits[t]], 0,0, zimgs[this.digits[t]].width, zimgs[this.digits[t]].height, t*Math.min((tutorial_canvas.width/this.digits.length), 50), 80, Math.min((tutorial_canvas.width/this.digits.length), 50),Math.min((tutorial_canvas.width/this.digits.length), 50))

        if(t< this.digits.length-1){ 
            tutorial_canvas_context.fillText(`${this.digits[t]},`, 10+(t*Math.min((tutorial_canvas.width/this.digits.length), 50)),200)
        }else{
            tutorial_canvas_context.fillText(`${this.digits[t]}`, 10+(t*Math.min((tutorial_canvas.width/this.digits.length), 50)),200)
        }
        }

        tutorial_canvas_context.fillText(`${workingnum.join('')}`, 10, 50)
    }
    sixtify(num){
        let arr = []
        let length = -1
        for(let t = 1; t<num;t++){
            t*=60

            length+=1
        }
        for(let t = length; t>=0;t--){
            let digit = Math.floor(num/(Math.pow(60, t)))
            arr.push(digit)
            num = num%(Math.pow(60, t))
        }
        return arr
    }


}


let workingnum = []
let counter = 0



// window.setInterval(function(){ 

//     counter++
 

// }, 10)


// let bumber = new BaseSixtyNumber(7200)