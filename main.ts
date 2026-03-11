/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Dat Nguyen
 * Created on: Mar 2026
 * This program will run Rock, Paper, Scissors.
*/

// Initialize variables
let randomNumber: number = null
let score: number = 0

input.onGesture(Gesture.Shake, function() {
    // Pick a random integer from range (0, 2)
    randomNumber = randint(0, 2)

    // Paper
    if (randomNumber == 0) {
        basic.showIcon(IconNames.Square) 
    }

    // Rock
    if (randomNumber == 1) {
        basic.showIcon(IconNames.SmallSquare)
    }

    // Scissors
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
    }

    // Wait 5 s
    basic.pause(5000)

    // Reset display
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.A, function() {
    // Increment score by 1
    score += 1

    // Display check mark
    basic.showIcon(IconNames.Yes)

    // Reset display
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function() {
    // Display score
    basic.clearScreen()
    basic.showString("Score: " + (score).toString(), 100)

    // Reset display
    basic.showIcon(IconNames.Happy)
})