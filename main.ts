function flash (tempo: number) {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.pause(tempo)
    basic.clearScreen()
}
let c = ""
let idx = 0
let LETTER: string = []
let wpm = 500
let tdot = 1 * wpm
let tdash = 3 * tdot
let morseCode = [
".-",
"-...",
"-.-.",
"-..",
".",
"..-.",
"--.",
"....",
"..",
".---",
"-.-",
".-..",
"--",
"-.",
"---",
".--.",
"--.-",
".-.",
"...",
"-",
"..-",
"...-",
".--",
"-..-",
"-.--",
"--.."
]
let CC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LETTER = CC.split("")
basic.forever(function () {
    for (let value of "SOS".split("")) {
        idx = LETTER.indexOf(value)
        c = morseCode[idx]
        for (let l of c) {
            if (l == ".") {
                flash(tdot)
                basic.pause(tdot)
            } else {
                flash(tdash)
                basic.pause(tdot)
            }
        }
    }
})
