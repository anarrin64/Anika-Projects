function playGuessingGame() {
    const targetNumber = Math.floor(Math.random() * 20) + 1;
    const maxAttempts = 5;
    let hasWon = false;

    // Secretly log it to the background console just in case you want to check it
    console.log(`=== Cheat Sheet: Target is ${targetNumber} ===`);

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        let userInput = prompt(`Attempt ${attempt}/${maxAttempts}\n\nEnter your guess (1-20):`);
        
        if (userInput === null) {
            alert("Game exited.");
            return;
        }

        let guess = Number(userInput);

        if (guess === targetNumber) {
            hasWon = true;
            break; // Breaks out of the loop immediately if you guess right!
        }
        
        // --- CHANGER HERE: Changed console.log to alert ---
        if (guess > targetNumber) {
            alert("📈 Too high!"); 
        }
        if (guess < targetNumber) {
            alert("📉 Too low!");
        }
    }

    // --- CHANGE HERE: Changed final win/loss to alert ---
    if (hasWon) {
        alert(`🎉 Outstanding! You guessed the number! The correct number was ${targetNumber}.`);
    } else {
        alert(`💀 Game Over!\n\nThe correct number was ${targetNumber}.`);
    }
}

window.addEventListener("load", function() {
    playGuessingGame();
});