import chai from "chai"
import words from "../src/words.js"
const expect = chai.expect

describe("Test words", () => {
    const str = 'fred, barney, & pebbles';
    it("base case", () =>{
        const result = words(str);
        expect(result).to.have.length(3);
        expect(result).to.have.deep.members(['fred', 'barney', 'pebbles'])
    });
    it("simple regex", () =>{
      const result = words(str,/[^, ]+/g);
      expect(result).to.have.length(4);
      expect(result).to.have.deep.members(['fred', 'barney', '&','pebbles'])
    });
    it("ascii string", () =>{
      const result = words("fred barney pebbles");
      expect(result).to.have.length(3);
      expect(result).to.have.deep.members(['fred', 'barney', 'pebbles'])
    });
    it("empty output", () =>{
      expect(words("")).to.be.empty
      expect(words("",/[^, ]+/g)).to.be.empty
    });
});