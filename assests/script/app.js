const quizInfoContainer = document.getElementById("main-cont");
const quizBody = document.getElementById("quiz-body");
let userName = document.getElementById("user-name");
let userEmail = document.getElementById("user-email");
let quizStarterBtn = document.getElementById("quiz-starter");
let minutesTimer = document.getElementById("min-time");
let questionNumberCont = document.getElementById("qu-number");
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
            correctOption: "Hyper Text Markup Language"
        },
        {
            q: "How many types of headings in HTML ?",
            options: ["1", "4", "5", "6"],
            correctOption: "6"

        },
        {
            q: "Which tag is used to make text bold in HTML ?",
            options: ["b tag", "boldText tag", "em tag", "thick tag"],
            correctOption: "b tag"
        },
        {
            q: "In HTML ; <br> tag is used for ,",
            options: ["To break the line", "To make space between text", "To make text bolder"],
            correctOption: "To break the line"
        },
        {
            q: "Which tag is used to insert image in the Web Page",
            options: ["picture", "figure", "img", "canvas"],
            correctOption: "img"
        },
        {
            q: "Which attribute is used with img/> tag for image URL",
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
        },
        {
            q: "We can give height and width to some Inline Elments ?",
            options: ["True", "False"],
            correctOption: "True"
        },
        {
            q: "What is the purpose of using !Doctype in the HTML?",
            options: ["To defines the document", "To tells the browser the version of HTML Markup", "For declaring document type", "None of the above"],
            correctOption: "To tells the browser the version of HTML Markup"
        },
        {
            q: "Which of the following is a self closing tag ?",
            options: ["img", "iframe", "span", "article"],
            correctOption: "img"
        },
        {
            q: "Which of the following element is used to link other pages in html?",
            options: ["link", "a", "sub", "article"],
            correctOption: "a"
        },
        {
            q: "In the anchor tag ; which attribute is used to define the url ?",
            options: ["src", "rel", "path", "href"],
            correctOption: "href"
        },
        {
            q: "Which tag is used to make an ordered list in Html ?",
            options: ["list", "li", "ol", "ul"],
            correctOption: "ol"
        },
        {
            q: "List Item are enclosed inside;",
            options: ["li", "child", "item", "option"],
            correctOption: "li"
        },
        {
            q: "Options are used with the following tag in HTML?",
            options: ["input", "form", "select", "iframe"],
            correctOption: "select"
        },
        {
            q: "HTML do not throw error?",
            options: ["True", "False"],
            correctOption: "True"
        },
        {
            q: "em tag is used to ",
            options: ["Bold the text", "Make text underlined", "Emphasized the text", "None of the above"],
            correctOption: "Emphasized the text"
        },
        {
            q: "meta tag contains;",
            options: ["Extra information about document", "Deleted Information about document", "Missing Information about document", "None of the above"],
            correctOption: "Extra information about document"
        },
        {
            q: "alt attribute with Image tag is used to ;",
            options: ["display alternative text if the image is not load", "altered the image link", "aligned Image", "None of the above"],
            correctOption: "display alternative text if the image is not load"
        }
        ]
    },

    css: {
        name: "CSS",
        questions: [
            {
                q: "Full form of 'CSS' is;",
                options: ["Cascading Source Sheet", "Cascading Style Sheet", "Cascadian Sheet Source", "Current Source Sheet"],
                correctOption: "Cascading Style Sheet"
            },
            {
                q: "Which property of CSS is used to change backgroung color;",
                options: ["bgColor", "background-theme", "backgound-color", "None of the above"],
                correctOption: "backgound-color"
            },
            {
                q: "CSS Variables are define by",
                options: [":root{}", ":var{}", ":key{}", "None of the above"],
                correctOption: ":root{}"
            },
            {
                q: "Font Color can be changed by using property ;",
                options: ["color", "font-color", "font-style", "font-theme"],
                correctOption: "color"
            },
            {
                q: "We can change font family by using property ;",
                options: ["font", "font-style", "font-family", "None of the above"],
                correctOption: "font-family"
            },
            {
                q: "A property can be make Important by using",
                options: ["!important", "!compulsory", "!this", "None of the above"],
                correctOption: "!important"
            },
            {
                q: "We can change display type of an element by using ;",
                options: ["visibility property", "display property", "None of the above"],
                correctOption: "display property",
            },
            {
                q: "padding is define as the ;",
                options: ["distance from more than one element", "distance from border to the Inner Contant of an element", "None of the above"],
                correctOption: "distance from border to the Inner Contant of an element",
            },
            {
                q: "the sequence of properties in shorthand of padding",
                options: ["padding : left, right, top, bottom ;", "padding : top, right, bottom, left", "padding : top, right, left, bottom", "padding : bottom, right, top, left"],
                correctOption: "padding : top, right, left, bottom",
            },
            {
                q: "We can produce gap between two elements by using ; ",
                options: ["gap property", "distance property", "margin property", "padding property"],
                correctOption: "margin property",
            },
            {
                q: "Flexbox in CSS can be only be access when; ",
                options: ["element is a block element", "display of an element is flex", "element is an Inline elemnent", "None of the above"],
                correctOption: "display of an element is flex",
            },
            {
                q: "By default , flex-direction of flex elements is Column ?",
                options: ["True", "False"],
                correctOption: "False",
            },
            {
                q: "Comments in CSS is declared by",
                options: ["//", "/**/", "*/*/"],
                correctOption: "/**/",
            },
            {
                q: "We can set Image in the background of body by;",
                options: ["body{ backgroung-image : url('-----')}", "body{image : url('-----')}", "None of the above"],
                correctOption: "body{ backgroung-image : url('-----')}",
            },
            {
                q: "gap property in css only used if ;",
                options: ["the display of an element is block", "the display of an element is flex", "the distance between two elements is 0px", "None of the above"],
                correctOption: "the display of an element is flex",
            },
            {
                q: "the 'display: none;' will",
                options: ["hide the html element but keep his space on Web Document", "hide the html element and also deletes it from Web Document", "None of the above"],
                correctOption: "hide the html element and also deletes it from Web Document",
            },
            {
                q: "Animation in CSS is define by the keyword ",
                options: ["@keyframes", "@animation", "@transformation", "@animate"],
                correctOption: "@keyframes",
            },
            {
                q: "Which one of the following color property has value in HEX unit; ",
                options: ["color : rgba(0,0,0,0);", "color : #f69223;", "color : rgb(255,255,255)", "None of the above"],
                correctOption: "color : #f69223;",
            },
            {
                q: "In color property , rgb stands for ;",
                options: ["red , green , blue", "red , grey , blue", "red , green , black", "None of the above"],
                correctOption: "red , green , blue",
            },
            {
                q: "Default font size of text in Web Document is ;",
                options: ["12px", "14px", "16px", "18px"],
                correctOption: "16px",
            },
            {
                q: "The h1 tag creates the heading having default font-size of ;",
                options: ["19px", "26px", "32px", "40px"],
                correctOption: "32px",
            },
            {
                q: "In code 'img : hover{}' ; :hover is a",
                options: ["pseudo element selector", "pseudo class selector", "tag class selector", "None of the above"],
                correctOption: "pseudo class selector",
            },
        ]

    },

    javascript: {
        name: "JavaScript",
        questions: [
            {
                q: "JavaScript is used to define the ;",
                options: ["Functionality of the Web Page", "Style of the Web Page", "Design of the Web Page", "None of the above"],
                correctOption: "Functionality of the Web Page",
            },
            {
                q: "How many type of selectors are there in JavaScript ?",
                options: ["2", "3", "4", "5"],
                correctOption: "5",
            },
            {
                q: "Variables in JavaScript are define by using keyword ;",
                options: ["var", "let", "const", "All of the above"],
                correctOption: "All of the above",
            },
            {
                q: "Variables in JavaScript are used to store;",
                options: ["numbers", "data", "strings", "None of the above"],
                correctOption: "data",
            },
            {
                q: "How many types of data are there in JavaScript ?",
                options: ["1", "2", "3", "4"],
                correctOption: "2",
            },
            {
                q: "How many types of primitive data are there in JavaScript ?",
                options: ["3", "4", "5", "6"],
                correctOption: "5",
            },
            {
                q: "How many types of non-primitive data are there in JavaScript ?",
                options: ["4", "3", "2", "1"],
                correctOption: "2",
            },
            {
                q: "Non-premitive data are stored in memory ;",
                options: ["By name", "By value", "By reference", "By path"],
                correctOption: "By reference",
            },
            {
                q: "Premitive data are stored in the memory ;",
                options: ["By name", "By value", "By reference", "By path"],
                correctOption: "By value",
            },
            {
                q: "The Suntax for declaring function in JavaScript ;",
                options: ["var function = myfunction (){}", "myfunction(){}", "function myFuction(){}", "function myfunction{}"],
                correctOption: "function myFuction(){}",
            },
            {
                q: "JavaScript is a case-sensitive language ;",
                options: ["True", "False"],
                correctOption: "True",
            },
            {
                q: "What will be the Output of the following Code? \n var a = 0 ; \n function num(){\n var a = 5 ; \n console.log(a) \n }",
                options: ["0", "1", "5", "2"],
                correctOption: "5",
            }
        ],
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
            location.href = "./assests/Pages/result.html";
            return;
        }
    }
    minutesCountTimerDOM.innerHTML = minutes < 10 ? "0" + (minutes - 1) : `${minutes - 1}`;
    secondsCountTimerDOM.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    setTimeout(quizTimer, 1000);
}

