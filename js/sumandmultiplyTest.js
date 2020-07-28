describe('Sum numbers', function () {
    it('should return sum of arguments', function () {
        chai.expect(arraySum([1,2,3,4])).to.equal(10);
    });
});

describe('Multiply numbers', function () {
    it('should return the product of arguments', function () {
        chai.expect(arrayMultiply([1,2,3])).to.equal(6);
    });
});

describe('Reverese a String', function () {
    it('reversed string must match sample string', function () {
        chai.expect(reverse("haben")).to.equal("nebah");
    });
});

describe('filter words longer than 3', function () {
    it('new filtered array must match given array', function () {
        chai.expect(filterLongWords(["hello","hi","bye","good","bad"],3)).to.eql(["hello","good"]);
    });
});