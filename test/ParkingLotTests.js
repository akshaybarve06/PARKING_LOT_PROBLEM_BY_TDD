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
    it(`given car object when car is parked should return true`, ()=>
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
    it(`given car object when it is invalid and car is not parked should return exception`, ()=>
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
    it(`given car object when car is unpark from lot should return true`, ()=>
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
    it(`given car object when invalid or car can't unparked should return exception`, ()=>
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
    it(`given car object when park if parking full should return parking full`, ()=>
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
})

describe(`Test Cases For Parking Lot System With Additional Functions`, () =>
{
    //Test Case To Check Parking Lot Spaces 
    it(`given car object when parking lot is not full on unpark return unpark space`, ()=>
    {
        let allCars=[cars.car6,cars.car7,cars.car8]
        try{
            allCars.forEach(car =>{
                parkingLotMain.isParked(car,function(returnResult){
                    let unparkResult=parkingLotMain.isUnparked(allCars.car8)
                        expect(unparkResult).to.equal(true);
                    })
            })
        }catch(e){
            assert.equal(e.message,"Could not Unpark..Invalid Vehicle..")
        }
    })  
     // Test Case To Take Decisions Where To Park Cars
     it(`given car object when parking lot has space attendent check vacent slot and park car`, ()=>
     {
         try{
             parkingAttendent.checkVacentSlot(function(returnResult){
             parkingLotMain.addAtSpecific(returnResult,cars.car9,function(returnResult){
                 expect(returnResult).to.equal(true);
             })
         })
         }catch(e){
             assert.equal(e.message,"Couldn't Find Specific Slot")
         }
     })
     // Test Case To Find Vehicle From Parking Lot
     it(`given car object when found in parking lot should return true`, ()=>
     {
         try{
             let returnResult=parkingLotMain.findVehicle(cars.car6);
                 expect(returnResult).to.equal(true);
         }catch(e){
             assert.equal(e.message,"This vehicle is not park here, check credentials again")
         }
     })
     // When Car Parked In Lot Owner Want To Get Details of that vehicle
     it(`given car object if park show parking time of vehicle should return true`, ()=>
     {
         try{
             let returnResult=parkingLotMain.findVehicle(cars.car9);
             expect(returnResult).to.be.equal(true)
         }catch(e){
             assert.equal(e.message,"This vehicle is not park here, check credentials again")
         }
     })
     // Test Case To Find Nearest Slot In Parking To Park Car of Handicap Driver
     it(`given car object of handicap driver when parking lot has space, attendent will park car at nearest slot return true`, ()=>
     {
         try{
             parkingAttendent.checkNearestSlot(function(returnResult){
             parkingLotMain.addAtSpecific(returnResult,cars.car10,function(returnResult){
                 expect(returnResult).to.equal(true);
             })
         })
         }catch(e){
             assert.equal(e.message,"Couldn't Find Specific Slot")
         }
     })
    // Test Case To Check if Vehicle is Large then it will find Largest slot and park in that
    it(`given car object when car is large,attendent will park car at largest slot`, ()=>
    {
        try{
            parkingLotMain.isParked(cars.car11,function(returnResult){
                expect(returnResult).to.equal(true);
            })
        }catch(e){
            assert.equal(e.message,"Couldn't find Largest Slot")
        }
    })
})

describe(`Test Cases For Parking Lot System For Finding Car In Parking Lot`, () =>
{
    // Test Case To Find Cars of White Color In Parking Lot To Detect Bomb
    it(`given car object of white color car when in parking match shoult return true`,()=>
    {
        let findVehicle={
            "color" : 'White',
        }
        try{
            parkingLotMain.findCarByEntity(findVehicle,function(returnResult){
                expect(returnResult).to.equal(true)
            })
        }catch(e){
            assert.equal(e.message,"No Such Car Parked Here")
        }
    })
    // Test Case To Find Blue Toyota Cars
    it(`given car object when police want park car information should return true`,()=>
    {
        let allCars=[cars.car12,cars.car13,cars.car14,cars.car15,cars.car16]
        let findVehicle={
            "color" : 'Blue',
            "brand" : 'Toyota'
        }
        try{
            allCars.forEach(car =>{
            parkingLotMain.isParked(car,function(returnResult){
                parkingLotMain.findCarByEntity(findVehicle,function(findResult){
                    expect(findResult).to.equal(true);
                })
            })})
        }catch(e){
            assert.equal(e.message,"No Such Car Parked Here")
        }
    })
    // Test Case To Find All BMW Cars From Parking Lot
    it(`given car object of BMW cars when all cars found should return true`,()=>
    {
        let findVehicle={
            "brand" : 'BMW'
        }
        try{
            parkingLotMain.findCarByEntity(findVehicle,function(returnResult){
                expect(returnResult).to.equal(true);
            })
        }catch(e){
            assert.equal(e.message,"No Such Car Parked Here")
        }
    })
    // Test Case To Find Cars Which are parked 30 Minutes before, To Detect Bomb Threat
    it(`given car object when car found parked before 30 mins should return true`, () =>{
        try{
            parkingLotMain.findCarByTime('30',function(returnResult){
                expect(returnResult).to.equal(true);
            })
        }catch(e){
            assert.equal(e.message,"No Such Car Parked Here")
        }
    })
})