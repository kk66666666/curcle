def 燈數(num: number):
    global x, y, n
    if num < 6:
        x = num - 1
        y = 0
    elif num >= 6 and num < 9:
        x = 4
        y = num - 5
    elif num >= 9 and num < 14:
        x = 13 - num
        y = 4
    elif num >= 14 and num < 17:
        x = 0
        y = 17 - num
    elif num >= 17 and num < 19:
        x = num - 16
        y = 1
    elif num >= 19 and num < 21:
        x = 3
        y = num - 18
    elif num >= 21 and num < 24:
        x = 24 - num
        y = 3
    elif num >= 24:
        x = num - 23
        y = 2
    led.toggle(4 - x, y)
    if num >= 25:
        n = 0
def call():
    global change
    change = 1
    左右()
    上下()
    change = -1
    左右()
    上下()
def 左右():
    global a
    for index in range(次):
        led.plot(a, b)
        a += change
        basic.pause(100)
def 上下():
    global b
    for index2 in range(次):
        led.plot(a, b)
        b += change
        basic.pause(100)
b = 0
a = 0
次 = 0
change = 0
y = 0
x = 0
n = 0
n = 0

def on_forever():
    global n
    n += 1
    燈數(n)
    basic.pause(50)
basic.forever(on_forever)
