class SavingsAccount extends BankAccount{
    constructor(number,interest) {
    super(number);
    this.interest = interest;
    }
setInterest(interest){
 return this.interest = interest;
}
getInterest(){
 return this.interest;
}
addInterest(){
        let interestAmount = ((this.getBalance() * this.getInterest())/100);
        this._balance = this.getBalance() + interestAmount;
        return interestAmount;
    }

    toString() {
        return "Account " + this._number + ": balance " + this.getBalance() + " Intereset " + this.interest;
    }

    endMonth(){
        console.log("The amount of interest added to this saving account is - " + this.addInterest())
    }

    endOfMonth(){
      super.endOfMonth();
      this.endMonth()
    }
}

let test = new SavingsAccount(2001,15);
test.deposit(400);
test.addInterest();
console.log(test.toString());
