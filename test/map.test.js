import chai from "chai"
import map from "../src/map.js"
const expect = chai.expect

describe("Map", () =>{
    function sale(n){
        return n-5
    }
    function toInt(n){
        return parseInt(n)
    }

    it("mapping str to int", ()=>{
        var arr = ["23","45","12"];
        var result = map(arr,toInt);
        expect(result).to.be.a("array");
        expect(result).to.eql([23,45,12]);
    })
    it("mapping a discount", () =>{
        var arr = [24,45,17];
        var result = map(arr, sale);
        expect(result).to.be.a("array");
        expect(result).to.eql([19,40,12]);
    });
    it("mapping an integer",()=>{
        var result = map(10, sale);
        expect(result).to.be.a("array");
        expect(result).to.eql([undefined]);
    });
});