var userInput = document.querySelector('.input')
var checkButton = document.querySelector('.check')
var score = document.querySelector('.score')
var highScore = document.querySelector('.highscore')
var show = document.querySelector('.question')
var refresh = document.querySelector('.again')

checkButton.addEventListener('click', () =>{
if(score.textContent > 0) {
    var myNumber = Math.round(Math.random() * 10)
    console.log(myNumber)
    console.log(userInput.value)
    console.log(score.textContent)
    show.textContent = myNumber
    
    if (userInput.value == myNumber) {
        alert("You win")
        score.textContent = +score.textContent + 1
        if (highScore.textContent < score.textContent) {
            highScore.textContent = score.textContent
        }

    } else {
        console.log("You loose")
        score.textContent = +score.textContent - 1
    }



} else {
    alert("sorry aap game nai khel saktey, please try again")
}



})

refresh.addEventListener('click' , () => {

   score.textContent = 10
   show.textContent= '?'
})