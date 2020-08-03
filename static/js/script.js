// Challenge 1: Your Age in Days

function ageinDays() {
    var birthYear = prompt('what year were you born....?');
    var actual_age = (2020 - birthYear) * 365;
    // console.log(actual_age) 
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + actual_age + ' days old.')
    h1.setAttribute('id', 'ageinDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
 }

 function reset() {
    document.getElementById('ageinDays').remove();
 }

// Challenge 2: Cat Generator

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "images/cat.jpg";
    div.appendChild(image);
}

// Challenge 3: Rock, Papers, Scissors
function rpsGame(yourChoice) {
    // console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(readtoRpsInt());
    console.log(botChoice);
    results = decideWinner(humanChoice, botChoice); // [1, 1] human lost, bot won
    // console.log(results);
    message = finalMessage(results); // {'message': 'You Won!', 'color': 'green'}
    console.log(message)
    rpsFrontEnd(humanChoice, botChoice, message);
}

function readtoRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissor': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You won!', 'color': 'green'};
    }
}

function rpsFrontEnd(yourImageChoice, computerImageChoice, finalMessage) {
    var imagesDatabase =  {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    };

    // let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[yourImageChoice] + "' height=150, width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size=60px; padding: 50px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[computerImageChoice] + "' height=150, width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}