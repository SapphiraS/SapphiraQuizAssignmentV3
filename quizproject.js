let currentQuestion = 0;
let score = 0;
let hints = 0; //counter for hints shown
let maxHints = 3; //max hints to show
let timeleft = 300; // 300 second timer
let message = "";

let questions = [
   {
	"question": "What flower symbolizes grief? ",
	"a": "Daffodil",
	"b": "Chrysanthemum",
	"c": "Geranium", 
	"d": "Marigold", //Correct
	"image":"quizimages/q1.jpg",
	"hint":"The color of the flower is yellow",
	"fact" : "One of the flowers on the list symbolizes stupidity",
	"answer": "d"
   },
   {
	"question": "What is the most widely grown tree in Canada?",
	"a": "Fir",
	"b": "Spruce", //Correct
	"c": "Oak",
	"d": "Birch",
	"image":"quizimages/q2.jpg",
	"hint":"It doesn't grow on the island",
	"fact" : "The maple tree is Canada's national tree",
	"answer": "b"
   },
     {
	"question": "Which is not an invasive plant?",
	"a": "Periwinkle",
	"b": "Multiflora Rose",
	"c": "Foamflower", //Correct
	"d": "Yellow Iris",
	"image":"quizimages/q3.jpg",
	"hint":"The plant has white blooms",
	"fact" : "The Himalayan blackberry is a common invasive species.",
	"answer": "c"
   },
     {
	"question": "What is the name of this flower?",
	"a": "Peony",
	"b": "Hydrangea",
	"c": "Iris",
	"d": "Hyacinth", //Correct
	"image":"quizimages/q4.jpg",
	"hint":"The answer starts with the letter H",
	"fact" : "This flower is a symbol of peace, power and pride",
	"answer": "d"
   },
     {
	"question": "Which plant is poisonous?",
	"a": "Rosary Pea", //Correct
	"b": "Bleeding hearts",
	"c": "Yarrow",
	"d": "Sea Holly",
	"image":"quizimages/q5.jpg",
	"hint":"Yarrow is medicinal",
	"fact" : "Deadly nightshade is also known as Belladonna",
	"answer": "a"
   },
     {
	"question": "Which plant is a vegetable?",
	"a": "Tomato",
	"b": "Rhubarb", //Correct
	"c": "Avacado",
	"d": "Pumpkin",
	"image":"quizimages/q6.jpg",
	"hint":"A tomato is actually a fruit",
	"fact" : "Vegetables can lower blood pressure and reduce the risk of a stroke.",
	"answer": "b"
   },
     {
	"question": "Which plant caused the crash of the Dutch Economy?",
	"a": "Tulips", //Correct
	"b": "Bonsai",
	"c": "Variegated Monstera",
	"d": "Kadupul flower", //most expensive plant on earth
	"image":"quizimages/q7.jpg",
	"hint":"This plant is a common flower",
	"fact" : "This flower's price skyrocketed for its supposedly supernatural properties",
	"answer": "a"
   },
     {
	"question": "What is the fastest growing plant in the world?",
	"a": "Duckweed",
	"b": "Algae",
	"c": "Bamboo", //Correct
	"d": "Acacia",
	"image":"quizimages/q8.jpg",
	"hint":"The answer is native to China",
	"fact" : "Some of these plants can grow 1.5 inches and hour.",
	"answer": "c"
   },
     {
	"question": "Which country is named after a tree?",
	"a": "Myanmar",
	"b": "Mauritania",
	"c": "Samoa",
	"d": "Brazil", //Correct
	"image":"quizimages/q9.jpg",
	"hint":"The country is in South America",
	"fact" : "This tree may live for 500 years or more, and can often reach a thousand years of age.",
	"answer": "d"
   },
     {
	"question": "Which plant makes up 26% of all plant life on Earth?",
	"a": "Trees",
	"b": "Grass", //Correct
	"c": "Fungi",
	"d": "Moss",
	"image":"quizimages/q10.jpg",
	"hint":"Fungi are not plants",
	"fact" : "Forests cover 31 percent of global land area",
	"answer": "b"
   }
 ];
 //pictures do not relate unless expressly noted                
              
 
 window.onload = function () {
  //hints
 	document.getElementById("hintButton").onclick = null;
	hintButton.disabled = true;
	 
	 //restart
	 document.getElementById("resetButton").onclick = restartQuiz;
	 
	 document.getElementById("bonus").onclick = bonusF;
	
	 
	 loadQuestion();
	 
	 
	 
	 
	 // call the annonymous function every 1000 ms or 1 second
  let downloadTimer = setInterval(function(){
  
      // update display
      document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
      timeleft -= 1;  // decrement time left
      
      // if time runs out, end timer
      if(timeleft <= 0){
        clearInterval(downloadTimer);
       document.getElementById("countdown").innerHTML = "Finished";
		
			//restart quiz option
      document.getElementById("lightbox").style.display = "block";
      message += "<div id='noTime' onclick='restartQuiz()'>You are out of time! Click here to restart</div>";
      document.getElementById("message").innerHTML = message;

      //stop game
      document.getElementById("question").innerHTML = null;	 
	  document.getElementById("a").innerHTML = null;
	  document.getElementById("b").innerHTML = null;
	  document.getElementById("c").innerHTML = null;
	  document.getElementById("d").innerHTML = null;

      //Additional feature *
		}; //end of timer
	}, 1000);
  
  
  
 };//onload

	 
 
 
 //show hint for current question if max not reached
 let getHintF = function (){ 
	 console.log("hint button clicked");
	 //if max hints not reached 
	 if (hints < maxHints) {
		 
		 //get hint for current questions
		 let currentHint = questions[currentQuestion].hint;
		 
		 //show in webpage
		 document.getElementById("hint").innerHTML = currentHint;
		 
		 //increment hints shown
		 hints ++;
		  document.getElementById("hintButton").onclick = null;
	 }
 
 };
 
 
 let bonusF = function () {
	 score++;
	 document.getElementById("score").innerHTML = score + " / " + questions.length;
	 document.getElementById("bonus").onclick = null;
 }
 

 function loadQuestion() {
	
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    //img.style.maxWidth = "70vh";
	//img.style.maxHeight = "80vh";
	
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
	
	//get hint for current question
   document.getElementById("hintButton").onclick = getHintF; 
 
 
  //hintButton.disabled = true;
	
	//get fact for current questions
	 let currentFact = questions[currentQuestion].fact;
	 
	 //show in webpage
	 document.getElementById("pictureFact").innerHTML = currentFact; 
	 
	 //Additional feature *
	 
	
	//reset hint box 
	document.getElementById("hint").innerHTML = "You have " + (maxHints - hints) + " hints remaining";

	
	
 } // loadQuestion
 
 
 function markIt(ans) {
     
    //let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       document.getElementById("message").style.backgroundColor = "#3c6743";
       message = "Correct! - Your score is " + score + " / " + questions.length;
    } else {
		
		if (score >= 1) {
	   score--;
      document.getElementById("score").innerHTML = score + " / " + questions.length;
       message = "Incorrect - You loose 1 point - Your score is " + score + " / " + questions.length; 
	   document.getElementById("message").style.backgroundColor = "#b83930";
		} 
		
		if (score == 0 ){
     document.getElementById("score").innerHTML = score + " / " + questions.length; 
		message = "Incorrect - Your score is " + score + " / " + questions.length;
		document.getElementById("message").style.backgroundColor = "#b83930";
		}
		 
		 //Aditional Feature **
		 
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
       // create a special message
	   if (score == 0) {
		  message = "0/10 Yikes. You need to touch some grass. ";
	   } 
	   
	   if (score == 1) {
		  message = "1/10 Did you even read the questions?";
	   } 
	   
	   if (score == 2) {
		  message = "2/10 Have you ever seen a tree before?";
	   } 
	   
	   if (score == 3) {
		  message = "3/10 You really need to get outside more.";
	   } 
	   
	   if (score == 4) {
		  message = "4/10 Almost 50%... That's still a failing grade.";
	   } 
	   
	   if (score == 5) {
		  message = "5/10 At least you tried.";
	   } 
	   
	   if (score == 6) {
		  message = "6/10 You did alright. Maybe venture outside more often.";
	   } 
	   
	   if (score == 7) {
		  message = "7/10 That was a solid attempt.";
	   } 
	   
	   if (score == 8) {
		  message = "8/10 So close but yet so far.";
	   } 
	   
	   if (score == 9) {
		  message = "9/10 You did pretty good! You know your stuff.";
	   } 
	   
	   if (score == 10) {
		  message = "10/10 Great job! You're a proffessional.";
	   } 
	   
	   
	   
	   
      //message = "Your final score is " + score; 
		
	  //add ability to restart quiz
	  message += "<div id='restart' onclick='restartQuiz()'>Restart</div>";
	  
	
    
	  
    } else {
       loadQuestion();
    }
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function restartQuiz (){
	 location.reload();
	 
 }//restart quiz
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
 } // closeLightbox

 if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}    
