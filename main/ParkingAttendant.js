// Parking Attendant Class To Check Vacent Space

let mainClassObject=require('./ParkingLotMainClass')

class ParkingAttendant
{
    // Method To Find Vacent Slot In Parking Lot
    checkVacentSlot(callback)
    {
        let indexReceived=mainClassObject.emptySlots()
        callback(indexReceived)
    }
    // Method To Find Nearest Parking Slot Available
    checkNearestSlot(callback)
    {
        let nearestSlot=mainClassObject.findNearestSlot(undefined)
        callback(nearestSlot)
    }
}
module.exports=new ParkingAttendant;
