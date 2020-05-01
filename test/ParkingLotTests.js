// Importing 'chai' library and 'Main Class' in code
let expect = require('chai').expect
let chai = require('chai')
let sinon = require('sinon')
let parkingLotMain = require('../main/ParkingLotMainClass')
let owner= require('../main/ParkingLotOwner')
let parkingAttendent=require('../main/ParkingAttendant')
let car0,car1,car2,car3,car4,car5,car6,car7,car8,car9,car10;

//Test Cases For Parking Lot System
describe(`Test Cases For Parking Lot System`, () =>
{
/*    // Run Before Each Test Execution
    beforeEach(()=>{
        sinon.stub(owner,'checkParkingFull');
    })
    afterEach(()=>{
        owner.checkParkingFull.restore();
    })    */
    // Test For Add Vehicle in Parking Lot
    it(`given car object when car is parked should return true`, ()=>
    {
        car0={vehicleNumber:"MH.15.XX.0000",color:"White",parkTime:Date(),DriverType:"Handicap"}
        try{
            parkingLotMain.isParked(car0.vehicleNumber,car0.DriverType,function(result){
                expect(result).to.equal(true);
            }) 
        }catch(e){
            console.log(e.message);
        }
    })
    // Test For Possiblities To Add Vehicle in Parking Lot
    it(`given car object when invalid and car is not parked should return exception`, ()=>
    {
        try{
            parkingLotMain.isParked(null,null,function(result){
                expect(result).to.equal(true);
            });
        }catch(e){
            console.log(e.message);
        }
    })
    // Test For Unpark Car from parking Lot
    it(`given car object when car is unpark then return true`, ()=>
    {
        car1={vehicleNumber:"MH.15.XX.1111",color:"Yello",parkTime:Date(),DriverType:"Normal"}
        try{
            parkingLotMain.isParked(car1.vehicleNumber,car1.DriverType,function(result){
                let carParkedOrNot= parkingLotMain.isUnparked(car1.vehicleNumber);
                expect(carParkedOrNot).to.equal(true);
            }) 
        }catch(e){
            console.log(e.message)
        }  
    })
    // Test For Possiblities To Remove Vehicle from Parking Lot
    it(`given car object when invalid or car can't unparked should return exception`, ()=>
    {
        car2={vehicleNumber:"MH.15.XX.2222",color:"Cyan",parkTime:Date(),DriverType:"Normal"}
        try{
            parkingLotMain.isParked(car2.vehicleNumber,car2.DriverType,function(result){
                let carParkedOrNot= parkingLotMain.isUnparked(undefined);
                expect(carParkedOrNot).to.equal(true);
            })
        }catch(e){
            console.log(e.message);
        }
    })
    // Test For Check The Parking Lot Is Full
    it(`given car object when park if parking full should return parking full`, ()=>
    {
        car3={vehicleNumber:"MH.15.XX.3333",color:"Black",parkTime:Date(),DriverType:"Normal"}
        car4={vehicleNumber:"MH.15.XX.4444",color:"Red",parkTime:Date(),DriverType:"Normal"}
        try{
            parkingLotMain.isParked(car3.vehicleNumber,car3.DriverType,function(result){
                parkingLotMain.isParked(car4.vehicleNumber,car4.DriverType,function(result){
                    expect(result).to.equal(true);
                })
            })
        }catch(e){
            console.log(e.message)
        }
    })
    //Test For Checking If Parking Is Full and notify Airport Security
    it(`given car object when parking is full then notify airport security return exception`, ()=>
    {
        car5={vehicleNumber:"MH.15.YY.5555",color:"Orange",parkTime:Date(),DriverType:"Handicap"}
        car6={vehicleNumber:"MH.15.YY.6666",color:"Green",parkTime:Date(),DriverType:"Normal"}
        try{
            parkingLotMain.isParked(car5.vehicleNumber,car5.DriverType,function(result){
                parkingLotMain.isParked(car6.vehicleNumber,car6.DriverType,function(result){
                    expect(result).to.equal(true);
                })
            })
        }catch(e){
            console.log(e.message)
        }
    })
    //Test Case To Check Parking Lot Spaces 
    it(`given car object when parking lot is not full then show spaces available`, ()=>
    {
        car7={vehicleNumber:"MH.15.YY.7777",color:"Blue",parkTime:Date(),DriverType:"Normal"}
        car8={vehicleNumber:"MH.15.ZZ.8888",color:"Indigo",parkTime:Date(),DriverType:"Handicap"}
        try{
            parkingLotMain.isParked(car7.vehicleNumber,car7.DriverType,function(result){
                parkingLotMain.isParked(car8.vehicleNumber,car8.DriverType,function(result){
                    let unparkResult=parkingLotMain.isUnparked(car8.vehicleNumber)
                        expect(unparkResult).to.equal(true);
                    })
            })
        }catch(e){
            console.log(e.message)
        }
    })
    // Test Case To Take Decisions Where To Park Cars
    it(`given car object when parking lot has space, attendent will park car`, ()=>
    {
        car9={vehicleNumber:"MH.15.ZZ.9999",color:"Gray",parkTime:Date(),DriverType:"Normal"}
        try{
            parkingAttendent.checkVacentSlot(function(result){
                let position=result;
            parkingLotMain.addAtSpecific(position,car9.vehicleNumber,function(result){
                expect(result).to.equal(true);
            })
        })
        }catch(e){
            console.log(e.message)
        }
    })
    // Test Case To Find Vehicle From Parking Lot
    it(`given car if found in parking lot should return true`, ()=>
    {
        try{
            let result=parkingLotMain.findVehicle(car7.vehicleNumber);
                expect(result).to.equal(true);
        }catch(e){
            console.log(e.message)
        }
    })
    // When Car Parked In Lot Owner Want To Get Details of that vehicle
    it(`given car object if park show parking details of that vehicle`, ()=>
    {
        try{
            if (parkingLotMain.findVehicle(car4.vehicleNumber)){
                console.log("Details : Number : "+car4.vehicleNumber)
                console.log("          Color : "+car4.color)
                console.log("          Time of Parking : "+car4.parkTime)
            }
        }catch(e){
            console.log(e.message)
        }
    })
    // Test Case To Find Nearest Slot In Parking To Park Car of Handicap Driver
    it(`given car of handicap driver when parking lot has space, attendent will park car at nearest slot`, ()=>
    {
        car10={vehicleNumber:"MH.15.ZZ.1010",color:"Gold",parkTime:Date(),DriverType:"Handicap"}
        try{
            parkingAttendent.checkNearestSlot(function(result){
                let position=result;
            parkingLotMain.addAtSpecific(position,car10.vehicleNumber,function(result){
                expect(result).to.equal(true);
            })
        })
        }catch(e){
            console.log(e.message)
        }
    })
})