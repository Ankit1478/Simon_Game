 let gameSeq=[];
 let userSeq=[];

 let btns=["yellow","red","purple","green"];
 let started=false;
 let level=0;
 let highestlevel=0;

 let h2=document.querySelector("h2");

 document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;

        levelup();
    }
 });


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}



function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    //random bttom
    let randomidx=Math.floor(Math.random()*4);
    let randomcol=btns[randomidx];
    let randombtn=document.querySelector(`.${randomcol}`);
    // console.log(randomidx);
    // console.log(randomcol);
    gameSeq.push(randomcol);
    console.log(gameSeq);
    btnFlash(randombtn);

    if(level>highestlevel){
        highestlevel=level;
    }
}

function checkAns(idx){
    // console.log("curr level :",level);
    if(userSeq[idx]==gameSeq[idx]){
        // console.log("Same Value");
        if(userSeq.length==gameSeq.length){
            levelup();
        }
    }else{
        h2.innerHTML=`Game Over !Your Score was <b>${level}<b> <br>Highest Score: <b>${highestlevel}</b><br> Press any Key to start `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },190);
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn=this;
    userCol=btn.getAttribute("id");
    // console.log(userCol);
    userSeq.push(userCol);
    checkAns(userSeq.length-1);
}

 let allbtns=document.querySelectorAll(".btn");
 for(let btn of allbtns){
    btn.addEventListener("click",btnPress);
 }


 function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
 }