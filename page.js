// Getting access to the camera and stream
var video = document.querySelector("#video_demo");
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Oopsie! Camera access denied.");
    });
}

// Declaring variables for changing information about the vision
var infoName = document.getElementById("infoname");
var information = document.getElementById("information");
var infobg = document.getElementById("info_section");

// Declaring overlays to use for the vision as filter
var overlay = document.getElementById("overlay");
var horseVision = document.getElementById("horse_vision");

// Declaring video that plays in case if access to the camera is denied
var human = document.getElementById("video_demo");
var humanvideo = "images/human.mp4";
human.src = humanvideo;

// Default
function eyetech()
{
    information.innerHTML = "Веб-додаток EYETECH (з англ. eye- око, tech - скорочено від technology - технологія) - це комп'ютерна імітація тваринного зору у режимі реального часу. <br> <br>Даний додаток дає можливість переглянути світ очами чотирьох тварин: собаки, змії, коня та горобця. <br> <br>А засвоєвши матеріал, учні можуть перевірити свої знання з теми <strong><em>'Тваринний зір'</strong></em>, пройшовши невелиикий тест нижче на сторінці.";
    infoName.innerHTML = "Технологія EYETECH";
    human.play();
    infobg.style.backgroundColor = "white";
    overlay.style.visibility = "hidden";
    horseVision.style.visibility = "hidden";
    video.style.filter = "saturate(0)";
    video.style.filter = "grayscale(0)";
    
}

// Sparrow's vision
function infoSparrow()
{
    infoName.innerHTML = "Sparrow";
    information.innerHTML = "Sparrows see everything around in shades of pink: from light to purple. The ends of light-sensitive nerves in their retina (so-called cones) carry oily yellow-red droplets. These tiny droplets act as light filters, attenuating green and blue rays and transmitting red, so birds perceive the world in shades of pink. In this case, sparrows do not like blue, and shiny objects scare them.";
    human.play();
    infobg.style.backgroundImage = "";
    overlay.style.backgroundColor = "#e357ff63";
    overlay.style.visibility = "visible";
    horseVision.style.visibility = "hidden";
    video.style.filter = "saturate(0)";
    video.style.filter = "grayscale(0)";
}

// Cow's vision
function infoCow()
{
    infoName.innerHTML = "Cow";
    information.innerHTML = "Cows are color-blind. They can only see in red and orange. By the way, few people know, but in bullfighting red cloth is used only to attract the eyes of spectators, not the bull, as bulls, as well as cows, because of their color blindness simply can not distinguish either blue or red colored canvas. And their anger arises solely due to the fact that in front of them they wave some incomprehensible rag.";
    human.play();
    infobg.style.backgroundImage = "";
    overlay.style.backgroundColor = "#f55f084f";
    overlay.style.visibility = "visible";
    horseVision.style.visibility = "hidden";
    video.style.filter = "saturate(0)";
    video.style.filter = "grayscale(0)";
}

// Horse's vision
function infoHorse()
{
    infoName.innerHTML = "Horse";
    information.innerHTML = "The horse, like man, perceives the image separately from the right and left eye. We do not notice this, because the images obtained by each eye are subconsciously combined in a visual analyzer (cerebral cortex) into a single image. The horse's eyes are located on different sides of the head, so the two pictures are not layered, and they do not see in relief. In addition, there is a 'blind spot' in the center - something that does not 'detect' either the right or left eye.";
    human.play();
    overlay.style.visibility = "visible";
    overlay.style.backgroundColor = "#f3cc4b63";
    horseVision.style.visibility = "visible";
    video.style.filter = "saturate(0)";
    video.style.filter = "grayscale(0)";
}

// Snake's vision
function infoSnake()
{
    infoName.innerHTML = "Snake";
    information.innerHTML = "Snakes see in two modes. In the first mode, they see as humans, and quite well distinguish all colors. In the second mode, snakes see the world as an infrared sensor, distinguishing the heat emitted by living beings. If you are so unlucky that you met a snake when it looks at the world in the second mode, then you can not escape and do not run away. Fortunately, most snakes retreat faster than they attack humans.";
    human.play();
    video.style.filter = "saturate(10)";
    overlay.style.visibility = "hidden";
    horseVision.style.visibility = "hidden";
}

// Dog's vision
function infoDog()
{
    infoName.innerHTML = "Dog";
    information.innerHTML = "Dogs are also colorblind, but mostly see the world in yellow and blue. And although they see much better than humans in low light, their visual acuity is much lower (objects that you see clearly seem blurred to your pet). The dog's eye is able to perfectly distinguish and focus even on minimal movement. Due to the good location of the eyes, both dogs and cats have a better perception of perspective and depth than humans. ";
    human.play();
    overlay.style.visibility = "visible";
    overlay.style.backgroundColor = "#1f6ed64b";
    horseVision.style.visibility = "hidden";
    video.style.filter = "saturate(0)";
    video.style.filter = "grayscale(0)";
    video.style.filter = "blur(2px)";
}

// Sets the values of parameters at the beggining of the quiz
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

// Checks if the answer is correct and adds points to the score

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    // Moves to the next question
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
  
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
// Quiz algorythm  
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // Shows question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // Shows options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};

// Makes buttons work
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

// Shows how many questions you've complited andhow many left 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

