// Importing require library 
let expect = require('chai').expect
var assert = require('chai').assert
let sinon = require('sinon')
let parkingLotMain = require('../main/ParkingLotMainClass')
let owner= require('../main/ParkingLotOwner')
let parkingAttendent=require('../main/ParkingAttendant')
let cars=require('../main/Cars')

//Test Cases For Parking Lot System
describe(`Test Cases For Parking Lot System`, () =>
{
    // Run Before Each Test Execution
   beforeEach(()=>{
        sinon.stub(owner,'checkParkingFull');
    })
    afterEach(()=>{
        owner.checkParkingFull.restore();
    })
    // Test For Add Vehicle in Parking Lot
    it(`given car when car is parked should return true`, ()=>
    {       
        try{
            parkingLotMain.isParked(cars.car0,function(returnResult){
                expect(returnResult).to.equal(true);
            }) 
        }catch(e){
            assert.equal(e.message,"Couldn't Park..Invalid Vehicle..")
        }
    })
    // Test For Possiblities To Add Vehicle in Parking Lot
    it(`given car when invalid and car is not parked should return exception`, ()=>
    {
        try{
            parkingLotMain.isParked(null,function(returnResult){
                expect(returnResult).to.equal(true);
            });
        }catch(e){
            assert.equal(e.message,"Could not Park..Invalid Vehicle..")
        }
    })
    // Test For Unpark Car from parking Lot
    it(`given car when car is unpark then return true`, ()=>
    {
        try{
            parkingLotMain.isParked(cars.car1,function(returnResult){
                let carParkedOrNot= parkingLotMain.isUnparked(cars.car1);
                expect(carParkedOrNot).to.equal(true);
            }) 
        }catch(e){
            assert.equal(e.message,"Unparked..[object Object]")
        }  
    })
    // Test For Possiblities To Remove Vehicle from Parking Lot
    it(`given car when invalid or car can't unparked should return exception`, ()=>
    {
        try{
            parkingLotMain.isParked(cars.car2,function(returnResult){
                let carParkedOrNot= parkingLotMain.isUnparked(undefined);
                expect(carParkedOrNot).to.equal(true);
            })
        }catch(e){
            assert.equal(e.message,"Could not Unpark..Invalid Vehicle..")
        }
    })
    // Test For Check The Parking Lot Is Full if Full Notify Owner and Airport
    it(`given car  when park if parking full should return parking full`, ()=>
    {
        let allCars=[cars.car3,cars.car4,cars.car5]
        try{
            allCars.forEach(car =>{
                parkingLotMain.isParked(car,function(returnResult){
                    expect(returnResult).to.equal(true);
                })
            })
        }catch(e){
            assert.equal(e.message,"Notification From Parking Lot : Parking Is Full..!")
        }
    })
    //Test Case To Check Parking Lot Spaces 
    it(`given car when parking lot is not full then show spaces available`, ()=>
    {
        let allCars=[cars.car6,cars.car7,cars.car8]
        try{
            allCars.forEach(car =>{
                parkingLotMain.isParked(car,function(returnResult){
                    let unparkResult=parkingLotMain.isUnparked(allCars.car8)
                        parkingLotMain.consi()
                        expect(unparkResult).to.equal(true);
                    })
            })
        }catch(e){
            assert.equal(e.message,"Could not Unpark..Invalid Vehicle..")
        }
    })  
})

describe(`Test Cases For Parking Lot System With Additional Functions`, () =>
{
     // Test Case To Take Decisions Where To Park Cars
     it(`given car when parking lot has space, attendent will park car`, ()=>
     {
         try{
             parkingAttendent.checkVacentSlot(function(returnResult){
             parkingLotMain.addAtSpecific(returnResult,cars.car9,function(returnResult){
                 expect(returnResult).to.equal(true);
             })
         })
         }catch(e){
             assert.equal(e.message,"Couldn't Add, Remove or Found Specific Vehicle")
         }
     })
     // Test Case To Find Vehicle From Parking Lot
     it(`given car if found in parking lot should return true`, ()=>
     {
         try{
             let returnResult=parkingLotMain.findVehicle(cars.car3);
                 expect(returnResult).to.equal(true);
         }catch(e){
             assert.equal(e.message,"This vehicle is not park here, check credentials again")
         }
     })
     // When Car Parked In Lot Owner Want To Get Details of that vehicle
     it(`given car if park show parking details of that vehicle`, ()=>
     {
         try{
             let returnResult=parkingLotMain.findVehicle(cars.car4);
             expect(returnResult).to.be.equal(true)
         }catch(e){
             assert.equal(e.message,"This vehicle is not park here, check credentials again")
         }
     })
     // Test Case To Find Nearest Slot In Parking To Park Car of Handicap Driver
     it(`given car of handicap driver when parking lot has space, attendent will park car at nearest slot`, ()=>
     {
         try{
             parkingAttendent.checkNearestSlot(function(returnResult){
             parkingLotMain.addAtSpecific(returnResult,cars.car10,function(returnResult){
                 expect(returnResult).to.equal(true);
             })
         })
         }catch(e){
             assert.equal(e.message,"Couldn't Add, Remove or Found Specific Vehicle")
         }
     })
})