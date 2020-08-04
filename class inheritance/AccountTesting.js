describe('Bank Account deposit', function () {
    let bank1 = new BankAccount(1001);
    bank1.deposit(2000);
    it('balance should match deposited one', function () {
        chai.expect(bank1.getBalance()).to.equal(2000);
    });
});

describe('Bank Account Withdraw', function () {
    let bank1 = new BankAccount(1001);
    bank1.deposit(2000);
    bank1.withdraw(1000)
    it('amount should reflect withdrawn amount', function () {
        chai.expect(bank1.getBalance()).to.equal(1000);
    });
});

describe('Savings Account adding interest to balance', function () {
    let bank1 = new SavingsAccount(1001,15);
    bank1.deposit(400);
    bank1.addInterest();
    it('amount should reflect balance plus added interest', function () {
        chai.expect(bank1.getBalance()).to.equal(460);
    });
});