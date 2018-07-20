// const account = {

//     name: 'saikat',
//     income: [],
//     expenses: [],
//     addIncome: function (descriptionValue, amountValue) {
//       this.income.push({description: descriptionValue,amount: amountValue})
//     },
//     addExpense: function (descriptionValue, amountValue) {
//       this.expenses.push({description: descriptionValue, amount: amountValue})
//     },
//     getAccountSummary: function () {
//       let sumIncome = 0 ,sumExpense = 0
//       this.income.forEach(function (object, index) {
//         sumIncome = sumIncome + object.amount
//       })
//       this.expenses.forEach(function (object, index) {
//         sumExpense = sumExpense + object.amount
//       })
//       return `${this.name} has a balance of ₹${sumIncome - sumExpense}. ₹${sumIncome} in income. ₹${sumExpense} in expense.`
//     }

// }

// account.addIncome('1 Month', 1000)

// account.addExpense('Rent', 950)
// account.addExpense('Coffee', 2)
// account.addExpense('dinner', 21)

// console.log(account.income)
// console.log(account.expenses)

// console.log(account.getAccountSummary())