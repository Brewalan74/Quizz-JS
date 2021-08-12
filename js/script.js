
// console.log(questions[0]);
// let answer = parseInt(prompt(responses[0] + ", " + responses[1] + " or " + responses[2]));

// if (answer === responses[0]) {
//     console.log("CORRECT");
//     document.querySelector("#right li").textContent = questions[0];
// } else {
//     console.log("faux");
//     document.querySelector("#wrong li").textContent = questions[0];
// }


// function askQuestion(index) {
//     for (let question of questions[index]) {
//         console.log(question);
//         let answer = prompt(responses[0] + ", " + responses[1] + " or " + responses[2]);
//         if (answer === responses.indexOf(answer)) {
//             console.log("CORRECT");
//             document.querySelector("#right li").textContent = question;
//         } else {
//             console.log("faux");
//             document.querySelector("#wrong li").textContent = question;
//         }
//     } 
// }

// let response = askQuestion(0);

// function checkResponse(0, response) {

// }

// let isCorrect = checkResponse(0, response);

// console.log(askQuestion());

function playQuizz() {
    for (let i = 0; i < questions.length; i++) {
        let question = questions[i];
        console.log('index = ' + i + ' & question = ' + question);
        let answer = prompt(questions[i] + "\n" + responses.join(', '));
        if (answer == responses[i]) {
            console.log("CORRECT");
            document.querySelector("#right ul").innerHTML += "<li>" + question + " : " + responses[i] + "</li>";
        } else {
            console.log("faux" + ", la bonne réponse est " + responses[i]);
            document.querySelector("#wrong ul").innerHTML += "<li>" + question + " : " + responses[i] + "</li>";
        }
    }
}

console.log(playQuizz());
// test
