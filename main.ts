let 數 = 0
input.onPinPressed(TouchPin.P0, function () {
    數 = randint(80, 100)
    if (數 < 84) {
        basic.showString("A-")
    } else if (數 < 89) {
        basic.showString("A")
    } else {
        basic.showString("A+")
    }
})
basic.forever(function () {
	
})
