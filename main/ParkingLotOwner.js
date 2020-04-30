// Class of Parking Lot Owner To Check if Parking Is FULL
let airportSecurity=require('./AirportSecurity')

 //Temporary Parking Capacity To Check If Parking is Full or not

class ParkingLotOwner{

    // Method To Check if Parking Capacity os Reached
    checkParkingFull(parkedVehicles,parkingCapacity)
    {
        if (parkedVehicles == parkingCapacity)
        {
            airportSecurity.sendNotification(false)
            return false
        }
        else
            return true
    }
    
    // Method To Check Vacent Space is Available
    checkSpaceAvailable(slotNumber)
    {
        throw new Error("Unparked Vehicle.., vacent space is at slot Number :"+slotNumber)
    }
}
module.exports =new ParkingLotOwner
