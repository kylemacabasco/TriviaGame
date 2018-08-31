let questions = [
    {
        id: 0,
        question: 'Which basketball player is known as "The King"?',
        choices: ['Eddie Jones', 'Kobe Bryant' , 'Lebron James', 'Dez Bryant', 'Draymond Green'],
        correct: 'Lebron James'
    },
    {
        id: 1,
        question: 'In which year was the first Wimbledon tournament held?',
        choices: ['1877', '1993', '1985', '2000', '1977'],
        correct: '1877'
    },
    {
        id: 2,
        question: 'Which football team drafted Eli Manning?',
        choices: ['New York Giants', 'New York Jets', 'San Diego Chargers', 'Oakland Raiders', 'Miami Dolphins'],
        correct: 'San Diego Chargers'
    },
    {
        id: 3,
        question: 'Name the only major team sport in the USA with no game clock?',
        choices: ['Football', 'Baseball', 'Basketball', 'Wrestling', 'Hockey'],
        correct: 'Baseball'
    },
    {
        id: 4,
        question: 'What NBA player scored 100 points in a single game?',
        choices: ['Kobe Bryant', 'Michael Jordan', 'Lebron James', 'Mike Trout', 'Wilt Chamberlain'],
        correct: 'Wilt Chamberlain'
    }
]

questions.forEach(question => {
    $('.container').append(`
            <div class="row">
                <h5 class="question">${question.question}</h5>
                    <p>
                        <label>
                            <input class="choice" data-choice="${question.choices[0]}"name="question-${question.id}" type="radio" data-type="horizontal"  />
                            <span>${question.choices[0]}</span>
                        </label>
                     </p>
                    <p>
                        <label>
                            <input class="choice" data-choice="${question.choices[1]}"name="question-${question.id}" type="radio"  />
                            <span>${question.choices[1]}</span>
                        </label>
                     </p>
                    <p>
                        <label>
                            <input class="choice" data-choice="${question.choices[2]}"name="question-${question.id}" type="radio"  />
                            <span>${question.choices[2]}</span>
                        </label>
                     </p>
                    <p>
                        <label>
                            <input class="choice" data-choice="${question.choices[3]}"name="question-${question.id}" type="radio"  />
                            <span>${question.choices[3]}</span
                        </label>
                     </p>
                    <p>
                        <label>
                            <input class="choice" data-choice="${question.choices[4]}"name="question-${question.id}" type="radio"  />
                            <span>${question.choices[4]}</span>
                        </label>
                     </p>
                    

                <p class="answer-${question.id}" style="visibility: hidden">${question.correct}</p>
            </div>
            `)
})

var qChoice0
var qChoice1
var qChoice2
var qChoice3
var qChoice4

$(document).on('click', '.choice', function () {
    console.log($(this).attr('data-choice'))
    let temp = $(this).attr('name').split('-')
    let qId = temp[1]
    window[`qChoice${qId}`] = $(this).attr('data-choice')
})

$('.finishQuiz').on('click', function () {
    finishGame()
})

function finishGame() {
    clearInterval(gameTimer)
    count = 0
    for (let i = 0; i < questions.length; i++) {
        $(`.answer-${i}`).css('visibility', 'visible')
        if (window[`qChoice${i}`] === questions[i].correct) {
            count++
        }
    }
    if (count === 5) {
        alert('HOMERUN! PERFECT SCORE!!! ')
    } else {
        alert('Please Try Again!')
    }
}

function timeConversion(t) {
    var minutes = Math.floor(t / 60)
    var seconds = t - (minutes * 60)

    if (seconds < 10) {
        seconds = '0' + seconds
    }

    if (minutes === 0) {
        minutes = '00'
    } else if (minutes < 10) {
        minutes = '0' + minutes
    }

    return minutes + ':' + seconds
}

let time = 600
$('.time').html('10:00')


let gameTimer = setInterval(function () {
    time--
    if (time > 0) {
        $('.time').html(timeConversion(time))
    } else {
        $('.time').html('00:00')
        finishGame()
    }
}, 1000)