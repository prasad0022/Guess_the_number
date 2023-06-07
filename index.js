
let num = Math.floor(Math.random() * 100 + 1);
let counter = 0;
console.log(num)

let enterNum = () => {
    let guessedNum = Number.parseInt($("input").val());
    if (guessedNum == num) {
        let sound = new Audio("success.mp3")
        sound.play()
        $("h1").removeClass("header").addClass("correct")
        $("h1").text(`You guessed correctly. Result : ${100 - counter}`)

    }
    else {
        let sound = new Audio("wrong.mp3")
        sound.play()
        if (guessedNum > num) {

            $("h1").removeClass("header").addClass("wrong")
            $("h1").text(`Guess again. Hint: Number is less than what you guessed`)

            counter++
        }
        else {
            $("h1").removeClass("header").addClass("wrong")
            $("h1").text(`Guess again. Hint: Number is greater than what you guessed`)

            counter++
        }

    }
}

$("button").click(() => {
    $("button").addClass("clicked")
    setTimeout(() => {
        $("button").removeClass("clicked")
        enterNum();
    }, 300)
})