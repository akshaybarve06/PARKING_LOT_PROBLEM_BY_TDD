// Class of Parking Lot Owner To Check if Parking Is FULL
let airportSecurity=require('./AirportSecurity')

 //Temporary Parking Capacity To Check If Parking is Full or not
let parkingCapacity=2

class ParkingLotOwner{

// Method To Check if Parking Capacity os Reached
    checkParkingFull(parking,callback)
    {
        if (parking.length == parkingCapacity)
        {
            // Sending Notification To Airport Security
            airportSecurity.sendNotification(false)
            callback(false)
        }
        else{
            callback(true)
        }
    }
}
module.exports =new ParkingLotOwner
