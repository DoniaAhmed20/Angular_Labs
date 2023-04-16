class Account {
    Acc_no: number;
    Balance: number;
  
    constructor(Acc_no = 0, Balance = 0) {
      this.Acc_no = Acc_no;
      this.Balance = Balance;
    }
  
    debitAmount() {

    }
    creditAmount() {

    }
    getBalance() {

    }
  }
  
  interface IAccount {
    Date_of_opening: Date;
  
    addCustomer();
    removeCustomer();
  }
  
  class Current_Account extends Account implements IAccount {
    Interest_rate: number;
    Date_of_opening: Date;
    constructor(Acc_no = 0, Balance = 0, Interest_rate = 0) {
      super(Acc_no, Balance);
      this.Interest_rate = Interest_rate;
    }
    addCustomer() {
      
    }
    removeCustomer() {
      
    }
  }
  
  class Saving_Account extends Account implements IAccount {
    Min_Balance: number;
    Date_of_opening: Date;
    constructor(Acc_no = 0, Balance = 0, Min_Balance = 0) {
      super(Acc_no, Balance);
      this.Min_Balance = Min_Balance;
    }
    
    addCustomer() {
    
    }
    removeCustomer() {
    
    }
  }