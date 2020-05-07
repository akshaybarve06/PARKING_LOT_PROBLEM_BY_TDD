// Main Class For Parking Lot System

// Necessary Imports
let owner=require('./ParkingLotOwner')

// Requred Variables
let noOfVehicles=0,spaceCount=0, finalSpaceCount=0, lotIndex=0,slotIndex=0;
let noOfLots=9, noOfSlots=3;
let index=[],arr=[]

class ParkingLotMainClass
{
    constructor(){
        this.parking=[[],[],[],[]];
    }
    //Method To Add Vehicle To Parking
    isParked(vehicle,callback)
    {
        if( vehicle == null || vehicle == undefined)
            throw new Error("Could not Park..Invalid Vehicle..")
        else 
        {
            // If Parking is not full then it will add vehicle
            if(owner.checkParkingFull(noOfVehicles,noOfLots,noOfSlots))
            {
                if(vehicle.driverType=='Handicap')
                    index=this.findNearestSlot(undefined)
                    else{
                        if(vehicle.carType=='Large')
                            index=this.findLotWithLargestSpace()
                        else
                            index=this.checkForParkingSlot(undefined)
                    }
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
            throw new Error("Could not Unpark..Invalid Vehicle..")
        else
        {   
            index=this.checkForParkingSlot(vehicle)
            delete this.parking[index[0]][index[1]]
            noOfVehicles--
            owner.checkSpaceAvailable(vehicle)
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
            return true
        else
            throw new Error("This vehicle is not park here, check credentials again")
    }
    findCarByColor(vehicleColor)
    {
        let index=0
        arr=[]
        for(lotIndex=0; lotIndex < noOfLots; lotIndex++ )
        {
            for(slotIndex=0; slotIndex < noOfSlots; slotIndex++ )
            {
                if(this.parking[slotIndex][lotIndex]!=undefined)
                {
                    if (this.parking[slotIndex][lotIndex].color == vehicleColor )
                    {
                        arr[index]=[slotIndex,lotIndex]
                        index++
                    }
                }
            }
        }
        if (arr.length > 0 )
            return true
        else
            throw new Error("No White Car Parked Here")
    }
    findCarByColorAndBrand(vehicleColor,vehicleBrand)
    {
        let index=0
        arr=[]
        for(lotIndex=0; lotIndex < noOfLots; lotIndex++ )
        {
            for(slotIndex=0; slotIndex < noOfSlots; slotIndex++ )
            {
                if(this.parking[slotIndex][lotIndex]!=undefined)
                {
                    if (this.parking[slotIndex][lotIndex].color == vehicleColor && this.parking[slotIndex][lotIndex].brand == vehicleBrand )
                    {
                        arr[index]=[slotIndex,lotIndex,this.parking[slotIndex][lotIndex].vehicleNumber]
                        index++
                    }
                }
            }
        }
        if (arr.length > 0 )
            return true
        else
            throw new Error("No Blue Toyota Car Parked Here")
    }
    findCarByBrand(vehicleBrand,callback)
    {
        let index=0
        arr=[]
        for(lotIndex=0; lotIndex < noOfLots; lotIndex++ )
        {
            for(slotIndex=0; slotIndex < noOfSlots; slotIndex++ )
            {
                if(this.parking[slotIndex][lotIndex]!=undefined)
                {
                    if (this.parking[slotIndex][lotIndex].brand == vehicleBrand )
                    {
                        arr[index]=[slotIndex,lotIndex,this.parking[slotIndex][lotIndex].vehicleNumber]
                        index++
                    }
                }
            }
        }
        if (arr.length > 0 )
            callback(true)
        else
            throw new Error("No BMW Car Parked Here")
    }
    findCarByTime(timeInMinutes,callback)
    {
        let index=0
        arr=[]
        for(lotIndex=0; lotIndex < noOfLots; lotIndex++ )
        {
            for(slotIndex=0; slotIndex < noOfSlots; slotIndex++ )
            {
                if(this.parking[slotIndex][lotIndex]!=undefined)
                {      
                    let parkTime=this.minutesConversion(this.parking[slotIndex][lotIndex].parkTime)
                    let currentTime=this.minutesConversion(new Date())
                    if((currentTime- parkTime)<=timeInMinutes)
                    {
                        arr[index]=[slotIndex,lotIndex,this.parking[slotIndex][lotIndex].vehicleNumber]
                        index++
                    }
                }
            }
        }
        if (arr.length > 0 )
            callback(true)
        else
            throw new Error("No Car Parked Since 30 Minutes")
    }
    minutesConversion(date)
    {
        let hrs=date.getHours()
        let mins=date.getMinutes()
        let totalMins=(hrs*60+mins)
        return totalMins
    }
    //Method To Check Nearest Slot in Parking
    findNearestSlot(vehicle)
    {
        arr=[]
        for(lotIndex=0; lotIndex < (noOfLots/2); lotIndex++ )
        {
            for(slotIndex=0; slotIndex < noOfSlots; slotIndex++ )
            {
                if (this.parking[slotIndex][lotIndex] == vehicle )
                {
                    arr=[slotIndex,lotIndex]
                    return arr
                }
            }
        }
        this.checkForParkingSlot(vehicle)
        throw new Error("Couldn't Find Nearest Slot Adding At Available Slot")      
    }
    // Method To Check Availability of Input Vehicle
    checkForParkingSlot(vehicle)
    {
        arr=[]
        for(lotIndex=0; lotIndex < noOfLots; lotIndex++ )
        {
            for(slotIndex=0; slotIndex < noOfSlots; slotIndex++ )
            {
                if (this.parking[slotIndex][lotIndex] == vehicle )
                {
                    arr=[lotIndex,slotIndex]
                    return arr
                }
            }
        }
        throw new Error("Couldn't Add, Remove or Found Specific Vehicle")
    }
    //Method To Find The Largest lot in Parking To Park Large car
    findLotWithLargestSpace()
    {
        arr=[]
        for(lotIndex=0; lotIndex < noOfLots; lotIndex++ )
        {
            spaceCount=0
            for(slotIndex=0; slotIndex < noOfSlots; slotIndex++ )
            {
                if (this.parking[slotIndex][lotIndex] == undefined )
                    spaceCount++
            }
            if(finalSpaceCount < spaceCount)
            {                    
                arr=[lotIndex,slotIndex]
                return arr
            }
            finalSpaceCount=spaceCount
        }
        throw new Error("Couldn't find Largest Slot")
    }
}
module.exports=new ParkingLotMainClass;