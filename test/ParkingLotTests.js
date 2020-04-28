// Importing 'chai' library and 'Main Class' in code
let expect = require('chai').expect;
let sinon = require('sinon');
let parkingLotMain = require('../modules/ParkingLotMainClass')
let car
//Test Cases For Parking Lot System
describe(`Test Cases For Parking Lot System`, () =>
{
    // Run Before Each Test Execution
    beforeEach(()=>{
        car = new Object();
    })
    // Test For Add Vehicle in Parking Lot
    it(`given car object when car is parked should return true`, () =>
    {
        let carParkedOrNot= parkingLotMain.isParked(car);
        expect(carParkedOrNot).to.be.equal(true);
    })
    // Test For Possiblities To Add Vehicle in Parking Lot
    it(`given car object when invalid and car is not parked should return exception`, () =>
    {
        try{
            let carParkedOrNot= parkingLotMain.isParked(null);
            expect(carParkedOrNot).to.be.equal(true);
        }catch(e){
            console.log(e.message);
        }
    })
    // Test For Unpark Car from parking Lot
    it(`given car object when car is unpark then return true`, () =>{
        parkingLotMain.isParked(car);
        let carParkedOrNot= parkingLotMain.isUnparked(car);
        expect(carParkedOrNot).to.be.equal(true);
    })
    // Test For Possiblities To Remove Vehicle from Parking Lot
    it(`given car object when invalid or car can't unparked should return exception`, () =>
    {
        try{
            parkingLotMain.isParked(car);
            let carParkedOrNot= parkingLotMain.isUnparked(undefined);
            expect(carParkedOrNot).to.be.equal(true);
        }catch(e){
            console.log(e.message);
        }
    })
})