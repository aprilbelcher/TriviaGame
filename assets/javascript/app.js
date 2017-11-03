(function() {



  const myQuestions = [
    {
      question: "This Pokemon is a Fire-type Pokémon, and resembles a small dinosaur, its red skin and flaming tail giving it an appearance indicative of its type. Typical moves include Ember and Tail Whip.",
      answers: {
        a: "Snorlax",
        b: "Butterfree",
        c: "Charmander"
      },
      correctAnswer: "c"
    },
    {
      question: "They very rare, in the wild they can be found during nights with full moon on Mt. Moon and Mt. Coronet. Once they evolve they become a Clefable?",
      answers: {
        a: "Clefairy",
        b: "Dragonite",
        c: "Bulbasaur"
      },
      correctAnswer: "a"
    },
    {
      question: "He is a member of Team Rocket has the unique capability of human speech.",
      answers: {
        a: "Pidgey",
        b: "Meowth",
        c: "Big Bird"
   
      },
      correctAnswer: "b"
    }
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }




  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();


  
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);



  // on submit, show results
  submitButton.addEventListener("click", showResults);
  
  nextButton.addEventListener("click", showNextSlide);



function countdown(sec,elem){
	var element = document.getElementById(elem);
	element.innerHtml = "Please solve it in " + sec + " seconds" ;
	if(sec < 1){
		setTimeout(showNextSlide(),1);
	}else{
	sec--;
	var timer = setTimeout('countdown('+sec+',"'+elem+'")',1000);
	}

}



var total_seconds =60*1;
var c_minutes = parseInt(total_seconds/60);
var c_seconds = parseInt(total_seconds%60);







function CheckTime(){
	//document.getElementById("quiz-time-left").innerHTML='Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds' ;
	if(total_seconds <=0){
			setTimeout(showNextSlide(),1);
        }else {    
			total_seconds = total_seconds -1;
			c_minutes = parseInt(total_seconds/60);
			c_seconds = parseInt(total_seconds%60);
			setTimeout(CheckTime(),1000);
	}

}

	setTimeout(CheckTime(),1000);


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        //display.textContent = minutes + ":" + seconds;
display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var Minutes = 10 * 1,
        display = document.querySelector('#time');
    startTimer(Minutes, display);
};


})();




