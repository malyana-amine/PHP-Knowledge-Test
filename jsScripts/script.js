let btnstar = document.querySelector('.startBtn');
let pageInfo = document.querySelector('.pageInfo');
let pageQue = document.querySelector('.pageQue');
let pageQue1 = document.querySelector('.pageQue1');
let pageRes = document.querySelector('.pageRes');
let exitBtn = document.querySelector('.exitBtn');
let nxtBtn = document.querySelector('.nxtBtn');
let resBtn = document.querySelector('.resBtn');
let quescoun = document.querySelector('.quescoun');
let answercount = document.querySelector('.answercount');
let options = document.querySelectorAll(".option");

let choise_btn11 = document.querySelector('.choise_btn11');
let choise_btn21= document.querySelector('.choise_btn21');
let choise_btn31 = document.querySelector('.choise_btn31');
let choise_btn41 = document.querySelector('.choise_btn41');

///////////////////////////

let interval;
function startTimer() {
    let timer = 15;
    interval = setInterval(function(){
        document.getElementById('timer').textContent = 'time left '+timer;
        timer--;
        if (timer < 0) {
            clearInterval(interval);
            if(que_num<10){
                nxtBtn.classList.remove("hidden");
            }else{
                resBtn.classList.remove("hidden");
            }
            choise_btn11.disabled = true;
            choise_btn21.disabled = true;
            choise_btn31.disabled = true;
            choise_btn41.disabled = true;
            options.forEach(hover=>{
                hover.classList.remove("hover");
            })


            options.forEach(option=>{
                if(option.value==questions[randomNumber].answer){
                    option.classList.add("bonneAns")
                }
                else option.classList.add("mauvAns")
            })
        
            
        }
    }, 1000);
}

///////////////////////////

let progressBar = document.querySelector('.progress-bar');
let progressBarFill = progressBar.querySelector('.progress-bar-fill');

let setProgress = (percentage) => {
  progressBarFill.style.width = percentage + '%';
};


////////////////////////////



btnstar.onclick = ()=>{
    pageInfo.classList.add("hidden");
    pageInfo.classList.remove("pageInfo");
    pageQue1.classList.remove("hidden");
    pageQue1.classList.add("pageQue");
    answerCount = 0;
    showQue(generateRandomNumber());
    setProgress(que_num*10);
    quesNum(1);
    startTimer();
}

exitBtn.onclick = ()=>{
    pageQue1.classList.remove("pageQue");
    pageInfo.classList.add("pageInfo");
    nxtBtn.classList.add("hidden");
    pageInfo.classList.remove("hidden");
    pageQue1.classList.add("hidden");

    clearInterval(interval);
    // generateRandomNumber();
    usedNumbers=[];
    setProgress(0);

    choise_btn11.disabled = false;
    choise_btn21.disabled = false;
    choise_btn31.disabled = false;
    choise_btn41.disabled = false;
    que_count=0;
    
    que_num = 1;

    options.forEach(bonneAns=>{
        bonneAns.classList.remove("bonneAns");
    })

    options.forEach(mauvAns=>{
        mauvAns.classList.remove("mauvAns");
    })


    options.forEach(hover=>{
        hover.classList.add("hover");
    })
    options.forEach(hover=>{
        hover.classList.remove("border");
    })
}

let choice1 = document.querySelector('.choice1');
let choice2 = document.querySelector('.choice2');
let choice3 = document.querySelector('.choice3');
let choice4 = document.querySelector('.choice4');


let usedNumbers = []
let randomNumber;
function generateRandomNumber() {
 randomNumber = Math.floor(Math.random() * 10);
  if (usedNumbers.includes(randomNumber)) {
    generateRandomNumber();
  } else {
    usedNumbers.push(randomNumber);    
  }
  return randomNumber;
}


let que_count = 0 ;
let que_num = 1;
nxtBtn.onclick = ()=>{
    clearInterval(interval);
    startTimer();
    nxtBtn.classList.add("hidden");
    if(que_count<questions.length-1){
        que_count++;
        que_num++;
        quesNum(que_num);
        setProgress(que_num*10);

        choise_btn11.disabled = false;
        choise_btn21.disabled = false;
        choise_btn31.disabled = false;
        choise_btn41.disabled = false;


        options.forEach(option=>{
            option.classList.remove("bonneAns");
            option.classList.remove("mauvAns");
        })


        options.forEach(hover=>{
            hover.classList.add("hover");
        })
        options.forEach(hover=>{
            hover.classList.remove("border");
        })
        
        showQue(generateRandomNumber());
    }else{
        pageRes.classList.remove("hidden");
        pageQue1.classList.remove("pageQue");
        pageQue1.classList.add("hidden");
    }
}
resBtn.addEventListener("click",()=>{
    pageRes.classList.remove("hidden");
    pageQue1.classList.remove("pageQue");
    pageQue1.classList.add("hidden");
}
)


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
    clearInterval(interval);
    let userUns = answer1.value
    if(que_num<10){
    nxtBtn.classList.remove("hidden");
}else{
    resBtn.classList.remove("hidden");
}
    choise_btn11.disabled = true;
    choise_btn21.disabled = true;
    choise_btn31.disabled = true;
    choise_btn41.disabled = true;
    options.forEach(hover=>{
        hover.classList.remove("hover");
    }

    )
    answer1.classList.add("border")
    console.log(userUns);
    if (userUns == questions[randomNumber].answer){
            answerCount++;
            unswerNum(answerCount);
            answer1.classList.add("bonneAns");
    }else answer1.classList.add("mauvAns");


    options.forEach(option=>{
        if(option.value==questions[randomNumber].answer){
            option.classList.add("bonneAns")
        }
        // else option.classList.add("mauvAns")
    })
    }
let quesNum = (index)=>{
 quescoun.textContent = 'Vous êtes maintenant à la question numéro '+index;
}
let unswerNum = (index)=>{
    answercount.textContent = 'tu es terminé le quiz avec une note de'+index+'/10('+ (index/10)*100 +'%)'

    if(index<=4){
        answercount.textContent = 'tu es terminé le quiz avec une note de '+index+'/10('+ (index/10)*100 +'%) tu peux faire mieux la prochaine fois'
    }else if(index>4 && index<=6){
        answercount.textContent = 'tu es terminé le quiz avec une note de '+index+'/10('+ (index/10)*100 +'%) Votre note est OK'
    }else if(index>6 && index<9){
        answercount.textContent = 'tu es terminé le quiz avec une note de '+index+'/10('+ (index/10)*100 +'%) Votre note est bonne'
    }else if(index>=9){
        answercount.textContent = 'tu es terminé le quiz avec une note de '+index+'/10('+ (index/10)*100 +'%) Votre note est parfait'
    }
}
