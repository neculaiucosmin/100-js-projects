const urlEu = "https://restcountries.com/v2/regionalbloc/eu";
let json, arr

async function getCountries() {
    const response = await fetch(urlEu);
    const data = await response.json();
    addData(data)
    arr = generateArray();
    updateQuestion();
    //generateArray();
}

function addData(obj) {
    json = obj;

    //console.log(json)
}

getCountries()

const pickA = document.getElementById("a1");
const pickB = document.getElementById("a2");
const pickC = document.getElementById("a3");
const pickD = document.getElementById("a4");
const score = document.getElementById("correctAns");


function random(inp) {
    let num;
    num = Math.floor(Math.random() * inp);
    return num;
}

function generateArray() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(random(json.length));
    }
    return arr;
}

let questionNumber = 0;
let counter = 0;
let variants = [pickA, pickB, pickC, pickD];
let pos = variants[random(3)]
document.querySelectorAll(".ans-wrapper").forEach(item => {
    item.addEventListener("click", () => {
        if (item.textContent === pos.textContent) {
            counter++;
            if (questionNumber < 10) {
                questionNumber++;
                updateQuestion();
            }
            else
                finish()
        } else {
            if (questionNumber < 10) {
                questionNumber++;
                updateQuestion();
            }else
                finish();
        }
        score.innerText = counter;
    });
});

function setCorrectAns(currentNum) {
    console.log(json)
    const img = document.getElementById("flag");
    img.src = json[currentNum]["flag"];
    for (let wrongAnsKey in variants) {
        if (variants[wrongAnsKey] !== pos) {
            variants[wrongAnsKey].innerText = json[random(json.length)]["name"];
        }
    }
    pos.innerText = json[currentNum]["name"];
}

function updateQuestion() {
    //console.log(arr[questionNumber])
    console.log(questionNumber);
    setCorrectAns(arr[questionNumber]);
}

const mainMenu = document.querySelector(".menu");
const game = document.querySelector(".playing");
const platBtn = document.querySelector(".play-btn");
platBtn.addEventListener("click", () => {
    mainMenu.classList.add("hide");
    game.classList.remove("hide");
})


const finishDiv = document.querySelector(".finish");

function finish() {
    game.classList.add("hide");
    finishDiv.classList.remove("hide");
}
