// Main Class For Parking Lot System

// Necessary Imports
let owner=require('./ParkingLotOwner')

// Requred Variables
let parkingCapacity=6
let noOfVehicles=0
let index=[]

class ParkingLotMainClass
{
    constructor(){
        this.parking=[[],[],[],[]];
    }
    //Method To Add Vehicle To Parking
    isParked(vehicle,driverType,callback)
    {
        if( vehicle == null || vehicle == undefined)
            throw new Error("Couldn't Park..Invalid Vehicle..")
        else 
        {
            // If Parking is not full then it will add vehicle
            if(owner.checkParkingFull(noOfVehicles,parkingCapacity))
            {
                if(driverType=='Handicap')
                    index=this.findNearestSlot(undefined)
                else
                    index=this.checkForParkingSlot(undefined)
                this.parking[index[0]][index[1]]=vehicle
                noOfVehicles++
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
            index=this.checkForParkingSlot(vehicle)
            delete this.parking[index[0]][index[1]]
            noOfVehicles--
            owner.checkSpaceAvailable(vehicle,[index[0]],[index[1]])
            return true
       }
    }
    // Method TO Check Empty Slot
    emptySlots()
    {
        index=this.checkForParkingSlot(undefined)
        return index
    }
    // Method To Add Vehicle At Specific Slot
    addAtSpecific(index,vehicle,callback)
    {
        this.parking[index[0]][index[1]]=vehicle
        noOfVehicles++
        callback(true)
    }
    // Method For Finding Vehicle In Parking Lot
    findVehicle(vehicle)
    {
        index=this.checkForParkingSlot(vehicle)
        if(this.parking[index[0]][index[1]]==vehicle)
        {
            console.log("Vehicle Found At Lot Number.."+index[0]+" and Slot Number,"+index[1])
            return true
        }
        else
            throw new Error("This vehicle isn't park here, check credentials again")
    }
    //Method To Check Nearest Slot in Parking
    findNearestSlot(vehicle)
    {
        for(let rowIndex=0; rowIndex < (parkingCapacity/2); rowIndex++ )
        {
            for(let columnIndex=0; columnIndex < parkingCapacity; columnIndex++ )
            {
                if (this.parking[rowIndex][columnIndex] == vehicle )
                {
                    var arr=[rowIndex,columnIndex]
                    console.log("Driver Is Handicap added at.."+rowIndex+","+columnIndex)
                    return arr
                }
            }
        }
        throw new Error("Couldn't Find Nearest Slot")
    }
    // Method To Check Availability of Input Vehicle
    checkForParkingSlot(vehicle)
    {
        for(let rowIndex=0; rowIndex < parkingCapacity; rowIndex++ )
        {
            for(let columnIndex=0; columnIndex < parkingCapacity; columnIndex++ )
            {
                if (this.parking[rowIndex][columnIndex] == vehicle )
                {
                    var arr=[rowIndex,columnIndex]
                    return arr
                }
            }
        }
        throw new Error("Couldn't Add, Remove or Found Specific Vehicle")
    }
}
module.exports=new ParkingLotMainClass;