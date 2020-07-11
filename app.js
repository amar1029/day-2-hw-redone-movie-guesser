const movies = [
    { title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic' },
    { title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer' },
    { title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger' },
    { title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon' },
    { title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...' },
    { title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow' },
    { title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka' },
    { title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'AWOOooooooooooo goes the...' },
    { title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...' },
    { title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands' },
    { title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position' }
]

document.getElementById('results').style.display = "none";
document.getElementById('play-again').style.display = "none";


let numberOfGuesses = 3;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

const index = getRandomInt(11)

const correctTitle = movies[index].title
const correctExplanation = movies[index].explanation
const correctHint = movies[index].hint

document.getElementById('explanation').innerHTML = correctExplanation

document.getElementById('guessBtn').addEventListener("click", (e) => {
    const guess = document.getElementById('guess').value;
    document.getElementById('results').style.display = 'block';    
    if(guess === correctTitle) {
        document.getElementById('text-results').innerHTML = `
        Nice! ${guess} is correct!`
        document.getElementById('play-again').style.display = 'block';
        resetGame();
    }
    else if(guess !== correctTitle && numberOfGuesses > 0) {
        document.getElementById('text-results').innerHTML = `
        Sorry, "${guess}" is not correct. Try again!`
        let guessesLeft = guessCounter();
        document.getElementById('guesses-left').innerHTML = `
        Guesses left: ${guessesLeft}`
    }
    if (guess !== correctTitle && numberOfGuesses === 0) {
        document.getElementById('text-results').innerHTML = `
        Game over! The correct answer is "${correctTitle}."`
        document.getElementById('guesses-left').innerHTML = `
        Guesses left: 0`
        document.getElementById('play-again').style.display = 'block';
        resetGame();
    }
})

document.getElementById('hintBtn').addEventListener("click", (e) => {
    document.getElementById('hintExplanation').innerHTML = `
    ${correctHint}`
});

function resetGame () {
    document.getElementById('playAgainBtn').addEventListener('click', (e) =>
        window.location.reload()
    );
};

function guessCounter () {
    numberOfGuesses = numberOfGuesses - 1;
    return numberOfGuesses;
}


