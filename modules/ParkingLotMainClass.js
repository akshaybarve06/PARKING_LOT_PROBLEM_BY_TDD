// Main Class For Parking Lot System

class ParkingLotMainClass{

    // Constructor To Inotialize The Ojects
    constructor(){
        this.parking=[];
    }
    //Method To Add Vehicle To Parking
    isParked(vehicle){
        if( vehicle == null || vehicle == undefined)
            throw new Error("Couldn't Park..Invalid Vehicle..")
        else{
            this.parking.push(vehicle)
            return true
        }     
    }    
    //Method To Remove Vehicle To Parking
    isUnparked(vehicle){
        if( vehicle == null || vehicle == undefined)
            throw new Error("Couldn't Unpark Car..Invalid Vehicle..")
        else 
            if(this.parking.includes(vehicle)){
                this.parking.pop(vehicle)
                return true
            }      
    }
    
}
module.exports=new ParkingLotMainClass;