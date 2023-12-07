import chai from "chai";
import add from "../src/add.js";
const expect = chai.expect;

describe("Add", () => {
    const A = 2;
    const B = 3;
    const C = 5;
    const D = -2;
    it("Two numbers equal", () => {
        var result = add(A,B);
        expect(result).to.equal(A+B);
    });
    it("Negative and positive numbers equal", () => {
        var result = add(D,C);
        expect(result).to.equal(B);
    });
    it("Two negative numbers equal", () => {
        var result = add(D,D);
        expect(result).to.equal(-4);
    });
});
