let 數 = 0
input.onPinPressed(TouchPin.P0, function () {
    數 = randint(80, 100)
    basic.showString("" + (數))
    if (數 < 84) {
        basic.showString("A-")
    } else if (數 < 89) {
        basic.showString("A")
    } else if (數 >= 90) {
        basic.showString("A+")
    }
})
