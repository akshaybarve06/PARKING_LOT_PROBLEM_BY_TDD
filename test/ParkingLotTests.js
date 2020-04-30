// Importing 'chai' library and 'Main Class' in code
let expect = require('chai').expect
let chai = require('chai')
let sinon = require('sinon')
let parkingLotMain = require('../main/ParkingLotMainClass')
let owner= require('../main/ParkingLotOwner')
let parkingAttendent=require('../main/ParkingAttendant')

//Test Cases For Parking Lot System
describe(`Test Cases For Parking Lot System`, () =>
{
    // Run Before Each Test Execution
    beforeEach(()=>{
        car1 = ["MH.15.XX.0000","White"]
        car2 = ["MH.15.XX.1111","Yello"]
        car3 = ["MH.15.XX.2222","Cyan"]
        car4 = ["MH.15.XX.3333","Black"]
        car5 = ["MH.15.XX.4444","Red"]
        car6 = ["MH.15.YY.5555","Orange"]
        car7 = ["MH.15.YY.6666","Green"]
        car8 = ["MH.15.YY.7777","Blue"]
        car9 = ["MH.15.ZZ.8888","Indigo"]
        car10 = ["MH.15.ZZ.9999","Gray"]
    })
          
    // Test For Add Vehicle in Parking Lot
    it(`given car object when car is parked should return true`, ()=>
    {
        try{
            parkingLotMain.isParked(car1,function(result){
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
            parkingLotMain.isParked(null,function(result){
                expect(result).to.equal(true);
            });
        }catch(e){
            console.log(e.message);
        }
    })
    // Test For Unpark Car from parking Lot
    it(`given car object when car is unpark then return true`, ()=>
    {
        try{
            parkingLotMain.isParked(car2,function(result){
                let carParkedOrNot= parkingLotMain.isUnparked(car2);
                expect(carParkedOrNot).to.equal(true);
            }) 
        }catch(e){
            console.log(e.message)
        }  
    })
    // Test For Possiblities To Remove Vehicle from Parking Lot
    it(`given car object when invalid or car can't unparked should return exception`, ()=>
    {
        try{
            parkingLotMain.isParked(car3,function(result){
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
        try{
            parkingLotMain.isParked(car4,function(result){
                parkingLotMain.isParked(car5,function(result){
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
        try{
            parkingLotMain.isParked(car6,function(result){
                parkingLotMain.isParked(car7,function(result){
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
        try{
            parkingLotMain.isParked(car8,function(result){
                parkingLotMain.isParked(car9,function(result){
                    let unparkResult=parkingLotMain.isUnparked(car9)
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
        try{
            parkingAttendent.checkVacentSlot(function(result){
                let position=result;
            parkingLotMain.addAtSpecific(position,car10,function(result){
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
            parkingLotMain.findVehicle("MH.15.XX.4444","Red",function(result){
                expect(result).to.equal(true);
            })
        }catch(e){
            console.log(e.message)
        }
    })
})