// Quiz 
function categorySelection(category) {
    userSelectCategory = category.value;
}


quizStarterBtn.addEventListener("click", () => {
    quizBody.style.display = "flex";
    quizInfoContainer.style.display = "none";
    quizDOM();
    startQuiz();
    quizTimer();
});

let questionCount = 0;
function quizDOM() {
    questionNumberCont.innerText = (questionCount + 1);
    domOptionContainer.innerHTML = "";
    if (questionCount === quiz[userSelectCategory].questions.length) {
        alert("Quiz Finished");
        location.pathname = "./assests/Pages/result.html";
        return;
    }
    domQuestionContainer.innerText = quiz[userSelectCategory].questions[questionCount].q;
    const optionsInQuestionsObj = quiz[userSelectCategory].questions[questionCount].options
    for (let options of optionsInQuestionsObj) {
        let questionOptions = `<input type="radio" class="option-radio" value="${options}"  name="qu-answers" onclick="getAnswerValue(this)"><span class="option-name">${options}</span><br>`
        domOptionContainer.innerHTML += questionOptions;
    }
}
let userAnswer;
function getAnswerValue(answer) {
    userAnswer = answer.value;
}

const userCorrectAnswersArr = [];
const filteredObjective = [];
answerSubmitBtn.addEventListener("click", () => {
    let correctOption = quiz[userSelectCategory].questions[questionCount].correctOption;
    if (userAnswer === correctOption) {
        userCorrectAnswersArr.push(userAnswer);
        console.log("Correct Answer");
    }
    questionCount++;
    quizDOM();
    console.log(userAnswer);
    console.log(userCorrectAnswersArr);
})
