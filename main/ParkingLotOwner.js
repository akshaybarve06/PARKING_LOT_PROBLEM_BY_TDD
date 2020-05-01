// Class of Parking Lot Owner To Check if Parking Is FULL
let airportSecurity=require('./AirportSecurity')

 //Temporary Parking Capacity To Check If Parking is Full or not

class ParkingLotOwner{

    // Method To Check if Parking Capacity os Reached
    checkParkingFull(parkedVehicles,parkingCapacity)
    {
        if (parkedVehicles == parkingCapacity*parkingCapacity)
        {
            airportSecurity.sendNotification(false)
            return false
        }
        else
            return true
    }
    
    // Method To Check Vacent Space is Available
    checkSpaceAvailable(vehicle,lotNumber,slotNumber)
    {
        throw new Error("Unparked.."+vehicle+" vacent space is at Lot Number:"+lotNumber+" and Lot Number :"+slotNumber)
    }
}
module.exports =new ParkingLotOwner
