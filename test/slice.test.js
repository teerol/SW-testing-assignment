import chai from "chai"
import slice from "../src/slice.js"
const expect = chai.expect

describe("Test slice", () => {
    const arr = [1, 2, 3, 4, 6]
    it("no params", () =>{
        const result = slice(arr);
        expect(result).to.have.length(arr.length);
        expect(result).to.have.deep.members(arr);        
    });
    it("positive params", () =>{
      const result = slice(arr,1,3);
      expect(result).to.have.length(2);
      expect(result).to.have.deep.members([2,3]);        
  });
    it("negative params", () =>{
      const result = slice(arr,-3,-1);
      expect(result).to.have.length(2);
      expect(result).to.have.deep.members([3,4]);
      const result2 = slice(arr,-10,-4);
      expect(result2).to.have.length(1);
      expect(result2).to.have.deep.members([1]);
  });
    it("pos and neg params", () =>{
      const result = slice(arr,3,-1);
      expect(result).to.have.length(1);
      expect(result).to.have.deep.members([4]);
      const result2 = slice(arr,-3,5);
      expect(result2).to.have.length(3);
      expect(result2).to.have.deep.members([3,4,6]);
  });
    it("empty array", () =>{
      expect(slice([])).to.have.length(0);
      expect(slice([])).to.be.empty;
      expect(slice(null)).to.be.empty;
      expect(slice(arr,10,1)).to.be.empty;
  });
});