import chai from "chai"
import isDate from "../src/isDate.js"
const expect = chai.expect

describe("isDate", () =>{
    it("Is a new date date?", () =>{
        var result = isDate(new Date);
        expect(result).to.be.a('boolean')
        expect(result).to.equal(true);
    });
    it("Wrong format", ()=>{
        var result = isDate("Mon January 23 2022");
        expect(result).to.equal(false);
    });
    it("Date parts", ()=>{
        const date = new Date("2023-05-05T20:17:12");
        expect(date.getDate()).to.equal(5);
        //Month is zero indexed
        expect(date.getMonth()).to.equal(4);
        expect(date.getFullYear()).to.equal(2023);
    })
});