'use strict';



let validNum = Math.trunc(Math.random() * 20) + 1



let score = 20

let highscore = 0


document.querySelector(".check").addEventListener("click", function () {

    let guessNum = Number(document.querySelector(".guess").value)




    if (!guessNum) {

        document.querySelector(".message").textContent = '⛔ No number'

    } else if (guessNum > validNum) {

        if (score > 1) {

            document.querySelector(".message").textContent = '📈 Too hight'
            score--
            document.querySelector(".score").textContent = score

        } else {

            document.querySelector(".message").textContent = '💥 You lost'
            document.querySelector(".score").textContent = 0

        }



    } else if (guessNum < validNum) {
        if (score > 0) {

            document.querySelector(".message").textContent = '📉 Too low '
            score--
            document.querySelector(".score").textContent = score

        } else {

            document.querySelector(".message").textContent = '💥 You lost'
            document.querySelector(".score").textContent = 0
        }

    } else if (guessNum = validNum) {

        if (score > highscore) {
            highscore = score
            document.querySelector(".highscore").textContent = highscore
        }

        document.querySelector(".number").textContent = validNum
        document.querySelector(".message").textContent = '🎉 You win'

        document.querySelector("body").style.backgroundColor = '#60b347'
        document.querySelector(".number").style.width = '30rem'

    }


})




document.querySelector(".again").addEventListener('click', function () {

    score = 20

    validNum = Math.trunc(Math.random() * 20) + 1

    document.querySelector("body").style.backgroundColor = '#222'
    document.querySelector(".number").style.width = '15rem'
    document.querySelector(".message").textContent = 'Start guessing...'
    document.querySelector(".number").textContent = '?'
    document.querySelector(".score").textContent = score
    document.querySelector(".guess").value = ''
})




















// 