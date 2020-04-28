// Main Class For Parking Lot System

class ParkingLotMainClass{

    //Method To Add Vehicle To Parking
    isParked=(parking,vehicle,callback) => {
    if( vehicle == null || vehicle == undefined){
        throw new Error("Couldn't Park..Invalid Vehicle..")
    }
    else {
            parking.push(vehicle)
            callback(true)
            }     
    }
  
    //Method To Remove Vehicle To Parking
    isUnparked=(vehicle)=>{
        if( vehicle == null || vehicle == undefined)
            throw new Error("Couldn't Unpark Car..Invalid Vehicle..")
        else 
            return true
    }
}
module.exports=new ParkingLotMainClass;