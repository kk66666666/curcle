function 燈數 (num: number) {
    if (num < 6) {
        x = num - 1
        y = 0
    } else if (num >= 6 && num < 9) {
        x = 4
        y = num - 5
    } else if (num >= 9 && num < 14) {
        x = 13 - num
        y = 4
    } else if (num >= 14 && num <= 16) {
        x = 0
        y = 17 - num
    }
    led.plot(x, y)
}
function 左右 () {
    for (let index = 0; index < 次; index++) {
        led.plot(a, b)
        a += change
        basic.pause(100)
    }
}
function 上下 () {
    for (let index = 0; index < 次; index++) {
        led.plot(a, b)
        b += change
        basic.pause(100)
    }
}
let b = 0
let a = 0
let y = 0
let x = 0
let change = 0
let 次 = 0
次 = 4
change = 1
左右()
上下()
change = -1
左右()
上下()
次 = 2
change = 1
左右()
上下()
change = -1
左右()
上下()
basic.forever(function () {
	
})
