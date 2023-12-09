import chai from "chai"
import filter from "../src/toInteger.js"
import toInteger from "../src/toInteger.js";
const expect = chai.expect

describe("Test toInteger", () => {
    
    it("floats", () =>{
        expect(toInteger(3.2)).to.be.equal(3);
        expect(toInteger(-3.9)).to.be.equal(-3);
    });
    it("integers", () =>{
        expect(toInteger(10)).to.be.equal(10);
        expect(toInteger(0)).to.be.equal(0);
        expect(toInteger(-20)).to.be.equal(-20);
    });
    it("bool", () =>{
        expect(toInteger(true)).to.be.equal(1);
        expect(toInteger(false)).to.be.equal(0);
    });
    it("Infinity", () =>{
        expect(toInteger(Infinity)).to.be.equal(1.7976931348623157e+308);
        expect(toInteger(-Infinity)).to.be.equal(-1.7976931348623157e+308);
    });
    it("str", () =>{
        expect(toInteger("3")).to.be.equal(3);
        expect(toInteger("-102.2221")).to.be.equal(-102);
        expect(toInteger("sdc")).to.be.equal(0);
    });
    it("sequence", () =>{
        expect(toInteger({"2":3})).to.be.equal(0);
        expect(toInteger([2,13])).to.be.equal(0);
    });
});