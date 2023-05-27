input.onButtonPressed(Button.A, function () {
    hand = randint(0, 2)
    if (hand == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (isPlay == 1) {
        isPlay = 0
    } else {
        isPlay = 1
    }
})
input.onButtonPressed(Button.B, function () {
    lives += -1
    basic.showNumber(-1)
})
let hand = 0
let isPlay = 0
let lives = 3
isPlay = 1
basic.forever(function () {
    if (lives <= 0) {
        if (isPlay == 1) {
            for (let index = 0; index < 1; index++) {
                music.playMelody("F - D F E E D - ", 226)
                music.playMelody("F F E F E - D - ", 226)
            }
        }
    }
})
basic.forever(function () {
    basic.showIcon(IconNames.Silly)
})
