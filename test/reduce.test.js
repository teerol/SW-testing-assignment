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
    it("reduce string list", ()=>{
        var result  = reduce(['a', 'b', 'c'], (result, s)=>{result+=s;
        return result;}, "");
        expect(result).to.be.a("string");
        expect(result).to.equal("abc"); 
    })
    it("reduce map", ()=>{
        var result  = reduce({'a':1, 'b':1, 'c':1}, (result, value)=>{result+=value;
        return result;}, 0);
        expect(result).to.be.a("number");
        expect(result).to.equal(3); 
    })
})