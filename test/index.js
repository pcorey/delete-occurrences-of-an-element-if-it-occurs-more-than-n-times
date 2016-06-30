import { deleteNth } from "../";
import { expect } from "chai";

describe("deleteNth", function() {

    it("deletes occurrences of an element if it occurs more than n times", function () {
        expect(deleteNth([], 0)).to.deep.equal([]);
        expect(deleteNth([1, 2], 0)).to.deep.equal([]);

        expect(deleteNth([1, 2], 1)).to.deep.equal([1, 2]);
        expect(deleteNth([1, 1, 2], 1)).to.deep.equal([1, 2]);

        expect(deleteNth([20, 37, 20, 21], 1)).to.deep.equal([20, 37, 21]);
        expect(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)).to.deep.equal([1, 1, 3, 3, 7, 2, 2, 2]);
    });

});
