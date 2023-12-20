/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael Bruneau
 * Created on: Dec 2023
 * This program drives car and stops before hitting wall
*/

// variables
let car
let distanceToObject: number = 0

// setup
car = basic.showLeds(`
. . . . .
# # # # .
# # # # #
# . . . #
. . . . .
`)

while (true) {
  if (input.buttonIsPressed(Button.A) == true) {
    basic.showString('hello world')
    basic.pause(10000)
  }
}
