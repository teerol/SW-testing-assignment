import chai from "chai"
import divide from "../src/divide.js"
const expect = chai.expect

describe("Divide", () =>{
    //it("division of two integers with remainder", () =>{
    //    var result = divide(6,4);
    //    expect(result).to.equal(3/2);
    //});
    //it("Division of two integers without remainder", () =>{
    //    var result = divide(9,3);
    //    expect(result).to.eql(3);
    //});
    it("Division with zero", () =>{
        var result = divide(5,0);
        expect(result).to.eql(NaN);
    })
    //it("Divide zero with", () =>{
    //    var result = divide(0,5);
    //    expect(result).to.equal(0);
    //})

});