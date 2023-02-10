// Calculator Function

function calculateNumber (a,b) {
    return a * b
}

let multiply = calculateNumber(5,10);
console.log(multiply);

// Type coercion and concatenation 

let firstName, lastName, stuternTrack, skills, favColour, yearofInd;
firstName = 'Victor';
lastName = 'Omotor';
stuternTrack = 'Backend development';
skills = 'Excellent communication, good presentation, facilitation and training, data analytics, project management, and problem-solving';
favColour = 'blue';
yearofInd = 1960;

console.log('My name is ' + firstName + ' ' + lastName + '. I am on the ' + stuternTrack + ' track at Stutern.' + ' My skills include:' + ' ' + skills + '. My favourite colour is ' + favColour + '. Nigeria gained her independence in ' + yearofInd + '.' );