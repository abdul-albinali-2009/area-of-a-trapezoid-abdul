game.splash("Calculate the area of a trapezoid RIGHT NOW")
let base1 = game.askForNumber("what is the first base in cm?")
let base2 = game.askForNumber("what is the second base in cm?")
let height = game.askForNumber("what is the height in cm?")
let area = (base1 + base2) / 2 * height
game.splash("The area of the trapezoid is " + area + "cm")