// Stores the messages and images for the particular score
grading = [
        {score:0,feedback:"Ти взагалі не вчив??", image: "0.gif"},
        {score:1,feedback:"Ти взагалі не вчив??", image: "1.gif"},
        {score:2,feedback:"GAME OVER..", image: "2.gif"},
        {score:3,feedback:"GAME OVER...", image: "3.gif"},
        {score:4,feedback:"Без коментарів...", image: "4.gif"},
        {score:5,feedback:"Оптиміст скаже, що ти відповів на половину питань правильно, песиміст - на половину неправильно. А я кажу, що тобі потрібно довчити матеріал і спробувати ще!", image: "5.gif"},
        {score:6,feedback:"Ти на фінішній прямій! Довчи матеріал і спробуй ще!", image: "6.gif"},
        {score:7,feedback:"Ти на фінішній прямій! Довчи матеріал і спробуй ще!", image: "7.gif"},
        {score:8,feedback:"Ти на фінішній прямій! Довчи матеріал і спробуй ще!", image: "8.gif"},
        {score:9,feedback:"Як тобі таке, Ілон Маск?;)", image: "9.gif"},
        {score:10,feedback:"Even Einstein envies your intelligence!", image: "10.gif"}
    ]; 
// Shows the results at the end   
function showScores() {
    
    // Prints out the user's score
    var gameOverHTML = "<h1 class = 'text1' id = 'results'>Результати</h1>";
    gameOverHTML += "<h2 id='score' class = 'text1'> Твоя оцінка: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    
    // Generating gif and feedback based on the user's score
    for(i=0; i<grading.length; i++) {
        if(quiz.score == grading[i].score) {
            result2 = "<img src='images/results/" + grading[i].image + "' class='gif''/><br>" + grading[i].feedback;
            }
    }
    
    // Prints the feedback and gif based on the user's score 
    document.getElementById("grade2").innerHTML = result2; 
};

// Stores questions and correct answers
var questions = [
    new Question("<p style='text-align: center;'>Хто з перелічених тварин <strong>НЕ</strong> є дальтоником?</p><br><img src = 'images/questions/daltonism.gif' class='gifs1'>", ["Кінь", "Горобець", "Змія", "Собака"], "Змія"),
    new Question("<p style='text-align: center;'>Який птах завжди носить <em>'рожеві окуляри'</em>?</p> <br><img src = 'images/questions/glasses.gif' class='gifs1'>", ["Ворона", "Голуб", "Гусак", "Горобець"], "Горобець"),
    new Question("<p style='text-align: center;'>Choose a picture that shows the world through the eyes of a dog.</p><br><img src = 'images/questions/doggo.gif' class='gifs1'>", ["<img src = 'images/questions/quizpic_dog.png' height = '125px'>", "<img src = 'images/questions/quizpic_snake.png' height = '125px'>","<img src = 'images/questions/quizpic_human.png' height = '125px'>", "<img src = 'images/questions/quizpic_horse.png' height = '125px'>"], "<img src = 'images/questions/quizpic_dog.png' height = '125px'>"),
    new Question("<p style='text-align: center;'>Хто з поданих тварин найкраще бачить у темряві?</p><br><img src = 'images/questions/night.gif' class='gifs1'>", ["Курка", "Корова", "Собака", "Вівця"], "Собака"),
    new Question("<p style='text-align: center;'>Чому твердження <em><strong>'Корови не люблять речі червоного кольору'</strong></em> - хибне?</p><br><img src = 'images/questions/cow.gif' class='gifs1'>", ["Вони не розрізняють кольори", "Корови не люблять <em>синій</em> колір", "Вони люблять червоний колір", "Твердження є правильним"], "Вони не розрізняють кольори"),
    new Question("<p style='text-align: center;'>У кого по центру виникає 'сліпа зона'?</p><br><img src = 'images/questions/blind.gif' class='gifs1'>", ["Лисиця", "Кінь", "Жаба", "Корова"], "Кінь"),
    new Question("<p style='text-align: center;'>Хто вважається власником найпотужніших очей по параметру розрізнення кольорів і відтінків?</p><br><img src = 'images/questions/eyes.gif' class='gifs1'>", ["Голуб", "Змія", "Вівця", "Сова"], "Голуб"),
    new Question("<p style='text-align: center;'>Яка тварина бачить у двох режимах: звичайний(як і люди) і тепловий(розрізняють тепло, що виділяють предмети)?</p><br><img src = 'images/questions/snake.gif' class='gifs1'>", ["Бик", "Акула", "Риби", "Змія"], "Змія"),
    new Question("<p style='text-align: center;'>Визначте істинні твердження:<br><br>1. Собаки гірше за людину бачать у темряві.<br>2. Собаки здатні фокусуватись навіть на мінімальному русі.</p><br><img src = 'images/questions/doggy.gif' class='gifs1'>", ["1", "2","1 і 2", "Жодна"], "2"),
    new Question("<p style='text-align: center;'>Яка тварина може бачити майже на 360 градусів?</p><br><img src = 'images/questions/360.gif' class='gifs1'>", ["Кіт", "Кінь", "Заєць", "Усі перелічені"], "Заєць")
];
 
// Creates quiz at the page
var quiz = new Quiz(questions);
 
// Displaying quiz
populate();
