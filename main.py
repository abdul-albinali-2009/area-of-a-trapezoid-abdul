game.splash("Calculate the area of a trapezoid RIGHT NOW")
base1 = game.ask_for_number("what is the first base in cm?")
base2 = game.ask_for_number("what is the second base in cm?")
height = game.ask_for_number("what is the height in cm?")
area = (base1 + base2) / 2 * height
game.splash("The area of the trapezoid is " + str(area))