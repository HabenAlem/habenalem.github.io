describe('Bubble Sort', function () {
    it('should return Sorted List', function () {
        chai.expect(bubbleSort([3, 0, 2, 5, -1, 4, 1]))
    });
});

describe('Filter banned word', function () {
    it('banned string must match sample string', function () {
        chai.expect("Hello bad boy".filter(" bad").trim()).to.equal("Hello boy");
    });
});
