let computerNum
function pickRandomNum(){
computerNum = Math.floor(Math.random()*100)+1
console.log('정답'+computerNum)
}
pickRandomNum()

let playButton = document.getElementById("play-Button")
let userInput = document.getElementById("user-Input")
let resultArea = document.getElementById("result-Area")
let resetButton = document.getElementById("reset-Button")
let chances = 5
let chanceArea= document.getElementById("chance-Area")
let gameOver = false
let arrays = []

playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)
userInput.addEventListener("focus",function(){userInput.value=""})

function play(){
let userValue = userInput.value
if(userValue<1||userValue>100){resultArea.textContent = "TYPE BETWEEN 1 AND 100"
return ""}

if(arrays.includes(userValue)){
resultArea.textContent = "YOU HAVE ALREADY TYPED THE SAME NUMBER"
return ""
}
arrays.push(userValue)


chances --
chanceArea.textContent = `You have ${chances}chances`

if(userValue<computerNum){resultArea.textContent ="UP!"}
else if(userValue>computerNum){resultArea.textContent ="DOWN!"}
else if(userValue==computerNum){resultArea.textContent ="CORRECT!"
gameOver = true
chanceArea.textContent = ""}

if(chances<1){
gameOver = true}

if(gameOver){playButton.disabled =true}

}

function reset(){
userInput.value =""
pickRandomNum()
playButton.disabled = false
chances = 5
chanceArea.textContent = `You have ${chances}chances`
resultArea.textContent ="RESULT"
}

