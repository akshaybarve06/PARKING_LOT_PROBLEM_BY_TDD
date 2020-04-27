// Importing 'chai' library and 'Main Class' in code
let assert = require('chai').assert;
let parkingLotMain = require('../modules/ParkingLotMainClass')
let car = new Object();

//Test Cases For Parking Lot System
describe(`Test Cases For Parking Lot System`, () =>
{
    // Test For Add Vehicle in Parking Lot
    it(`given car object when car is parked should return true`, () =>
    {
        let carParkedOrNot= parkingLotMain.isParked(car);
        assert.isTrue(carParkedOrNot);
    })
   // Test For Possiblities To Add Vehicle in Parking Lot
   it(`given car object when invalid and car is not parked should return exception`, () =>
   {
       try{
            let carParkedOrNot= parkingLotMain.isParked(null);
            assert.isTrue(carParkedOrNot);
       }catch(e){
           console.log(e.message);
       }
   })
   // Test For Unpark Car from parking Lot
   it(`given car object when car is unpark then return true`, () =>{
        parkingLotMain.isParked(car);
        let carParkedOrNot= parkingLotMain.isUnparked(car);
        assert.isTrue(carParkedOrNot);
   })
   // Test For Possiblities To Remove Vehicle from Parking Lot
   it(`given car object when invalid or car can't unparked should return exception`, () =>
   {
       try{
            parkingLotMain.isParked(car);
            let carParkedOrNot= parkingLotMain.isUnparked(undefined);
            assert.isTrue(carParkedOrNot);
       }catch(e){
           console.log(e.message);
       }
   })
})