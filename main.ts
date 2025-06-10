const backMovementEqualizer = 1.85
const rightTurnElqualizer = 0.8

let speed = 30
let detecting = false

function movement(sp: number, detect: boolean) {
    
    //detect and move obstacle
    if (TPBot.sonarJudge(TPBot.Sonarjudge.Less, 7) && !detect) {
        TPBot.setServo(TPBot.ServoTypeList.S360, TPBot.ServoList.S1, 90)
        TPBot.setTravelTime(TPBot.DriveDirection.Left, sp, 1)
        TPBot.setTravelTime(TPBot.DriveDirection.Forward, sp, 1)
        TPBot.setServo(TPBot.ServoTypeList.S360, TPBot.ServoList.S1, 360)
        TPBot.setTravelTime(TPBot.DriveDirection.Backward, sp, backMovementEqualizer)
        TPBot.setTravelTime(TPBot.DriveDirection.Right, sp, rightTurnElqualizer)
    }
    
    //follow line
    if (TPBot.trackLine(TPBot.TrackingState.L_R_line)) {
        TPBot.setWheels(sp, sp)
    }
    if (TPBot.trackLine(TPBot.TrackingState.L_unline_R_line)) {
        TPBot.setWheels(sp, 0)
    }
    if (TPBot.trackLine(TPBot.TrackingState.L_line_R_unline)) {
        TPBot.setWheels(0, sp)
    }
}

TPBot.setServo(TPBot.ServoTypeList.S360, TPBot.ServoList.S1, 360)

basic.forever(function () {
    movement(speed, detecting)
})
