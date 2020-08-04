class Bank{

    Accounts = [];
    static nextNumber = 1000;

    addAccount(){
        let account1 = new BankAccount(Bank.nextNumber);
        this.Accounts.push(account1);
        Bank.nextNumber++;
    }

    addSavingAccount(interest){
        let savingAccount1 = new SavingsAccount(Bank.nextNumber,10);
        this.Accounts.push(savingAccount1);
        Bank.nextNumber++;
    }

    addCheckingAccount(overdraft){
       let checkingAccount1 = new CheckingAccount(Bank.nextNumber,overdraft);
        this.Accounts.push(checkingAccount1);
        Bank.nextNumber++;
    }

    closeAccount(Accountnumber){
        for(let n in this.Accounts){
            if(Accountnumber === n.getNumber()){
                this.Accounts = this.Accounts( (acts) => {
                    return acts !== n;
                })
            }
        }
    }

    accountReport(){
        for(let n in this.Accounts){
            console.log(n);
        }
    }

    endOfMonth() {
        for (let n in this.Accounts){
            console.log();
        }
    }
}

let bank1 = new Bank();
bank1.addAccount();
bank1.addSavingAccount(10);
bank1.addCheckingAccount(100);

bank1.accountReport();
bank1.endOfMonth();