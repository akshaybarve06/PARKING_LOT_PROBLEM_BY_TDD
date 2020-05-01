// Main Class For Parking Lot System

// Necessary Imports
let owner=require('./ParkingLotOwner')

// Requred Variables
let parkingCapacity=20
var noOfVehicles=1

class ParkingLotMainClass
{
    constructor(){
        this.parking=[];
    }

    //Method To Add Vehicle To Parking
    isParked(vehicle,callback)
    {
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
            for(let index=1; index<=this.parking.length; index++)
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
        for(let index=1; index<=this.parking.length; index++)
        {
            if (this.parking[index] == undefined )
                return index
        }
        throw new Error("No Parking Slot Is Empty")
    }
    // Method To Add Vehicle At Specific Slot
    addAtSpecific(index,vehicle,callback)
    {
        this.parking[index]=vehicle
        callback(true)
    }
    // Method For Finding Vehicle In Parking Lot
    findVehicle(vehicle)
    {
        for(var index=1; index<=this.parking.length; index++ )
        {
            if(this.parking[index]==vehicle){
                console.log("Vehicle Found At Lot Number.."+index)
                return true;
            }
        }
        throw new Error("This vehicle isn't park here, check credentials again")
    }
}
module.exports=new ParkingLotMainClass;