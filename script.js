let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let msg=document.querySelector("#outcome");

let turnX=true;
let turns=0;
let draw=true;

let winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX===true)
        {
            box.innerText="X";
            box.classList.add("color-of-X");
            turnX=false;
        }
        else
        {
            box.innerText="O";
            box.classList.add("color-of-O");
            turnX=true;
        }
        box.disabled=true;
        checkWinner();
        turns++;
        console.log(turns);
        showDraw();
    })
})

const checkWinner=() => {
    for(let pattern of winPatterns)
    {
        let pos1=boxes[pattern[0]];
        let pos2=boxes[pattern[1]];
        let pos3=boxes[pattern[2]];
        if(pos1.innerText!=="" && pos2.innerText!=="" && pos3.innerText!=="")
        {
            if(pos1.innerText==pos2.innerText && pos2.innerText==pos3.innerText)
            {    
                pos1.classList.add("winner-glow");
                pos2.classList.add("winner-glow");
                pos3.classList.add("winner-glow");
                showWinner(pos1.innerText);
                disableAllBoxes();
                draw=false;
            }
        }
    }
}

const showWinner=(winner) => {
    msg.innerText=`Winner : ${winner}`;
    if(winner==="X")
        msg.classList.add("color-of-X");
    else
        msg.classList.add("color-of-O");
    msg.classList.remove("hide");
}

const showDraw=() => {
    if(turns===9 && draw===true)
    {
        msg.innerText="Draw";
        msg.classList.remove("hide");
    }
}

const disableAllBoxes=() => {
    for(let box of boxes)
        box.disabled=true;
}

const resetGame=() => {
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
        // box.classList.remove("winner-glow");
        // box.classList.remove("color-of-X");
        // box.classList.remove("color-of-O");
        box.setAttribute("class", "");
        box.classList.add("box");
        msg.setAttribute("class", "");
        msg.classList.add("hide");
        turnX=true;
        turns=0;
        draw=true;
    }
}

resetBtn.addEventListener("click", resetGame);

