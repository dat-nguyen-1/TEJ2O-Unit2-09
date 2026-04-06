/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Dat Nguyen
 * Created on: Mar 2026
 * This program will run Rock, Paper, Scissors.
*/

// initialize variables
let randomNumber: number = null
let score: number = 0

input.onGesture(Gesture.Shake, function() {
    // pick a random integer from range (0, 2)
    randomNumber = randint(0, 2)

    // paper
    if (randomNumber == 0) {
        basic.showIcon(IconNames.Square) 
    }

    // rock
    if (randomNumber == 1) {
        basic.showIcon(IconNames.SmallSquare)
    }

    // scissors
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
    }

    // wait 5 s
    basic.pause(5000)

    // reset display
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.A, function() {
    // increment score by 1
    score += 1

    // display check mark
    basic.showIcon(IconNames.Yes)

    // reset display
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function() {
    // display score
    basic.clearScreen()
    basic.showString("Score: " + (score).toString(), 100)

    // reset display
    basic.showIcon(IconNames.Happy)
})
