input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    timerAttivo = 1
    tempoAttivazioneTimer = control.millis()
})
let tempoAttivazioneTimer = 0
let timerAttivo = 0
let stato = 0
timerAttivo = 1
tempoAttivazioneTimer = control.millis()
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (timerAttivo == 1) {
        if (control.millis() - tempoAttivazioneTimer >= 5000) {
            basic.showIcon(IconNames.Asleep)
            timerAttivo = 0
        }
    }
})
