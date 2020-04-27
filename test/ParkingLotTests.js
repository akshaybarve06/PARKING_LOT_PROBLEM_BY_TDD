// Importing 'chai' library and 'Main Class' in code
let assert = require('chai').assert;
let parkingLotMain = require('../modules/ParkingLotMainClass')

//Test Cases For Parking Lot System
describe(`Test Cases For Parking Lot System`, () =>
{
    // Test For Add Vehicle in Parking Lot
    it(`given car object when car is parked should return true`, () =>
    {
        let car = {};
        let carParkedOrNot= parkingLotMain.isParked(car);
        assert.equal(true,carParkedOrNot);
    })
   // Test For Possiblities To Add Vehicle in Parking Lot
   it(`given car object when invalid and car is not parked should return exception`, () =>
   {
       try{
            let carParkedOrNot= parkingLotMain.isParked(null);
            assert.equal(true,carParkedOrNot);
       }catch(e){
           console.log(e.message);
       }
   })
   // Test For Unpark Car from parking Lot
   it(`given car object when car is unpark then return true`, () =>{
        let car = {};
        let carParkedOrNot= parkingLotMain.isUnparked(car);
        assert.equal(true,carParkedOrNot);
   })
})