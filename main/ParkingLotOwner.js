// Class of Parking Lot Owner To Check if Parking Is FULL

class ParkingLotOwner
{
    // Method To Check if Parking Capacity os Reached
    checkParkingFull(parkedVehicles,lots,slots)
    {
        if (parkedVehicles == lots*slots)
            throw new Error("Notification From Parking Lot : Parking Is Full..!")
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
