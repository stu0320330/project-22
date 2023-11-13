basic.showString("" + (input.temperature()))
music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
basic.forever(function () {
    if (input.temperature() >= 37.2) {
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.SmallHeart)
            basic.pause(100)
            basic.showIcon(IconNames.Heart)
        }
        basic.showString("Fever Get Well Soon")
        basic.pause(2000)
    } else {
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.Asleep)
            basic.pause(100)
            basic.showIcon(IconNames.Sad)
        }
        basic.showString("No Fever Stay Healthy")
        basic.pause(2000)
    }
})
