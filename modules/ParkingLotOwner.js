let parkingCapacity=2;

class ParkingLotOwner{

    checkParkingFull(parking,callback){
        if (parking.length == parkingCapacity){
            console.log('Hey Sanjay..Parking Is Full Could not park more Vehicle')
            callback(false)
        }
        else
            callback(true)
    }
}
module.exports =new ParkingLotOwner