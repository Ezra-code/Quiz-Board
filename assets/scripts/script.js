let startBtn = document.getElementById('start-btn')
let contEl = document.getElementById('cont-el')
let submitEl = document.getElementById('submit')
let scoreEl = document.getElementById('score')
let choiceEl = document.getElementsByName('choice')
let choiceTwo = document.getElementsByName('choice2')
let choiceThree = document.getElementsByName('choice3')
let message = document.getElementById('message-el')
let result = document.getElementById('result')
let percentEl = document.querySelector("#percent-el")
// let score = [];
// let sum = 0

startBtn.addEventListener('click', function(){
    startBtn.classList.add('hide')
    contEl.classList.remove('hide')
})

submitEl.addEventListener('click', function(){
    contEl.classList.add('hide')
    scoreEl.classList.remove('hide')
    scoreQuiz()
    Message()
})
// function scoreQuiz(){
//     let percent;
//     for(i=0; i<choiceEl.length; i++){
//         if(choiceEl[i].checked){
//             let choice = choiceEl[i].value 
//             if(choice == 'correct'){
//                 score.push(1)
//                 score
//             }else{
//                 score.push(0)
//                 score            
//             }
//         }
//     }

//     for(i=0; i<choiceTwo.length; i++){
//         if(choiceTwo[i].checked){
//             let choice = choiceTwo[i].value 
//             if(choice == 'correct'){
//                 score.push(1)
//                 score
//             }else{
//                 score.push(0)
//                 score
//             }
//         }
//     }

//     for(i=0; i<choiceThree.length; i++){
//         if(choiceThree[i].checked){
//             let choice = choiceThree[i].value 
//             if(choice == 'correct'){
//                 score.push(1)
//                 score
//             }else{
//                 score.push(0)
//                 score
                
//             }
//         }
//     }

//     for(i=0; i<score.length; i++){
//         sum += score[i]
//         sum
//         result.innerHTML = sum
//     }
//     percent = Math.round((sum * 100) / 3)
//     percent
//     percentEl.innerHTML = percent + "%"
// }

// function Message(){
//     switch(sum){
//         case 1:
//             message.innerHTML = "Below average"
//         break;

//         case 2:
//             message.innerHTML = "Good perfomance"
//         break;
//         case 3:
//             message.innerHTML = "Excellent perfomance"
//         break;
//         default:
//             message.innerHTML = "sorry"
//     }
    
// }
