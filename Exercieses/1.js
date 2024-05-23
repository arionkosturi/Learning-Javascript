const atm = {
  shuma: 500,
  deposit: function (a){
    this.shuma += a;
  },
  withdraw: function(a) {
    this.shuma -= a;

  }
}

atm.deposit(100);
atm.withdraw(200);
console.log(atm.amount);
