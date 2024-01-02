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
            turnX=false;
        }
        else
        {
            box.innerText="O";
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
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=="" && pos2!=="" && pos3!=="")
        {
            if(pos1==pos2 && pos2==pos3)
            {    
                showWinner(pos1);
                disableAllBoxes();
                draw=false;
            }
        }
    }
}

const showWinner=(winner) => {
    msg.innerText=`Winner : ${winner}`;
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
        msg.classList.add("hide");
        turnX=true;
        turns=0;
        draw=true;
    }
}

resetBtn.addEventListener("click", resetGame);

