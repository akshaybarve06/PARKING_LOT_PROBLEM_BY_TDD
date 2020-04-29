// Airport Security Class To Send Notification To Airport If Parking is Full
class AirportSecurity{

    // Method To Send Notifation TO Airport When Parking Is Full
    sendNotification=(function(result){
        if (result==false)
            console.log("Notification From Parking Lot : Parking Is Full..!")
    })

}
module.exports=new AirportSecurity;