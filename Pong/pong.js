const canvas = document.querySelector("canvas")
const countDown = document.getElementById("countDown")
const easy = document.getElementById("easyMode")
const normal = document.getElementById("normalMode")
const hard = document.getElementById("hardMode")
const home = document.getElementById("home")
const bakgrunnShop = document.getElementById("bakgrunnShop")
const resultat = document.getElementById("resultat")
const resultatH1 = document.getElementById("resultath1")
const home2 = document.getElementById("home2")
const replay = document.getElementById("replay")

easy.style.display = "none"
normal.style.display = "none"
hard.style.display = "none"
canvas.style.display = "none"
countDown.style.display = "none"
bakgrunnShop.style.display = "none"
resultat.style.display = "none"
document.getElementById("HighScoreboard").style.display = "none"

var audioBakgrunn = new Audio('Lyder/bakgrunnIndex.mp3');
var audioCountdown = new Audio('Lyder/countDown.mp3');
var audioImpact = new Audio("Lyder/impact.mp3")
audioImpact.volume = 0.1;
var audioWallImpact = new Audio('Lyder/impactBallWall.mp3')
audioWallImpact.volume = 0.1
let winner = 0

let easyHS = 0
let normalHS = 0
let hardHS = 0


/*Stopper skjerm for å bevege seg når man trykker piler*/
window.addEventListener("keydown", function (e) {
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

function bakgrunnKlikk() {
    bakgrunnShop.style.display = "grid"
    document.getElementById("botPlayer").style.display = "none"
    document.getElementById("twoPlayer").style.display = "none"
    document.getElementById("training").style.display = "none"
    resultat.style.display = "none"
    home2.style.display = "none"
    replay.style.display = "none"
    canvas.style.display = "none"
    easy.style.display = "none"
    normal.style.display = "none"
    hard.style.display = "none"

}


function backGr(background) {
    let url = ""
    let checkID = 0
    if (background == 'default') {
        url = "linear-gradient(to right, var(--detaljer), var(--darkBlue), var(--darkBlue), var(--detaljer))"
        checkID = 'checkDefault'
    } else if (background == 'basket') {
        url = "url('Bilder/bakgrunnBasket.jpg')"
        checkID = 'checkBasket'
    } else if (background == 'classic') {
        url = "url('Bilder/bakgrunnClassic.jpg')"
        checkID = 'checkClassic'
    } else if (background == 'purple') {
        url = "linear-gradient(to right, rgb(177, 81, 177), rgb(88, 1, 88), rgb(88, 1, 88), rgb(177, 81, 177))"
        checkID = 'checkPurple'
    } else if (background == 'green') {
        url = "linear-gradient(to right, rgb(28, 171, 28), rgb(1, 73, 1), rgb(1, 73, 1), rgb(28, 171, 28))"
        checkID = 'checkGreen'
    } else if (background == 'fotball') {
        url = "url('Bilder/bakgrunnFotball.jpg')"
        checkID = 'checkFootball'
    }

    localStorage.setItem("canvasBackground", url);
    localStorage.setItem("checkIDLS", checkID);

    if (localStorage.getItem("checkIDLS") != 'checkDefault') {
        document.getElementById('checkDefault').style.backgroundImage = "url('Bilder/checkTomBakgrunn.png')"
    }
    if (localStorage.getItem("checkIDLS") != 'checkBasket') {
        document.getElementById('checkBasket').style.backgroundImage = "url('Bilder/checkTomBakgrunn.png')"
    }
    if (localStorage.getItem("checkIDLS") != 'checkClassic') {
        document.getElementById('checkClassic').style.backgroundImage = "url('Bilder/checkTomBakgrunn.png')"
    }
    if (localStorage.getItem("checkIDLS") != 'checkPurple') {
        document.getElementById('checkPurple').style.backgroundImage = "url('Bilder/checkTomBakgrunn.png')"
    }
    if (localStorage.getItem("checkIDLS") != 'checkGreen') {
        document.getElementById('checkGreen').style.backgroundImage = "url('Bilder/checkTomBakgrunn.png')"
    }
    if (localStorage.getItem("checkIDLS") != 'checkFootball') {
        document.getElementById('checkFootball').style.backgroundImage = "url('Bilder/checkTomBakgrunn.png')"
    }

    document.getElementById(localStorage.getItem("checkIDLS")).style.backgroundImage = "url('Bilder/checkBakgrunn.png')"
}

canvas.style.backgroundImage = localStorage.getItem("canvasBackground")
document.getElementById(localStorage.getItem("checkIDLS")).style.backgroundImage = "url('Bilder/checkBakgrunn.png')"

function EasyKlikk() {
    document.getElementById("Scoreboard").style.display = "none"
    document.getElementById("WhatsPong").style.display = "none"
    document.getElementById("dropdown").style.display = "none"
    canvas.style.display = "block";
    countDown.style.display = "block"
    easy.style.display = "none"
    normal.style.display = "none"
    hard.style.display = "none"

    let count = 3;
    audioCountdown.play()
    const timer = setInterval(function () {
        audioCountdown.currentTime = 0;
        audioCountdown.play()
        count--;
        console.log(count)
        countDown.innerHTML = count
        if (count === 0) {
            clearInterval(timer);
            console.log("Time's up!");
            countDown.style.display = "none"
            setInterval(PvCEasy, 10)

        }
    }, 1000);
}

function NormalKlikk() {
    document.getElementById("Scoreboard").style.display = "none"
    document.getElementById("WhatsPong").style.display = "none"
    document.getElementById("dropdown").style.display = "none"
    canvas.style.display = "block";
    countDown.style.display = "block"
    easy.style.display = "none"
    normal.style.display = "none"
    hard.style.display = "none"

    let count = 3;
    audioCountdown.play()
    const timer = setInterval(function () {
        audioCountdown.currentTime = 0;
        audioCountdown.play()
        count--;
        console.log(count)
        countDown.innerHTML = count
        if (count === 0) {
            clearInterval(timer);
            console.log("Time's up!");
            countDown.style.display = "none"
            setInterval(PvCNormal, 10)

        }
    }, 1000);
}

function HardKlikk() {
    document.getElementById("Scoreboard").style.display = "none"
    document.getElementById("WhatsPong").style.display = "none"
    document.getElementById("dropdown").style.display = "none"
    canvas.style.display = "block";
    countDown.style.display = "block"
    easy.style.display = "none"
    normal.style.display = "none"
    hard.style.display = "none"
    let count = 3;
    audioCountdown.play()
    const timer = setInterval(function () {
        audioCountdown.currentTime = 0;
        audioCountdown.play()
        count--;
        console.log(count)
        countDown.innerHTML = count
        if (count === 0) {
            clearInterval(timer);
            console.log("Time's up!");
            countDown.style.display = "none"
            setInterval(PvCHard, 10)

        }
    }, 1000);

}

function TrainingKlikk() {
    document.getElementById("Scoreboard").style.display = "none"
    document.getElementById("WhatsPong").style.display = "none"
    document.getElementById("dropdown").style.display = "none"
    document.getElementById("botPlayer").style.display = "none"
    document.getElementById("twoPlayer").style.display = "none"
    document.getElementById("training").style.display = "none"
    canvas.style.display = "block";
    countDown.style.display = "block"
    let count = 3;
    audioCountdown.play()
    const timer = setInterval(function () {
        audioCountdown.currentTime = 0;
        audioCountdown.play()
        count--;
        console.log(count)
        countDown.innerHTML = count
        if (count === 0) {
            clearInterval(timer);
            console.log("Time's up!");
            countDown.style.display = "none"
            setInterval(training, 10)
        }
    }, 1000);

}

function TwoKlikk() {
    document.getElementById("Scoreboard").style.display = "none"
    document.getElementById("WhatsPong").style.display = "none"
    document.getElementById("dropdown").style.display = "none"
    document.getElementById("botPlayer").style.display = "none"
    document.getElementById("twoPlayer").style.display = "none"
    document.getElementById("training").style.display = "none"
    canvas.style.display = "block";
    countDown.style.display = "block"
    let count = 3;
    audioCountdown.play()
    const timer = setInterval(function () {
        audioCountdown.currentTime = 0;
        audioCountdown.play()
        count--;
        console.log(count)
        countDown.innerHTML = count
        if (count === 0) {
            clearInterval(timer);
            console.log("Time's up!");
            countDown.style.display = "none"
            setInterval(two_player, 10)
        }
    }, 1000);

}

function BotKlikk() {
    document.getElementById("botPlayer").style.display = "none"
    document.getElementById("twoPlayer").style.display = "none"
    document.getElementById("training").style.display = "none"
    easy.style.display = "block"
    normal.style.display = "block"
    hard.style.display = "block"

}

function replayf() {
    canvas.style.display = "none"
    document.getElementById("replay").style.display = "none"
    document.getElementById("Scoreboard").style.display = "none"
    document.getElementById("WhatsPong").style.display = "none"
    document.getElementById("dropdown").style.display = "none"
    resultat.style.display = "none"
    home2.style.display = "none"
    canvas.style.display = "block"
    if (ball1.y != 500 || ball1.x < 500) {
        ball1.x = Math.floor(Math.random() * (canvas.width / 4) + 150)
        ball1.y = Math.floor(Math.random() * (canvas.height / 5) + 30)
        ball1.x_velocity = Math.abs(ball1.x_velocity)
    }
    if (ball_Hard.y != 500 || ball_Hard.x < 500) {
        ball_Hard.x = Math.floor(Math.random() * (canvas.width / 4) + 150)
        ball_Hard.y = Math.floor(Math.random() * (canvas.height / 5) + 30)
        ball_Hard.x_velocity = Math.abs(ball_Hard.x_velocity)
    }
    if (ball_Easy.y != 500 || ball_Easy.x < 500) {
        ball_Easy.x = Math.floor(Math.random() * (canvas.width / 4) + 150)
        ball_Easy.y = Math.floor(Math.random() * (canvas.height / 5) + 30)
        ball_Easy.x_velocity = Math.abs(ball_Easy.x_velocity)
    }
    if (ball_Norm.y != 500 || ball_Norm.x < 500) {
        ball_Norm.x = Math.floor(Math.random() * (canvas.width / 4) + 150)
        ball_Norm.y = Math.floor(Math.random() * (canvas.height / 5) + 30)
        ball_Norm.x_velocity = Math.abs(ball_Norm.x_velocity)
    }
    countDown.innerHTML = 3
    countDown.style.display = "block"
    let count = 3;
    audioCountdown.play()
    const timer = setInterval(function () {
        audioCountdown.currentTime = 0;
        audioCountdown.play()
        count--;
        console.log(count)
        countDown.innerHTML = count
        if (count === 0) {
            clearInterval(timer);
            console.log("Time's up!");
            countDown.style.display = "none"
            gameRunning = true
        }
    }, 1000);
}

const ctx = canvas.getContext("2d")

canvas.width = 1000
canvas.height = 600

/*Paddle*/

let paddlePlayerRight = {
    x: 900,
    y: 300,
    y_velocity: 3,
    width: 15,
    height: 80,
    farge: "blue"
}

let paddlePlayerleft = {
    x: 100,
    y: 300,
    y_velocity: 3,
    width: 15,
    height: 80,
    farge: "red"
}

let ball1 = {
    x: Math.floor(Math.random() * (canvas.width / 4) + 150),
    y:  Math.floor(Math.random() * (canvas.height / 5)) + 30,
    radius: 10,
    x_velocity: 4,
    y_velocity: 4,
    farge: "white"
}

let paddlePlayerEasy = {
    x: 100,
    y: 300,
    y_velocity: 2.9,
    width: 15,
    height: 80,
    farge: "red"
}

let paddlePlayerNorm = {
    x: 100,
    y: 300,
    y_velocity: 3.9,
    width: 15,
    height: 80,
    farge: "red"
}

let paddlePlayerHard = {
    x: 100,
    y: 300,
    y_velocity: 4.9,
    width: 15,
    height: 80,
    farge: "red"
}

let ball_Easy = {
    x: Math.floor(Math.random() * (canvas.width / 4) + 150),
    y: Math.floor(Math.random() * (canvas.height / 5)) + 30,
    radius: 10,
    x_velocity: 2.7,
    y_velocity: 3,
    farge: "white"
}

let ball_Norm = {
    x: Math.floor(Math.random() * (canvas.width / 4) + 150),
    y: Math.floor(Math.random() * (canvas.height / 5)) + 30,
    radius: 10,
    x_velocity: 3.5,
    y_velocity: 3.98,
    farge: "white"
}

let ball_Hard = {
    x: Math.floor(Math.random() * (canvas.width / 4) + 150),
    y: Math.floor(Math.random() * (canvas.height / 5)) + 30,
    radius: 10,
    x_velocity: 4,
    y_velocity: 5,
    farge: "white"
}

document.addEventListener('keydown', (event) => {
    console.log(paddlePlayerRight)
    switch (event.key) {
        case 'Enter':
            paddlePlayerRight.y_velocity = -paddlePlayerRight.y_velocity
            break;
    }
})

document.addEventListener('keydown', (event) => {
    console.log(paddlePlayerleft)
    switch (event.key) {
        case ' ':
            paddlePlayerleft.y_velocity = -paddlePlayerleft.y_velocity
            break;
    }
})

function tegnPaddle(paddle) {
    ctx.fillStyle = paddle.farge
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height)
    paddle.y += paddle.y_velocity
    if (paddle.y > canvas.height - paddle.height) {
        paddle.y = canvas.height - paddle.height;
        paddle.y_velocity = -paddle.y_velocity
    } else if (paddle.y < 0) {
        paddle.y = 0;
        paddle.y_velocity = -paddle.y_velocity;
    }

}


function flyttBot(ball, paddle) {
    if (ball.y < paddle.y) {
        paddle.y_velocity = -Math.abs(paddle.y_velocity)
    }
    if (ball.y > paddle.y) {
        paddle.y_velocity = Math.abs(paddle.y_velocity)
    }

}


/*BALL*/

function tegnBall(ball) {
    // BAll
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
    ctx.fillStyle = ball.farge
    ctx.fill()
    ctx.closePath()
}

function flyttBall(ball, paddle) {
    ball.x += ball.x_velocity
    ball.y += ball.y_velocity
    if (ball.y > canvas.height - ball.radius || ball.y < ball.radius) {
        ball.y_velocity = -ball.y_velocity
        audioWallImpact.currentTime = 0;
        audioWallImpact.play()

    }
    if (ball.y > canvas.height - ball.radius + 5) {
        ball.y += 10
        ball.y_velocity = Math.abs(ball.y_velocity)
    } else if (ball.y < ball.radius - 5) {
        ball.y -= 10
        ball.y_velocity = -Math.abs(ball.y_velocity)
    }
    if (ball.x > canvas.width - ball.radius) {
        if (paddle == paddlePlayerleft) {
            resultatH1.innerHTML = "LEFT WON"
        } else {
            resultatH1.innerHTML = "YOU LOOSE"
        }
        document.getElementById("replay").style.display = "block"
        document.getElementById("Scoreboard").style.display = "block"
        document.getElementById("WhatsPong").style.display = "block"
        document.getElementById("dropdown").style.display = "block"
        resultat.style.display = "block"
        home2.style.display = "block"
        gameRunning = false;
    }
    if (ball.x < ball.radius) {
        console.log("Game over")
        if (paddle == paddlePlayerleft) {
            resultatH1.innerHTML = "RIGHT WON"

        } else {
            resultatH1.innerHTML = "YOU WIN"
        }
        if (paddle == paddlePlayerEasy) {
            easyHS += 1
        } else if (paddle == paddlePlayerNorm) {
            normalHS += 1
        } else if (paddle == paddlePlayerHard) {
            hardHS += 1
        }
        document.getElementById("replay").style.display = "block"
        document.getElementById("Scoreboard").style.display = "block"
        document.getElementById("WhatsPong").style.display = "block"
        document.getElementById("dropdown").style.display = "block"
        resultat.style.display = "block"
        home2.style.display = "block"
        checkHS()
        gameRunning = false;
    }

}

function flyttBallTraining(ball) {
    ball.x += ball.x_velocity
    ball.y += ball.y_velocity
    if (ball.y > canvas.height - ball.radius || ball.y < ball.radius) {
        ball.y_velocity = -ball.y_velocity
        audioWallImpact.currentTime = 0;
        audioWallImpact.play()
    }
    if (ball.y > canvas.height - ball.radius + 5) {
        ball.y += 10
        ball.y_velocity = Math.abs(ball.y_velocity)
    } else if (ball.y < ball.radius - 5) {
        ball.y -= 10
        ball.y_velocity = -Math.abs(ball.y_velocity)
    }
    if (ball.x < ball.radius) {
        ball.x_velocity = -ball.x_velocity
        audioWallImpact.currentTime = 0;
        audioWallImpact.play()
    }
    if (ball.x > canvas.width - ball.radius) {
        console.log("Game over")
        document.getElementById("replay").style.display = "block"
        document.getElementById("Scoreboard").style.display = "block"
        document.getElementById("WhatsPong").style.display = "block"
        document.getElementById("dropdown").style.display = "block"
        resultat.style.display = "block"
        home2.style.display = "block"
        gameRunning = false;
    }
}

function kollisjonRight(ball, paddle) {
    if ((ball.x >= paddle.x - ball.radius)
        && (ball.x <= paddle.x)
        && (ball.y > paddle.y - ball.radius)
        && (ball.y <= paddle.y + paddle.height + ball.radius)
        && (ball.x_velocity != -Math.abs(ball.x_velocity))
    ) {
        ball.x_velocity = -ball.x_velocity
        audioImpact.currentTime = 0;
        audioImpact.play()
    }
    else if ((ball.y >= paddle.y + paddle.height)
        && (ball.y <= paddle.y + paddle.height + ball.radius * 2)
        && (ball.x >= paddle.x)
        && (ball.x <= paddle.x + paddle.width)
        && (ball.y_velocity == -Math.abs(ball.y_velocity))) {
        ball.y_velocity = -ball.y_velocity
        ball.x_velocity = -ball.x_velocity
        audioImpact.currentTime = 0;
        audioImpact.play()
    }
    else if ((ball.y <= paddle.y)
        && (ball.y >= paddle.y - ball.radius * 2)
        && (ball.x > paddle.x)
        && (ball.x < paddle.x + paddle.width)
        && (ball.y_velocity == Math.abs(ball.y_velocity))) {
        ball.y_velocity = -ball.y_velocity
        ball.x_velocity = -ball.x_velocity
        audioImpact.currentTime = 0;
        audioImpact.play()
    }

}

function kollisjonLeft(ball, paddle) {
    if ((ball.x <= paddle.x + paddle.width + ball.radius)
        && (ball.x >= paddle.x)
        && (ball.y > paddle.y - ball.radius)
        && (ball.y <= paddle.y + paddle.height + ball.radius)
        && (ball.x_velocity != Math.abs(ball.x_velocity))
    ) {
        ball.x_velocity = -ball.x_velocity
        audioImpact.currentTime = 0;
        audioImpact.play()
    }
    else if ((ball.y >= paddle.y + paddle.height)
        && (ball.y <= paddle.y + paddle.height + ball.radius * 2)
        && (ball.x > paddle.x)
        && (ball.x < paddle.x + paddle.width)
        && (ball.y_velocity == -Math.abs(ball.y_velocity))) {
        ball.y_velocity = -ball.y_velocity
        ball.x_velocity = -ball.x_velocity
        audioImpact.currentTime = 0;
        audioImpact.play()

    }
    else if ((ball.y <= paddle.y)
        && (ball.y >= paddle.y - ball.radius * 2)
        && (ball.x > paddle.x)
        && (ball.x < paddle.x + paddle.width)
        && (ball.y_velocity == Math.abs(ball.y_velocity))) {
        ball.y_velocity = -ball.y_velocity
        ball.x_velocity = -ball.x_velocity
        audioImpact.currentTime = 0;
        audioImpact.play()
    }

}

let gameRunning = true;
function training() {
    if (!gameRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    tegnPaddle(paddlePlayerRight)
    tegnBall(ball1)
    flyttBallTraining(ball1)
    kollisjonRight(ball1, paddlePlayerRight)

}

function two_player() {
    if (!gameRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    tegnPaddle(paddlePlayerRight)
    tegnPaddle(paddlePlayerleft)
    tegnBall(ball1)
    flyttBall(ball1, paddlePlayerleft)
    kollisjonRight(ball1, paddlePlayerRight)
    kollisjonLeft(ball1, paddlePlayerleft)

}

function PvCHard() {
    if (!gameRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    tegnPaddle(paddlePlayerRight)
    tegnPaddle(paddlePlayerHard)
    tegnBall(ball_Hard)
    flyttBall(ball_Hard, paddlePlayerHard)
    flyttBot(ball_Hard, paddlePlayerHard)
    kollisjonRight(ball_Hard, paddlePlayerRight)
    kollisjonLeft(ball_Hard, paddlePlayerHard)

}

function PvCNormal() {
    if (!gameRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    tegnPaddle(paddlePlayerRight)
    tegnPaddle(paddlePlayerNorm)
    tegnBall(ball_Norm)
    flyttBall(ball_Norm, paddlePlayerNorm)
    flyttBot(ball_Norm, paddlePlayerNorm)
    kollisjonRight(ball_Norm, paddlePlayerRight)
    kollisjonLeft(ball_Norm, paddlePlayerNorm)

}

function PvCEasy() {
    if (!gameRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    tegnPaddle(paddlePlayerRight)
    tegnPaddle(paddlePlayerEasy)
    tegnBall(ball_Easy)
    flyttBall(ball_Easy, paddlePlayerEasy)
    flyttBot(ball_Easy, paddlePlayerEasy)
    kollisjonRight(ball_Easy, paddlePlayerRight)
    kollisjonLeft(ball_Easy, paddlePlayerEasy)

}




// Scoreboard

function scoreboard() {
    document.getElementById("botPlayer").style.display = "none"
    document.getElementById("twoPlayer").style.display = "none"
    document.getElementById("training").style.display = "none"
    resultat.style.display = "none"
    home2.style.display = "none"
    replay.style.display = "none"
    canvas.style.display = "none"
    easy.style.display = "none"
    normal.style.display = "none"
    hard.style.display = "none"
    document.getElementById("HighScoreboard").style.display = "flex"

}

// Whats Pong

function whatsPong() {
    document.getElementById("botPlayer").style.display = "none"
    document.getElementById("twoPlayer").style.display = "none"
    document.getElementById("training").style.display = "none"

}