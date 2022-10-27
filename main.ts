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
    } else if (num >= 14 && num < 17) {
        x = 0
        y = 17 - num
    } else if (num >= 17 && num < 19) {
        x = num - 16
        y = 1
    } else if (num >= 19 && num < 21) {
        x = 3
        y = num - 18
    } else if (num >= 21 && num < 24) {
        x = 24 - num
        y = 3
    } else if (num >= 24) {
        x = num - 23
        y = 2
    }
    led.toggle(4 - x, y)
    if (num >= 25) {
        n = 0
    }
}
function call () {
    change = 1
    左右()
    上下()
    change = -1
    左右()
    上下()
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
let 次 = 0
let change = 0
let y = 0
let x = 0
let n = 0
n = 0
basic.forever(function () {
    n += 1
    燈數(n)
    basic.pause(50)
})
