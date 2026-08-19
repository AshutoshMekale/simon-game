console.log("app.js loaded");
let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2= document.querySelector("h2");

document.addEventListener("keypress", function () {
    if(started==false){
        console.log("started");
        started=true;
        levelup();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");

    },250);
};
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");

    },250);
};
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randcolor=btns[randIdx];
    let randBtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnFlash(randBtn);
};
function checkans(idx){
   
   
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }




    }else{
    h2.innerHTML=`game over! Your score was <b>${level}</b> <br>press any key to start`;
   document.querySelector("body").style.backgroundColor="red";
   setTimeout(function(){
document.querySelector("body").style.backgroundColor="white";
   },150);
   
    reset();
}


}
function btnpress(){
   
    let btn=this;
   userFlash(btn);
   usercolor=btn.getAttribute("id");
   userseq.push(usercolor);
   console.log(usercolor);
checkans(userseq.length-1);

};
let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnpress);
};
function reset(){
    console.log("RESET CALLED");

    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}