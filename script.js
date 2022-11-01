
function randomNum(){
    return Math.floor(Math.random() * 256)
}

function generateColor(){
    let r = randomNum();
    let g = randomNum();
    let b = randomNum();
    let result = `rgb(${r}, ${g}, ${b})`;
    return result;
}


let arr = [];
let val = 3;

let boxes = document.getElementsByClassName("boxes");
let header = document.getElementById("nav1");
let easymode = document.getElementById("easy");
let hardmode = document.getElementById("hard");
let result = document.getElementById("color");
let tryagain = document.getElementById("playAgain");
let winningMsg = document.getElementById("result")

function startGame(){
    for(let i=0; i<val;i++){
        let boxCreate = document.createElement("div");
        boxCreate.classList.add("box");
        let color = generateColor();
        arr.push(color)
        boxCreate.style.backgroundColor = color;
        boxes[0].appendChild(boxCreate);
    }

    result.textContent = gameColor();
    console.log(result.textContent);
    
    let box = document.querySelectorAll(".box");
    for(let i=0; i<box.length;i++){
        box[i].addEventListener("click", function(){
            if(result.textContent == box[i].style.backgroundColor){
                header.style.backgroundColor = box[i].style.backgroundColor;
                tryagain.textContent = "TRY AGAIN ?";
                winningMsg.textContent = "YOU WON!"
                for(let j=0; j<box.length;j++){
                    box[j].style.backgroundColor = box[i].style.backgroundColor;
                }
            }else{
                box[i].style.backgroundColor = "rgb(26, 24, 24)";
            }
       });
    }
}



function gameColor(){
  let color =  Math.floor(Math.random() * (arr.length));
  let result = arr[color];
  return result;
}

function removeAllChild() {
    while (boxes[0].hasChildNodes()) {
        boxes[0].removeChild(boxes[0].lastChild);
    }
}

let btn = document.getElementById("playAgain");
btn.addEventListener("click", function(){
    tryagain.textContent = "NEW COLORS";
    winningMsg.textContent = "";
    removeAllChild();
    arr = [];
    startGame()
})

easymode.addEventListener("click", function(){
    easymode.style.fontWeight = "bolder";
    easymode.style.textDecoration = "none";
    hardmode.style.fontWeight = "normal";
    hardmode.style.textDecoration = "line-through";
    removeAllChild();
    arr = [];
    val =3;
    startGame();
});

hardmode.addEventListener("click", function(){
    hardmode.style.fontWeight = "bolder";
    easymode.style.fontWeight = "normal";
    hardmode.style.textDecoration = "none";
    easymode.style.textDecoration = "line-through";
    removeAllChild();
    arr = [];
    val=6;
    startGame();
});

startGame();