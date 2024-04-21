const screens = document.querySelectorAll('.screen');
const start_btn = document.getElementById('start-btn');
const gameContainer = document.querySelector(".container");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
let userResult = document.querySelector(".user_result img");
let cpuResult = document.querySelector(".cpu_result img");
let result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

let userScore = 0;
let computerScore = 0;

function updateScore(userChoice, computerChoice) {
    if ((userChoice === "R" && computerChoice === "R") ||
        (userChoice === "P" && computerChoice === "P") ||
        (userChoice === "S" && computerChoice === "S")) {
        result.textContent = "Match draw";
        outcome = "draw";
    } else if ((userChoice === "R" && computerChoice === "S") ||
        (userChoice === "P" && computerChoice === "R") ||
        (userChoice === "S" && computerChoice === "P")) {
        result.textContent = "You won!";
        outcome = "win";
        userScore++;
    } else {
        result.textContent = "Bot won!";
        outcome = "lose";
        computerScore++;
    }
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;

    gameContainer.classList.remove("win", "lose", "draw");
    gameContainer.classList.add(outcome);
}

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = "images/rock.png";
        result.textContent = "Wait...";

        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });

        let imageSrc = e.target.querySelector("img").src;
        userResult.src = imageSrc;

        let randomNumber = Math.floor(Math.random() * 3);
        let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
        cpuResult.src = cpuImages[randomNumber];

        gameContainer.classList.add("start");
        let time = setTimeout(() => {
            gameContainer.classList.remove("start");

            let cpuValue = ["R", "P", "S"][randomNumber];
            let userValue = ["R", "P", "S"][index];

            updateScore(userValue, cpuValue);
        }, 2500);
    });
});
