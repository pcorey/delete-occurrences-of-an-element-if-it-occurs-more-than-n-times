import { deleteNth } from "../";
import { expect } from "chai";

describe("deleteNth", function() {

    it("deletes occurrences of an element if it occurs more than n times", function () {
        expect(deleteNth([], 0)).to.deep.equal([]);
        expect(deleteNth([1, 2], 0)).to.deep.equal([]);
    });

});
