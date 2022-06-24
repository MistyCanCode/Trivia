/*We build the quiz app in 8 easy steps:
1: Create Initial References
2: Create Questions & Options Array
3: Implement quizCreator()
4: Function To Display Quiz
5: Show Start Screen On Window Load
6: Create Timer
7: Function To Check If Selected Option Is Correct
8: Implement Functionality For Next Button*/ 

//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;
let numQuestions = 3

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "Which is the most widely spoken language in the world?",
    options: ["Spanish", "Mandarin", "English", "German"],
    correct: "Mandarin",
  },
  {
    id: "1",
    question: "Which is the only continent in the world without a desert?",
    options: ["North America", "Asia", "Africa", "Europe"],
    correct: "Europe",
  },
  {
    id: "2",
    question: "Who invented the Computer?",
    options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
    correct: "Charles Babbage",
  },
  {
    id: "3",
    question: "Which drink was created when Indian army officers added quinine to soda water to help fight malaria?",
    options: ["Lemonade", "Rum", "Tonic Water", "Cream Soda"],
    correct: "Tonic Water",
  },
  {
    id: "4",
    question: "In what type of building did Plato and Aristotle teach?",
    options: ["Gymnasium", "Auditorium", "Cafeteria", "Observatory"],
    correct: "Gymnasium",
  },
  {
    id: "5",
    question: "__________ is home to the world's most remote weather station. Its Eureka weather station is 600 miles from the North Pole.",
    options: ["Mexico", "Belize", "Canada", "Antarctica"],
    correct: "Canada",
  },
  {
    id: "6",
    question: "Which military attack took place on Dec. 7, 1941?",
    options: ["D Day", "The bombing of Hiroshima", "Pearl Harbor", "The Nazi invasion of France"],
    correct: "Pearl Harbor",
  },
  {
    id: "7",
    question: "Which pasta's name means 'Little worms'?",
    options: ["Vermicelli", "Penne", "Fettuccine", "Rotini"],
    correct: "Charles Babbage",
  },
  {
    id: "8",
    question: "What word is used in the NATO Phonetic Alphabet for the letter W?",
    options: ["Wizard", "Whiskey", "Warlock", "Waffle"],
    correct: "Whiskey",
  },
  {
    id: "9",
    question: "Who wrote Auld Lange Syne?",
    options: ["Robert Burns", "JM Barrie", "Robert Lewis Stevenson", "James Hogg"],
    correct: "Robert Burns",
  },
  {
    id: "10",
    question: "Which of these drinks originates from France?",
    options: ["Rum", "Gin", "Vodka", "Whiskey"],
    correct: "Gin",
  },
  {
    id: "11",
    question: "What Do The Opposite Sides Of A Standard Dice Always Total?",
    options: ["8", "7", "12", "6"],
    correct: "7",
  },
  {
    id: "12",
    question: "What word is used in the NATO Phonetic Alphabet for the letter B?",
    options: ["Brandy", "Baby", "Bravo", "Brovecta"],
    correct: "Bravo",
  },
  {
    id: "13",
    question: "Where did the famous witch trials of New England take place?",
    options: ["Greensboro", "Alexandria", "Wilmington", "Salem"],
    correct: "Salem",
  },
  {
    id: "14",
    question: "Which word is defined as 'delusion of a person who believes himself changed into an animal'?",
    options: ["Agoraphobic", "Zoanthropy", "Lycanthropy", "Criptid"],
    correct: "Zoanthropy",
  },
  {
    id: "15",
    question: "What Is The Scirocco?",
    options: ["A Dance", "An Art Movement", "A Mythical Creature", "A Wind"],
    correct: "A Wind",
  },
  {
    id: "16",
    question: "What word is used in the NATO Phonetic Alphabet for the letter H?",
    options: ["Heart", "Honey", "Henry", "Hotel"],
    correct: "Hotel",
  },
  {
    id: "17",
    question: "What did my true love give to me on the 'Seventh' day of Christmas?",
    options: ["7 Maids a Milking", "7 Lords a Leaping", "7 Swans a Swimming", "7 Drummers Drumming"],
    correct: "7 Swans a Swimming",
  },
  {
    id: "18",
    question: "Who proclaimed Thanksgiving a national holiday in the USA in 1863?",
    options: ["Abraham Lincoln", "George Washington", "John Quincy Adams", "Thomas Jefferson"],
    correct: "Abraham Lincoln",
  },
  {
    id: "19",
    question: "Which word is defined as 'Pretending to work when you're not actually doing anything at all'?",
    options: ["Bumfuzzle", "Lackadaisical", "Discombobulate", "Fudgel"],
    correct: "Fudgel",
  },
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener("click", (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == numQuestions) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + numQuestions + " Questions";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  let randomQuestions = quizArray.sort(() => Math.random() - 0.5);
  //log random questions --->  console.log(randomQuestions)
  //grabbing the first 3 entries in the randomQuestions array that was made from sorting the quizArray
  let newQuizArray = randomQuestions.slice(0,3)
  //log new question array ---> console.log(newQuizArray)
  //generate quiz
  for (let i of newQuizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + newQuizArray.length + " Questions";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }
  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};