// Airport Security Class To Send Notification To Airport If Parking is Full

// Method To Send Notifation TO Airport When Parking Is Full
let sendNotification=function(result){
    if (result==false)
        console.log("Notification From Parking Lot : Parking Is Full..!")
}
exports.sendNotification= sendNotification;