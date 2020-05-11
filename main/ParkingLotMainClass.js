// Main Class For Parking Lot System

// Necessary Imports
let owner=require('./ParkingLotOwner')

// Requred Variables
let noOfVehicles=0,spaceCount=0,finalSpaceCount=0,lotIndex=0,slotIndex=0;
let noOfLots=9, noOfSlots=3;
let index=[],arr=[]

class ParkingLotMainClass
{
    constructor(){
        this.noOfLots=9,this.noOfSlots=3;
        this.parking=[[],[],[],[]];
    }
    //Method To Add Vehicle To Parking
    isParked(vehicle,callback){
        if( vehicle == null || vehicle == undefined)
            throw new Error("Could not Park..Invalid Vehicle..")
        else {
            // If Parking is not full then it will add vehicle
            if(owner.checkParkingFull(noOfVehicles,noOfLots,noOfSlots))
            {
                if(vehicle.driverType=='Handicap')
                    index=this.checkForParkingSlot(undefined,(noOfLots/2),noOfSlots)
                else{
                    if(vehicle.carType=='Large')
                        index=this.findLotWithLargestSpace()
                    else
                        index=this.checkForParkingSlot(undefined,noOfLots,noOfSlots)
                }
                this.parking[index[0]][index[1]]=vehicle
                noOfVehicles++
                callback(true)
            }
        }
    }
    //Method To Remove Vehicle To Parking
    isUnparked(vehicle){
        if( vehicle == null || vehicle == undefined)
            throw new Error("Could not Unpark..Invalid Vehicle..")
        else{   
            index=this.checkForParkingSlot(vehicle)
            delete this.parking[index[0]][index[1]]
            noOfVehicles--
            owner.checkSpaceAvailable(vehicle)
            return true
        }
    }
    // Method TO Check Empty Slot
    emptySlots(){
        index=this.checkForParkingSlot(undefined,noOfLots,noOfSlots)
            return index
    }
    // Method To Add Vehicle At Specific Slot
    addAtSpecific(index,vehicle,callback){
        this.parking[index[0]][index[1]]=vehicle
        noOfVehicles++
        callback(true)
    }
    // Method For Finding Vehicle In Parking Lot
    findVehicle(vehicle){
        index=this.checkForParkingSlot(vehicle,noOfLots,noOfSlots)
        if(this.parking[index[0]][index[1]]==vehicle)
            return true
        else
            throw new Error("This vehicle is not park here, check credentials again")
    }
    findCarByEntity(vehicle,callback){
        let index=0
        arr=[]
        for(lotIndex=0; lotIndex < noOfLots; lotIndex++ ){
            for(slotIndex=0; slotIndex < noOfSlots; slotIndex++ ){
                if(this.parking[slotIndex][lotIndex]!=undefined){
                    if (this.parking[slotIndex][lotIndex].brand == vehicle ){
                        arr[index]=[slotIndex,lotIndex,this.parking[slotIndex][lotIndex].vehicleNumber]
                        index++
                    }
                }
            }
        }
        this.checkArrayLength(arr,callback)
    }
    getAllValidVehicles(callback){
        let index=0
        arr=[]
        for(lotIndex=0; lotIndex < noOfLots; lotIndex++ ){
            for(slotIndex=0; slotIndex < noOfSlots; slotIndex++ ){
                if(this.parking[slotIndex][lotIndex]!=undefined){  
                    arr[index]=[this.parking[slotIndex][lotIndex].vehicleNumber]
                    index++
                }
            }
        }
        this.checkArrayLength(arr,callback)
    }
    // Method To Find Car Parked Within Specific Time Slot
    findCarByTime(timeInMinutes,callback){
        let index=0
        arr=[]
        for(lotIndex=0; lotIndex < noOfLots; lotIndex++ ){
            for(slotIndex=0; slotIndex < noOfSlots; slotIndex++ ){
                if(this.parking[slotIndex][lotIndex]!=undefined){      
                    let parkTime=this.minutesConversion(this.parking[slotIndex][lotIndex].parkTime)
                    let currentTime=this.minutesConversion(new Date())
                    if((currentTime-parkTime)<=timeInMinutes){
                        arr[index]=[slotIndex,lotIndex,this.parking[slotIndex][lotIndex].vehicleNumber]
                        index++
                    }
                }
            }
        }
        this.checkArrayLength(arr,callback)
    }
    // Method To Convert Park Time Into Minutes
    minutesConversion(date){
        let hrs=date.getHours()
        let mins=date.getMinutes()
        let totalMins=(hrs*60+mins)
        return totalMins
    }
    // Method To Check If Array is Empty ot Not
    checkArrayLength(array,callback){
        if (array.length > 0 )
            callback(true)
        else
            throw new Error("No Such Car Parked Here")
    } 
    //Method To Check Nearest Slot in Parking    
    checkForParkingSlot(vehicle,noOfLots,noOfSlots){
        arr=[]
        for(lotIndex=0; lotIndex < noOfLots; lotIndex++ ){
            for(slotIndex=0; slotIndex < noOfSlots; slotIndex++ ){
                if (this.parking[slotIndex][lotIndex] == vehicle ){
                    arr=[slotIndex,lotIndex]
                    return arr
                }
            }
        }
        throw new Error("Couldn't Find Specific Slot")
    }
    //Method To Find The Largest lot in Parking To Park Large car
    findLotWithLargestSpace(){
        arr=[]
        for(lotIndex=0; lotIndex < noOfLots; lotIndex++ ){
            spaceCount=0
            for(slotIndex=0; slotIndex < noOfSlots; slotIndex++ ){
                if (this.parking[slotIndex][lotIndex] == undefined )
                    spaceCount++
            }
            if(finalSpaceCount < spaceCount){                    
                arr=[lotIndex,slotIndex]
                return arr
            }
            finalSpaceCount=spaceCount
        }
        throw new Error("Couldn't find Largest Slot")
    }
}
module.exports=new ParkingLotMainClass;