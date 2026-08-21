let boxes = document.querySelectorAll(".box");
let hide= document.querySelector(".hide");
let btn= document.querySelector("button");


 let chance= "true";//playerX
 boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("Button was pressed");
        if (chance==="true"){
    box.innerText= "X"
    chance= "false";
    box.classList.remove(".hide");
}
else{
    box.innerText="O";
    chance= "true";
    box.classList.remove(".hide");
 }
box.style.pointerEvents="none";
winner();
});
 });


 let stopGame=()=>{
for(box of boxes){
    box.style.pointerEvents="none";
}
 }


const winCondition=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,8]];
let winner=()=>{
for(let win of winCondition){
    let val1= boxes[win[0]].innerText;
      let val2= boxes[win[1]].innerText;
      let val3= boxes[win[2]].innerText;
   if (val1!= ""&& val2!=""&& val3!=""){
    if(val1===val2&& val2=== val3){
        console.log( "winner");
        alert(`Winner is player ${val1} ;Loser fuck you`);
        stopGame();
    }
   }
}
}


btn.addEventListener("click", (box)=>{
    boxes.forEach((box)=>{
        chance= "true";
       box.innerText= "";
       box.classList.remove("hide");
       box.style.pointerEvents= "auto";
    })
    
    
    
  });
