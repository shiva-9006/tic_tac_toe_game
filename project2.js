let btns=document.querySelectorAll(".btn1");
let resetBtn=document.querySelector("#btn2");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");

let turn0="true"; 
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
   btns.forEach((box)=>{
     box.addEventListener("click",()=>{
        if(turn0=="true"){
            box.innerText="O";
            turn0="false";
          }

        else{
            box.innerText="X";
            turn0="true";
            
     }
     box.disabled="true";

        checkWinner();
     });
});
const disableBoxes=()=>{
    for(let box of btns){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of btns){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`congratulations ,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
} 


const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1=btns[pattern[0]].innerText;
        let pos2= btns[pattern[1]].innerText;
        let pos3=btns[pattern[2]].innerText;
        if(pos1 !=0 && pos2 !=0 && pos3 !=0){ 
        if(pos1===pos2&&pos2===pos3){
          console.log("winner is",pos1);
          showWinner(pos1);

        }
    }
    }
   }
   newGameBtn.addEventListener("click",resetGame);
   resetBtn.addEventListener("click",resetGame);