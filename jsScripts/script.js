let btnstar = document.querySelector('.startBtn');
let pageInfo = document.querySelector('.pageInfo');
let pageQue = document.querySelector('.pageQue');
let pageRes = document.querySelector('.pageRes');
let exitBtn = document.querySelector('.exitBtn');
let nxtBtn = document.querySelector('.nxtBtn');
let quescoun = document.querySelector('.quescoun');
let answercount = document.querySelector('.answercount');

// let choise_btn1 = document.querySelector('.choise_btn1');
// let choise_btn2= document.querySelector('.choise_btn2');
// let choise_btn3 = document.querySelector('.choise_btn3');
// let choise_btn4 = document.querySelector('.choise_btn4');

let choise_btn11 = document.querySelector('.choise_btn11');
let choise_btn21= document.querySelector('.choise_btn21');
let choise_btn31 = document.querySelector('.choise_btn31');
let choise_btn41 = document.querySelector('.choise_btn41');

// choise_btn1.onclick= ()=>{
//     choise_btn1.disabled = true;
//     choise_btn2.disabled = true;
//     choise_btn3.disabled = true;
//     choise_btn4.disabled = true;
// }
// choise_btn2.onclick= ()=>{
//     choise_btn1.disabled = true;
//     choise_btn2.disabled = true;
//     choise_btn3.disabled = true;
//     choise_btn4.disabled = true;
// }
// choise_btn3.onclick= ()=>{
//     choise_btn1.disabled = true;
//     choise_btn2.disabled = true;
//     choise_btn3.disabled = true;
//     choise_btn4.disabled = true;
// }
// choise_btn4.onclick= ()=>{
//     choise_btn1.disabled = true;
//     choise_btn2.disabled = true;
//     choise_btn3.disabled = true;
//     choise_btn4.disabled = true;
// }






btnstar.onclick = ()=>{
    pageInfo.classList.add("hidden");
    pageInfo.classList.remove("pageInfo");
    pageQue.classList.remove("hidden");

    showQue(generateRandomNumber());
    quesNum(1);
}
exitBtn.onclick = ()=>{
    pageInfo.classList.add("pageInfo");
    nxtBtn.classList.add("hidden");
    pageInfo.classList.remove("hidden");
    pageQue.classList.add("hidden");
    // generateRandomNumber();
    usedNumbers=[];

    choise_btn11.disabled = false;
    choise_btn21.disabled = false;
    choise_btn31.disabled = false;
    choise_btn41.disabled = false;
    que_count=0;
    que_num = 1;
}

let choice1 = document.querySelector('.choice1');
let choice2 = document.querySelector('.choice2');
let choice3 = document.querySelector('.choice3');
let choice4 = document.querySelector('.choice4');



// choice1.onclick = ()=>{
//    nxtBtn.classList.remove("hidden");
//    choise_btn11.disabled = true;
//    choise_btn21.disabled = true;
//    choise_btn31.disabled = true;
//    choise_btn41.disabled = true;
// }
// choice2.onclick = ()=>{
//     nxtBtn.classList.remove("hidden");
//     choise_btn11.disabled = true;
//     choise_btn21.disabled = true;
//     choise_btn31.disabled = true;
//     choise_btn41.disabled = true;
//  }
//  choice3.onclick = ()=>{
//     nxtBtn.classList.remove("hidden");
//     choise_btn11.disabled = true;
//     choise_btn21.disabled = true;
//     choise_btn31.disabled = true;
//     choise_btn41.disabled = true;
//  }
//  choice4.onclick = ()=>{
//     nxtBtn.classList.remove("hidden");
//     choise_btn11.disabled = true;
//     choise_btn21.disabled = true;
//     choise_btn31.disabled = true;
//     choise_btn41.disabled = true;
//  }



let usedNumbers = []
let randomNumber;
function generateRandomNumber() {
 randomNumber = Math.floor(Math.random() * 10);
  if (usedNumbers.includes(randomNumber)) {
    generateRandomNumber();
  } else {
    usedNumbers.push(randomNumber);    
  }
//   console.log(randomNumber);
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


        // choise_btn1.disabled = false;
        // choise_btn2.disabled = false;
        // choise_btn3.disabled = false;
        // choise_btn4.disabled = false;

        choise_btn11.disabled = false;
        choise_btn21.disabled = false;
        choise_btn31.disabled = false;
        choise_btn41.disabled = false;

        
        showQue(generateRandomNumber());
    }else{
        pageRes.classList.remove("hidden");
        pageQue.classList.remove("pageQue");
        pageQue.classList.add("hidden");
    }
}


let showQue = (index)=>{
    let ques = document.querySelector(".ques");
    let cho1 = document.querySelector(".choice1");
    let cho2 = document.querySelector(".choice2");
    let cho3 = document.querySelector(".choice3");
    let cho4 = document.querySelector(".choice4");
    let options = document.querySelector(".options");
    let option = options.querySelectorAll(".option");
    for(let i = 0 ; i < option.length ; i++){
        option[i].setAttribute("onclick","optionselected(this)");
    }





    let quesArray = questions[index].question;
    ques.textContent = quesArray;

    cho1.textContent = questions[index].choice1;
    cho2.textContent = questions[index].choice2;
    cho3.textContent = questions[index].choice3;
    cho4.textContent = questions[index].choice4;
}
let answerCount = 0;
let optionselected = (answer1)=>{
    let userUns = answer1.value
    nxtBtn.classList.remove("hidden");
    choise_btn11.disabled = true;
    choise_btn21.disabled = true;
    choise_btn31.disabled = true;
    choise_btn41.disabled = true;
    console.log(userUns);
    if (userUns == questions[randomNumber].answer){
            answerCount++;
            unswerNum(answerCount);
            console.log(answerCount)
            console.log(questions[randomNumber].answer)
    }
    }


let quesNum = (index)=>{
 quescoun.textContent = index+'/10';

}
let unswerNum = (index)=>{

    answercount.textContent = 'tu es terminé le quiz avec une note de'+index+'/10('+ (index/10)*100 +'%)'
}