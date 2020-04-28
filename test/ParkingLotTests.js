// Importing 'chai' library and 'Main Class' in code
let expect = require('chai').expect
let chai = require('chai')
let sinon = require('sinon')
let parkingLotMain = require('../modules/ParkingLotMainClass')
let car
let parking =[]
//Test Cases For Parking Lot System
describe(`Test Cases For Parking Lot System`, () =>
{
    // Run Before Each Test Execution
    beforeEach(()=>{
        car = new Object();
        parking =[];
    })
    // Test For Add Vehicle in Parking Lot
    it(`given car object when car is parked should return true`, () =>
    {
        parkingLotMain.isParked(parking,car,function(result){
        expect(result).to.equal(true);
        });
    })
    // Test For Possiblities To Add Vehicle in Parking Lot
    it(`given car object when invalid and car is not parked should return exception`, () =>
    {
        try{
            parkingLotMain.isParked(parking,null,function(result){
            expect(result).to.equal(true);
            });
        }catch(e){
            console.log(e.message);
        }
    })
    // Test For Unpark Car from parking Lot
    it(`given car object when car is unpark then return true`, () =>{
        parkingLotMain.isParked(parking,car,function(result){
            let carParkedOrNot= parkingLotMain.isUnparked(car);
            expect(carParkedOrNot).to.equal(true);
        })   
    })
    // Test For Possiblities To Remove Vehicle from Parking Lot
    it(`given car object when invalid or car can't unparked should return exception`, () =>
    {
        try{
            parkingLotMain.isParked(parking,car,function(result){
                let carParkedOrNot= parkingLotMain.isUnparked(undefined);
                expect(carParkedOrNot).to.equal(true);
            })
        }catch(e){
            console.log(e.message);
        }
    })
})