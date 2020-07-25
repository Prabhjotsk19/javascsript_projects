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