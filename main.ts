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
let LETTER: string[] = []
let wpm = 250
let tdot = 1 * wpm
let tdash = 4 * tdot
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
basic.forever(function () {
    LETTER = CC.split("")
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
        basic.pause(tdot)
    }
    basic.pause(tdash)
    basic.pause(tdash)
})
