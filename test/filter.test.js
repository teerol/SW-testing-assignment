import chai from "chai"
import filter from "../src/filter.js"
const expect = chai.expect

describe("Filter", () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
    ]
    it("bool filter", () =>{
        const result = filter(users, ({ active }) => active);
        expect(result).to.have.length(1);
        expect(result[0].user).to.equal("barney");
    });
    // it("empty array", () =>{
    //     const result = filter(null, ({ active }) => active);
    //     expect(result).to.be.empty();
    // });
});