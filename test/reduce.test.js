import chai from "chai"
import reduce from "../src/reduce.js"
const expect = chai.expect

describe("Reduce", ()=>{

    it("reduce sum",()=>{
        var arr = [1,2,3,4,5];
        var result = reduce(arr,(sum, n)=>sum + n, 0);
        expect(result).to.be.a("number");
        expect(result).to.equal(15);
    })
})