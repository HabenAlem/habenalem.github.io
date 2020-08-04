class CheckingAccount extends BankAccount{

    constructor(number,overdraftLimit ) {
        super(number);
        this._overdraftLimit =  overdraftLimit;
    }

    setOverdraftLimit(value) {
        this._overdraftLimit = value;
    }

    setBalance(amount){
        this._balance = amount;
    }

    getOverdraftLimit() {
        return this._overdraftLimit;
    }
    overdraft(amount){
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        else if (amount > this._balance) {
            let negativeAmount = amount-this.getBalance();
            console.log(negativeAmount)
            if( negativeAmount > this.getOverdraftLimit()){
                throw Error("Insufficient funds");
            }
            else{
                console.log("here")
                console.log(amount)
                let newBalance = this.getBalance() - amount;
                console.log(newBalance)
                this._balance = newBalance;
            }
        }
        this._balance -= amount;
    }
    withdraw(amount){
        super.withdraw();
        this.overdraft();
    }
    toString() {
        return "Account " + this.getNumber() + ": balance " + this._balance + " overdraftLimit " + this._overdraftLimit;
    }

    endMonth(){
       if(this.getBalance()<0){
           alert("Your account balance is very low please deposit immediately");
       }
    }

    endOfMonth(){
        super.endOfMonth();
        this.endMonth()
    }
}
let test2 = new CheckingAccount(3001,100);
test2.deposit(2000);
test2.overdraft(2050);
console.log(test2.toString())

