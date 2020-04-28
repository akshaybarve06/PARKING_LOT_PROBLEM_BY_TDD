// Class of Parking Lot Owner To Check if Parking Is FULL

//Temporary Parking Capacity To Check If Parking is Full or not
let parkingCapacity=2;

class ParkingLotOwner{

    // Method To Check if Parking Capacity os Reached
    checkParkingFull(parking,callback){
        if (parking.length == parkingCapacity){
            // Parking Full Notification on console
            console.log('Hey Sanjay..Parking Is Full Could not park more Vehicle')
            callback(false)
        }
        else
            callback(true)
    }
}
module.exports =new ParkingLotOwner