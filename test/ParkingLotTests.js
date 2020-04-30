// Importing 'chai' library and 'Main Class' in code
let expect = require('chai').expect
let chai = require('chai')
let sinon = require('sinon')
let parkingLotMain = require('../main/ParkingLotMainClass')
let owner= require('../main/ParkingLotOwner')
let parkingAttendent=require('../main/ParkingAttendant')
let car1,car2,car3,car4,car5,car6,car7,car8,car9,car10;

//Test Cases For Parking Lot System
describe(`Test Cases For Parking Lot System`, () =>
{
    // Run Before Each Test Execution
    beforeEach(()=>{

    })
          
    // Test For Add Vehicle in Parking Lot
    it(`given car object when car is parked should return true`, ()=>
    {
        car1={vehicleNumber:"MH.15.XX.0000",color:"White"}
        try{
            parkingLotMain.isParked(car1.vehicleNumber,function(result){
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
        car2={vehicleNumber:"MH.15.XX.1111",color:"Yello"}
        try{
            parkingLotMain.isParked(car2.vehicleNumber,function(result){
                let carParkedOrNot= parkingLotMain.isUnparked(car2.vehicleNumber);
                expect(carParkedOrNot).to.equal(true);
            }) 
        }catch(e){
            console.log(e.message)
        }  
    })
    // Test For Possiblities To Remove Vehicle from Parking Lot
    it(`given car object when invalid or car can't unparked should return exception`, ()=>
    {
        car3={vehicleNumber:"MH.15.XX.2222",color:"Cyan"}
        try{
            parkingLotMain.isParked(car3.vehicleNumber,function(result){
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
        car4={vehicleNumber:"MH.15.XX.3333",color:"Black"}
        car5={vehicleNumber:"MH.15.XX.4444",color:"Red"}
        try{
            parkingLotMain.isParked(car4.vehicleNumber,function(result){
                parkingLotMain.isParked(car5.vehicleNumber,function(result){
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
        car6={vehicleNumber:"MH.15.YY.5555",color:"Orange"}
        car7={vehicleNumber:"MH.15.YY.6666",color:"Green"}
        try{
            parkingLotMain.isParked(car6.vehicleNumber,function(result){
                parkingLotMain.isParked(car7.vehicleNumber,function(result){
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
        car8={vehicleNumber:"MH.15.YY.7777",color:"Blue"}
        car9={vehicleNumber:"MH.15.ZZ.8888",color:"Indigo"}
        try{
            parkingLotMain.isParked(car8.vehicleNumber,function(result){
                parkingLotMain.isParked(car9.vehicleNumber,function(result){
                    let unparkResult=parkingLotMain.isUnparked(car9.vehicleNumber)
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
        car10={vehicleNumber:"MH.15.ZZ.9999",color:"Gray"}
        try{
            parkingAttendent.checkVacentSlot(function(result){
                let position=result;
            parkingLotMain.addAtSpecific(position,car10.vehicleNumber,function(result){
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
            let result=parkingLotMain.findVehicle(car1.vehicleNumber);
                //expect(result).to.equal(true);
                console.log("Found Vehicle at slot.."+result)
        }catch(e){
            console.log(e.message)
        }
    })
})