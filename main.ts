function All_lights_off () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
input.onButtonPressed(Button.A, function () {
    All_lights_off()
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(4000)
    All_lights_off()
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(10000)
    Default_state()
})
function Default_state () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
Default_state()
basic.forever(function () {
	
})
