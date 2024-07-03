let userName = document.getElementById("user-name");
let userEmail = document.getElementById("user-email");
let quizStarterBtn = document.getElementById("quiz-starter");
let minutesTimer = document.getElementById("min-time");
let userSelectCategory;
let minutes;
let seconds = 60;

let minutesCountTimerDOM = document.getElementById("minutes-cont");
let secondsCountTimerDOM = document.getElementById("seconds-cont");
let quizCategoryName = document.getElementById("quiz-category-name");
let domQuestionContainer = document.getElementById("question");
let domOptionContainer = document.getElementById("option-cont");
let answerSubmitBtn = document.getElementById("submit-Btn");

const quiz = {
    html: {
        name: "HTML",
        questions: [{
            q: "What is the full form of HTML ?",
            options: ["Hybrid Text Markup Language", "Hyper Text Markup Language", "Hyper Text Making Language", "Hyper Texting Markup Language"],
            correctOption: "Hper Text Markup Language"
        },
        {
            q: "How many types of headings in HTML ?",
            options: ["1", "4", "5", "6"],
            correctOption: "6"

        },
        {
            q: "Which tag is used to make text bold in HTML ?",
            options: ["<b></b>", "<boldText></boldText>" , "<em></em>" , "<thick></thick>"],
            correctOption: "<b></b>"
        },
        {
            q: "In HTML ; <br> tag is used for ,",
            options: ["To break the line", "To make space between text", "To make text bolder"],
            correctOption: "To break the line"
        },
        {
            q: "Which tag is used to insert image in the Web Page",
            options: ["<picture>", "<figure>", "<img>", "<canvas>"],
            correctOption: "<img>"
        },
        {
            q: "Which attribute is used with <img/> tag for image URL",
            options: ["src", "href", "rel", "link"],
            correctOption: "src"
        },
        {
            q: "Which heading tag makes the most thinnest heading in HTML ?",
            options: ["h4", "h2", "h6", "h3"],
            correctOption: "h6"
        },
        {
            q: "How many types of tags in HTML ?",
            options: ["1", "2", "3", "4"],
            correctOption: "2"
        }]
    },

    css: {
        name: "CSS",
        questions: [{}]

    },

    javascript: {
        name: "JavaScript",
        questions: [{}],
    }
}

for (let categories in quiz) {
    let categorySelect = document.getElementById("category");
    let categoryOptions = `<option value="${categories}">${quiz[categories].name}</option>`;
    categorySelect.innerHTML += categoryOptions;
}

for (let i = 1; i < 60; i++) {
    let minutesSelect = document.getElementById("min-time");
    let minutesCountOptions = `<option value="${i}">${i} MINUTES</option>`;
    minutesSelect.innerHTML += minutesCountOptions;

}

function startQuiz() {
    let userNameValue = userName.value;
    let userEmailValue = userEmail.value;
    if (userNameValue.length === 0 || userEmailValue.length === 0) {
        alert("Please enter your name and email address");
        return;
    }
    if (!userEmailValue.includes("@", ".com")) {
        alert("Please enter a valid email address");
        return;
    }
    minutes = parseInt(minutesTimer.value);

}


function quizTimer() {
    seconds--;
    if (seconds === 0) {
        seconds = 60;
        minutes--;
        if (minutes === 0) {
            alert("Time is up");
            minutesCountTimerDOM.innerHTML = "00";
            secondsCountTimerDOM.innerHTML = "00";
            return;
        }
    }
    console.log(seconds, minutes);
    minutesCountTimerDOM.innerHTML = `${minutes - 1}`;
    secondsCountTimerDOM.innerHTML = seconds;
    setTimeout(quizTimer, 1000);
}

// Quiz 
function categorySelection(category) {
    userSelectCategory = category.value;
}


quizStarterBtn.addEventListener("click", () => {
    quizDOM();
    startQuiz();
    quizTimer();
});

let questionCount = 0;
function quizDOM() {
    if(questionCount === quiz[userSelectCategory].questions.length ){
        alert("Quiz Finished")
        return ;
    }
    domOptionContainer.innerHTML= "";
    domQuestionContainer.innerText = quiz[userSelectCategory].questions[questionCount].q;
    console.log(quiz[userSelectCategory].questions.length);
    const optionsInQuestionsObj = quiz[userSelectCategory].questions[questionCount].options
    for (let i = 0  ; i < optionsInQuestionsObj.length ; i++) {
        let opt = `<div class = "question-opt">${optionsInQuestionsObj[i]}</div>`;
        domOptionContainer.innerHTML += opt;
        console.log(optionsInQuestionsObj);
    }
}

answerSubmitBtn.addEventListener("click", () => {
    questionCount++;
    quizDOM();
    console.log(questionCount);
})
