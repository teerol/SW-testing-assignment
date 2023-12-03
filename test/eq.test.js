import chai from "chai"
import eq from "../src/eq.js"
const expect = chai.expect

describe("Equals", () => {
    const object = { 'a': 1 };
    const other = { 'a': 1 };
    it("2 objects equal", () =>{
        expect(eq(object, other)).to.equal(false);
    });
    it("self equal", () => {
        expect(eq(object,object)).to.equal(true);
    });
    it("2 numbers", () => {
        expect(eq(2,"2")).to.equal(true);
    });
    it("Nans", () => {
        expect(eq(NaN, NaN)).to.equal(true);
    });
});