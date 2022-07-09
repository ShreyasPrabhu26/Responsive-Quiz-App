const quizData = [
    {
        question: "Which is the most used Programing Language in 2019?",
        a: "Java",
        b: "Python",
        c: "Ruby",
        d: "Javascript",
        correct: "a"
    },
    {
        question: "Who is the CEO of Microsoft?",
        a: "Sundar Pichay",
        b: "Elon Musk",
        c: "Jeff Bezzos",
        d: "Satya Nadella",
        correct: "d"
    },
    {
        question: "Who is the CEO of Space-X and Tesla?",
        a: "Sundar Pichay",
        b: "Elon Musk",
        c: "Jeff Bezzos",
        d: "Satya Nadella",
        correct: "b"
    },
    {
        question: "Who is the CEO of Google?",
        a: "Sundar Pichay",
        b: "Elon Musk",
        c: "Jeff Bezzos",
        d: "Satya Nadella",
        correct: "a"
    },
    {
        question: "Who is the CEO of Amazon?",
        a: "Sundar Pichay",
        b: "Elon Musk",
        c: "Jeff Bezzos",
        d: "Satya Nadella",
        correct: "c"
    },
    {
        question: "Who is the CEO of Cred?",
        a: "Elon Musk",
        b: "Kunal Shah",
        c: "Jeff Bezzos",
        d: "Satya Nadella",
        correct: "b"
    },
];
const questionEl = document.getElementById("question");

const quizBody = document.getElementById("quizBody");


const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

const answerEle = document.querySelectorAll(".answer");

function getSelected() {
    let answer = undefined;

    answerEle.forEach((answerEle) => {
        if (answerEle.checked) {
            answer = answerEle.id;
        }
    });
    return answer;
}

function deSelectAnswer() {
    answerEle.forEach((answerEle) => {
        answerEle.checked = false;
    }
    )
}
let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    deSelectAnswer();
    const curerentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = curerentQuizData.question;
    a_text.innerText = curerentQuizData.a
    b_text.innerText = curerentQuizData.b
    c_text.innerText = curerentQuizData.c
    d_text.innerText = curerentQuizData.d
}

loadQuiz();

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            alert(`Your Score is ${score} out of ${quizData.length} questions`);
            submitBtn.innerText="Reload Quiz";
            submitBtn.addEventListener("click",function(){
                location.reload();
            })
        }
    }
})