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
    infoName.innerHTML = "Горобець";
    information.innerHTML = "Горобці бачать все навколо в відтінках рожевого: від світлого до фіолетового. Закінчення світлочутливих нервів в їх сітківці (так звані колбочки) несуть в собі маслянисті жовто-червоні крапельки. Ці крихітні крапельки діють як світлофільтри, що послаблюють зелені і сині промені і пропускають червоні, тому птахи сприймають світ у відтінках рожевого. При цьому горобці не люблять синій колір, а блискучі предмети їх лякають.";
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
    infoName.innerHTML = "Корова";
    information.innerHTML = "Корови - дальтоніки особливі . Вони здатні бачити лише у червоно-помаранчевих кольорах. До речі, мало хто знає, але у кориді червоне полотно застосовується виключно для залучення поглядів глядачів, а не бика, так як бики, також як і корови, через їх дальтонізм просто не здатні розрізнити чи то синім, чи то червоним кольором забарвлене полотно. А їх лють виникає виключно із-за того, що перед ними махають якоюсь незрозумілою ганчіркою.";
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
    infoName.innerHTML = "Кінь";
    information.innerHTML = "Кінь, як і людина, сприймає окремо зображення від правого та від лівого ока. Ми не помічаємо цього, тому що зображення, отримані кожним оком підсвідомо об'єднуються у зоровому аналізаторі (корі головного мозку) в єдиний образ. Очі у коня розташовані по різні сторони голови, тому дві картинки не нашаровуються, і вони не бачать рельєфно. До того ж по центру виникає «сліпа зона» - те що не «засікає» ні праве, ні ліве око.";
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
    infoName.innerHTML = "Змія";
    information.innerHTML = "Змії бачать в двох режимах. В першому режимі вони бачать як люди, при чому досить добре розрізняють всі кольори. В другому режимі змії бачать світ немов інфрачервоний датчик, розрізняючи тепло, яке випромінюють живі істоти. Якщо ви настільки невезучий, що зустріли змію, коли вона дивиться на світ в другому режимі, то вам вже не врятуватися і не втекти. На щастя, більшість змій швидше відступить ніж атакуватиме людину.";
    human.play();
    video.style.filter = "saturate(10)";
    overlay.style.visibility = "hidden";
    horseVision.style.visibility = "hidden";
}

// Dog's vision
function infoDog()
{
    infoName.innerHTML = "Собака";
    information.innerHTML = "Собаки теж дальтоніки, але здебільшого бачать світ у жовтому і синьому кольорах. І хоча вони набагато краще за людину бачать у недостатньому освітленні, гострота їхнього зору значно нижча (предмети, які ви бачите чітко, видаються вашому улюбленцю розмитими). Око собаки здатне прекрасно розрізняти та фокусуватися навіть на мінімальному русі. Через вдале розташування очей і собаки, і коти мають краще сприйняття перспективи і глибини, ніж людина.";
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
        {score:10,feedback:"Твоєму розуму заздрить сам Енштейн!", image: "10.gif"}
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
    new Question("<p>Хто з перелічених тварин <strong>НЕ</strong> є дальтоником?</p><br><img src = 'images/questions/daltonism.gif' class='gifs1'>", ["Кінь", "Горобець", "Змія", "Собака"], "Змія"),
    new Question("<p>Який птах завжди носить <em>'рожеві окуляри'</em>?</p> <br><img src = 'images/questions/glasses.gif' class='gifs1'>", ["Ворона", "Голуб", "Гусак", "Горобець"], "Горобець"),
    new Question("<p>Оберіть картинку, на якій зображено світ очима собаки.</p><br><img src = 'images/questions/doggo.gif' class='gifs1'>", ["<img src = 'images/questions/quizpic_dog.png' height = '125px'>", "<img src = 'images/questions/quizpic_snake.png' height = '125px'>","<img src = 'images/questions/quizpic_human.png' height = '125px'>", "<img src = 'images/questions/quizpic_horse.png' height = '125px'>"], "<img src = 'images/questions/quizpic_dog.png' height = '125px'>"),
    new Question("<p>Хто з поданих тварин найкраще бачить у темряві?</p><br><img src = 'images/questions/night.gif' class='gifs1'>", ["Курка", "Корова", "Собака", "Вівця"], "Собака"),
    new Question("<p>Чому твердження <em><strong>'Корови не люблять речі червоного кольору'</strong></em> - хибне?</p><br><img src = 'images/questions/cow.gif' class='gifs1'>", ["Вони не розрізняють кольори", "Корови не люблять <em>синій</em> колір", "Вони люблять червоний колір", "Твердження є правильним"], "Вони не розрізняють кольори"),
    new Question("<p>У кого по центру виникає 'сліпа зона'?</p><br><img src = 'images/questions/blind.gif' class='gifs1'>", ["Лисиця", "Кінь", "Жаба", "Корова"], "Кінь"),
    new Question("<p>Хто вважається власником найпотужніших очей по параметру розрізнення кольорів і відтінків?</p><br><img src = 'images/questions/eyes.gif' class='gifs1'>", ["Голуб", "Змія", "Вівця", "Сова"], "Голуб"),
    new Question("<p>Яка тварина бачить у двох режимах: звичайний(як і люди) і тепловий(розрізняють тепло, що виділяють предмети)?</p><br><img src = 'images/questions/snake.gif' class='gifs1'>", ["Бик", "Акула", "Риби", "Змія"], "Змія"),
    new Question("<p>Визначте істинні твердження:<br><br>1. Собаки гірше за людину бачать у темряві.<br>2. Собаки здатні фокусуватись навіть на мінімальному русі.</p><br><img src = 'images/questions/doggy.gif' class='gifs1'>", ["1", "2","1 і 2", "Жодна"], "2"),
    new Question("<p>Яка тварина може бачити майже на 360 градусів?</p><br><img src = 'images/questions/360.gif' class='gifs1'>", ["Кіт", "Кінь", "Заєць", "Усі перелічені"], "Заєць")
];
 
// Creates quiz at the page
var quiz = new Quiz(questions);
 
// Displaying quiz
populate();
