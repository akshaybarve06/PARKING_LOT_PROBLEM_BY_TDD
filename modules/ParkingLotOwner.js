// Class of Parking Lot Owner To Check if Parking Is FULL
let airportSecurity=require('../modules/AirportSecurity')

//Temporary Parking Capacity To Check If Parking is Full or not
let parkingCapacity=2;

// Method To Check if Parking Capacity os Reached
let checkParkingFull=function(parking,callback)
{
    if (parking.length == parkingCapacity)
    {
        // Parking Full Notification on console
        console.log('Hey Sanjay..Parking Is Full Could not park more Vehicle')
        // Sending Notification To Airport Security
        airportSecurity.sendNotification(false)
        callback(false)
    }
    else
        callback(true)
}
exports.checkParkingFull = checkParkingFull