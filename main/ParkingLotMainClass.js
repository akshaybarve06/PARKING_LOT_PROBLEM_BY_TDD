// Main Class For Parking Lot System

// Necessary Imports
let owner=require('./ParkingLotOwner')

// Requred Variables
let vehicle,color
let parkingCapacity=20
var noOfVehicles=1

class ParkingLotMainClass
{
    constructor(){
        this.parking=[[vehicle,color]];
    }

    //Method To Add Vehicle To Parking
    isParked(vehicle,callback)
    {
        //return true
        if( vehicle == null || vehicle == undefined)
            throw new Error("Couldn't Park..Invalid Vehicle..")
        else 
        {
            // If Parking is not full then it will add vehicle
            if(owner.checkParkingFull(noOfVehicles,parkingCapacity)){
                this.parking[noOfVehicles]=vehicle;
                noOfVehicles++;
                callback(true)
            }
        }
    }
    //Method To Remove Vehicle To Parking
    isUnparked(vehicle)
    {
        if( vehicle == null || vehicle == undefined)
            throw new Error("Couldn't Unpark Car..Invalid Vehicle..")
        else
        {
            for(let index=0; index<parkingCapacity; index++)
            {
                if (this.parking[index] == vehicle )
                {
                    delete this.parking[index];
                    owner.checkSpaceAvailable(index);
                    return true
                }
            } 
        }
    }
    // Method TO Check Empty Slot
    emptySlots()
    {
        for(let index=0; index<parkingCapacity; index++)
        {
            if (this.parking[index] == ',')
                return index
            else
                throw new Error("No Slot is Empty")
        }
    }
    // Method To Add Vehicle At Specific Slot
    addAtSpecific(index,vehicle,callback)
    {
        this.parking[index]=vehicle
        callback(true)
    }
    findVehicle(vehicle,color,callback)
    {
        for(let index=1; index<parkingCapacity; index++ )
        {
            if (this.parking[index] == vehicle,color)
            {
                callback(true)
            }
            else
                throw new Error("Couldn't Find Vehicle, Please Check Credentials..")
        }
    }
}
module.exports=new ParkingLotMainClass;