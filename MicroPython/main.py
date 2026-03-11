"""
Created by: Dat Nguyen
Created on: Mar 2026
This module will run Rock, Paper, Scissors.
"""

from microbit import *
import random

# Initialize variables
random_number = None
score = 0

# Main loop
while True:
    # Handle micro:bit shake
    if accelerometer.was_gesture("shake"):
        random_number = random.randint(0, 2)

        # Rock
        if random_number == 0:
            display.show(Image.SQUARE_SMALL)

        # Paper
        if random_number == 1:
            display.show(Image.SQUARE)

        # Scissors
        if random_number == 2:
            display.show(Image.SCISSORS)

        # Wait 5000 ms
        sleep(5000)

        # Reset display
        display.show(Image.HAPPY)

    # Handle button A press
    if button_a.was_pressed():
        # Increment score by 1
        score += 1

        # Display check mark for 250 ms
        display.show(Image.YES)
        sleep(250)

        # Reset display
        display.show(Image.HAPPY)

    # Handle button B press
    if button_b.was_pressed():
        # Display score
        display.clear()
        display.scroll("Score: " + str(score))

        # Reset display
        display.show(Image.HAPPY)
