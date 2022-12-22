let btnstar = document.querySelector('.startBtn');
let pageInfo = document.querySelector('.pageInfo');
let pageQue = document.querySelector('.pageQue');
let pageRes = document.querySelector('.pageRes');
let exitBtn = document.querySelector('.exitBtn');
let nxtBtn = document.querySelector('.nxtBtn');
let quescoun = document.querySelector('.quescoun');



btnstar.onclick = ()=>{
    pageInfo.classList.add("hidden");
    pageQue.classList.remove("hidden");
    showQue(generateRandomNumber());
    quesNum(1);
}
exitBtn.onclick = ()=>{
    pageInfo.classList.remove("hidden");
    pageQue.classList.add("hidden");
    // generateRandomNumber();
    usedNumbers=[];

    que_count=0;
    que_num = 1;
}

let choice1 = document.querySelector('.choice1');
let choice2 = document.querySelector('.choice2');
let choice3 = document.querySelector('.choice3');
let choice4 = document.querySelector('.choice4');



choice1.onclick = ()=>{
   nxtBtn.classList.remove("hidden");
}
choice2.onclick = ()=>{
    nxtBtn.classList.remove("hidden");
 }
 choice3.onclick = ()=>{
    nxtBtn.classList.remove("hidden");
 }
 choice4.onclick = ()=>{
    nxtBtn.classList.remove("hidden");
 }



let usedNumbers = []
let randomNumber;
function generateRandomNumber() {
 randomNumber = Math.floor(Math.random() * 10);
  if (usedNumbers.includes(randomNumber)) {
    generateRandomNumber();
  } else {
    usedNumbers.push(randomNumber);    
  }
  console.log(randomNumber);
  return randomNumber;
}

let que_count = 0 ;
let que_num = 1;
nxtBtn.onclick = ()=>{
    nxtBtn.classList.add("hidden");
    if(que_count<questions.length-1){
        que_count++;
        que_num++;
        quesNum(que_num);
        
        showQue(generateRandomNumber());
    }else{
        pageRes.classList.remove("hidden");
        pageQue.classList.add("hidden");
    }
}


let showQue = (index)=>{
    let ques = document.querySelector(".ques");
    let cho1 = document.querySelector(".choice1");
    let cho2 = document.querySelector(".choice2");
    let cho3 = document.querySelector(".choice3");
    let cho4 = document.querySelector(".choice4");


    let quesArray = questions[index].question;
    ques.textContent = quesArray;

    cho1.textContent = questions[index].choice1;
    cho2.textContent = questions[index].choice2;
    cho3.textContent = questions[index].choice3;
    cho4.textContent = questions[index].choice4;
}


let quesNum = (index)=>{

 quescoun.textContent = index+'/10';

}