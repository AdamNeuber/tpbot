

function movement(speed: number, detecting: boolean) {
    
    //detect and move obstacle
    if (TPBot.sonarJudge(TPBot.Sonarjudge.Less, 7) && !detecting) {
        detecting = true
        TPBot.setServo(TPBot.ServoTypeList.S360, TPBot.ServoList.S1, 90)
        TPBot.setTravelTime(TPBot.DriveDirection.Left, speed, 1)
        TPBot.setTravelTime(TPBot.DriveDirection.Forward, speed, 1)
        TPBot.setServo(TPBot.ServoTypeList.S360, TPBot.ServoList.S1, 360)
        TPBot.setTravelTime(TPBot.DriveDirection.Backward, speed, 1.83)
        TPBot.setTravelTime(TPBot.DriveDirection.Right, speed, 0.78)
    }
    
    //follow line
    if (TPBot.trackLine(TPBot.TrackingState.L_R_line)) {
        TPBot.setWheels(speed, speed)
    }
    if (TPBot.trackLine(TPBot.TrackingState.L_unline_R_line)) {
        TPBot.setWheels(speed, 0)
    }
    if (TPBot.trackLine(TPBot.TrackingState.L_line_R_unline)) {
        TPBot.setWheels(0, speed)
    }
}

TPBot.setServo(TPBot.ServoTypeList.S360, TPBot.ServoList.S1, 360)

basic.forever(function () {
    movement(30, false)
})
