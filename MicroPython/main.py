"""
Created by: Dat Nguyen
Created on: Mar 2026
This module will run Rock, Paper, Scissors.
"""

from microbit import *
import random

# initialize image constants
SCISSORS = Image("99009:" "99090:" "00900:" "99090:" "99009")

# initialize variables
random_number = None
score = 0

# initialize display
display.show(Image.HAPPY)

# main loop
while True:
    # handle shake
    if accelerometer.was_gesture("shake"):
        # generate random number from 0 to 2
        random_number = random.randint(0, 2)

        # rock
        if random_number == 0:
            display.show(Image.SQUARE_SMALL)

        # paper
        if random_number == 1:
            display.show(Image.SQUARE)

        # scissors
        if random_number == 2:
            display.show(SCISSORS)

        # wait 5000 ms
        sleep(5000)

        # reset display
        display.show(Image.HAPPY)

    # handle button A press
    if button_a.was_pressed():
        # increment score by 1
        score += 1

        # display check mark for 250 ms
        display.show(Image.YES)
        sleep(250)

        # reset display
        display.show(Image.HAPPY)

    # handle button B press
    if button_b.was_pressed():
        # display score
        display.clear()
        display.scroll("Score: " + str(score))

        # reset display
        display.show(Image.HAPPY)
