// Class of Parking Lot Owner To Check if Parking Is FULL

let airportSecurity=require('./AirportSecurity')

class ParkingLotOwner
{
    // Method To Check if Parking Capacity os Reached
    checkParkingFull(parkedVehicles,lots,slots)
    {
        if (parkedVehicles == lots*slots)
            airportSecurity.sendNotification(false)
        else
            return true
    }   
    // Method To Check Vacent Space is Available
    checkSpaceAvailable(vehicle)
    {
        throw new Error("Unparked.."+vehicle)
    }
}
module.exports =new ParkingLotOwner
