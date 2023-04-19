// const balance = document.getElementById("cash-balance");


//Dodaje value z inputow przychodow


// const addIncome = () => {
//   const incomeTitleValue = nameIncomeInput.value;
//   const incomeAmountValue = amountIncomeInput.value;

//   if (incomeTitleValue && incomeAmountValue) {
//     const position = {
//       id: lastIdIncome + 1,
//       description: incomeTitleValue,
//       amount: +incomeAmountValue,
//     };
//     incomArray.push(position);
//     addIncomeLlst(position);
//     lastIdIncome++;
//     nameIncomeInput.value = "";
//     amountIncomeInput.value = "";
//     nameIncomeInput.style.borderColor = "";
//     amountIncomeInput.style.borderColor = "";
//   } else {
//     if (!incomeTitleValue) nameIncomeInput.style.borderColor = "red";

//     if (!incomeAmountValue) amountIncomeInput.style.borderColor = "red";
//   }

//   sumIncome();
// };

// addIncome(); 
// BUTTON_INCOME.addEventListener("click", addIncome);


// addIncomeList(); 


// Tworzy i dodaje nowy element li do listy przychodow


//  const addIncomeList = (position) => {
//     console.log(position); 
//   const li = document.createElement("li");
//   li.id = `income_${position.id}`;


//   li.innerHTML = `${position.description} - ${Math.abs(position.amount)} zł
//           <div> <button id="buttonEditIncome" onclick = "correctIncomePosition(${
//             position.id
//           })">Edytuj</button>
//           <button id="deleteIncome" onclick="deleteInc(${
//             position.id
//           })">Usun</button></div>`;
//   LIST_INCOME.appendChild(li);
//   li.classList.add("flex");
// };

// addIncomeList();

// Sumuje amount z tablicy przychodow


// const sumIncome = () => {
//   let resultIncome = incomArray.reduce((prev, next) => prev + next.amount, 0);
//   document.getElementById(
//     "total-income-sum"
//   ).innerHTML = `<p>Suma przychodów: ${resultIncome} zł</p>`;
//   totalIncome = resultIncome;
//   availableFunds();

//   if (incomArray.length === 0) {
//     document.querySelector("#total-income-sum").innerHTML = "";
//     return;
//   }
// };

// sumIncome(); 




//Usuwa element li o konkretnym id z listy przychodow

// const deleteInc = (id) => {
//   incomArray = incomArray.filter((v) => v.id !== id);
//   document.querySelector(`li#income_${id}`).remove();
//   sumIncome();
// };



// Daje mozliwosc wprowadzenia nowych danych do elementu li 

// const correctIncomePosition = (id) => {

//   document.querySelector(
//     `li#income_${id}`
//   ).innerHTML = `_ _ - _ _ zł<div style="display: flex"> <button id="buttonConfirmIncome" onclick = "confirmIncomePosition(${id})">Potwierdzić</button> <button id="butttonCancelIncome" onclick="cancelConfirmIncome(${id})">Anuluj</button></div>`;
// };

// correctIncomePosition(); 




// Anuluje edytowanie danych w przychodach

// const cancelConfirmIncome = (id)=>{
//    incomArray.map(item =>{
//     if(item.id === id){
//        document.querySelector(
//     `li#income_${item.id}`
//   ).innerHTML = `${item.description} - ${Math.abs(item.amount)} zł
//   <div> <button id="buttonEditIncome" onclick = "correctIncomePosition(${
//     item.id
//   })">Edytuj</button>
//   <button id="deleteIncome" onclick="deleteInc(${
//     item.id
//   })">Usun</button></div>`;
//     }})
// };

// cancelConfirmIncome(); 







//Podtwierdzenia nowych danych 

// const confirmIncomePosition = (id) => {
//   const newExpenseTitleValue = nameIncomeInput.value;
//   const newIncomeAmountValue = +amountIncomeInput.value;

//   let editedIncomeArray = [];

//   nameIncomeInput.style.borderColor = "";
//   amountIncomeInput.style.borderColor = "";

//   if (!newExpenseTitleValue || !newIncomeAmountValue) {
//     nameIncomeInput.style.borderColor = "red";
//     amountIncomeInput.style.borderColor = "red";
//     return;
//   } else {
//     const newPosition = {
//       id: id,
//       description: newExpenseTitleValue,
//       amount: +newIncomeAmountValue,
//     };
//     editedIncomeArray.push(newPosition);
//     document.querySelector(
//       `li#income_${id}`
//     ).innerHTML = `${newExpenseTitleValue} - ${Math.abs(
//       newIncomeAmountValue
//     )} zł<div> <button id="buttonEditIncome" onclick = "correctIncomePosition(${id})">Edytuj</button> <button id="deleteIncome" onclick="deleteInc(${id})">Usun</button></div>`;
//   }

//   nameIncomeInput.value = "";
//   amountIncomeInput.value = "";

//   incomArray = incomArray.map((x) => {
//     const item = editedIncomeArray.find(({ id }) => id === x.id);
//     return item ? item : x;
//   });
//   sumIncome();
// };



// confirmIncomePosition(); 

//Dodaje value z inputow wydatkow

// const addExpenses = () => {
//   const expensesTitleValue = nameExpensesInput.value;
//   const expensesAmountValue = amountExpensesInput.value;

//   if (expensesTitleValue && expensesAmountValue) {
//     const position = {
//       id: lastIdExpenses + 1,
//       description: expensesTitleValue,
//       amount: +expensesAmountValue,
//     };
//     expensesArray.push(position);
//     addExpensesList(position);
//     lastIdExpenses++;
//     nameExpensesInput.value = "";
//     amountExpensesInput.value = "";
//     nameExpensesInput.style.borderColor = "";
//     amountExpensesInput.style.borderColor = "";
//   } else {
//     if (!expensesTitleValue) nameExpensesInput.style.borderColor = "red";

//     if (!expensesAmountValue) amountExpensesInput.style.borderColor = "red";
//   }

//   sumExpenses();
// };


// BUTTON_EXPENSES.addEventListener("click", addExpenses);
// addExpenses(); 

// Tworzy i dodaje nowy element li do listy wydatkow


// const addExpensesList = (position) => {
//   const li = document.createElement("li");
//   li.id = `expenses_${position.id}`;
//   li.innerHTML = `${position.description} - ${Math.abs(position.amount)} zł
//           <div> <button id = "buttonEditExpense" onclick = "correctExpensePosition(${
//             position.id
//           })">Edytuj</button> <button id="deleteExpenses" onclick="deleteExp(${
//     position.id
//   })">Usun</button></div>`;
//   LIST_EXPENSES.appendChild(li);
//   li.classList.add("flex");
// };


// addExpensesList(); 

// Sumuje amount z tablicy wydatkow 

// const sumExpenses = () => {
//   let resultExpenses = expensesArray.reduce(
//     (prev, next) => prev + next.amount,
//     0
//   );
//   document.getElementById(
//     "total-expenses-sum"
//   ).innerHTML = `<p>Suma wydatków: ${resultExpenses} zł</p>`;
//   totalExpense = resultExpenses;
//   availableFunds();

//   if (expensesArray.length === 0) {
//     document.querySelector("#total-expenses-sum").innerHTML = "";
//     return;
//   }
// };


//Usuwa element li o konkretnym id listy wydatkow

// const deleteExp = (id) => {
//   expensesArray = expensesArray.filter((v) => v.id !== id);
//   document.querySelector(`li#expenses_${id}`).remove();
//   sumExpenses();
// };

// deleteExp(); 


// Daje mozliwosc wprowadzenia nowych danych do elementu li z listy wydatkow 

// const correctExpensePosition = (id) => {
//   document.querySelector(
//     `li#expenses_${id}`
//   ).innerHTML = `_ _ - _ _ zł<div style="display: flex"> <button id="buttonConfirmExpense" onclick = "confirmExpensePosition(${id})">Potwierdzić</button> <button id="butttonCancelIncome" onclick="cancelConfirmExpence(${id})">Anuluj</button></div>`;
// };


// correctExpensePosition(); 



// Anuluje edytowanie danych w wydatkow

// const cancelConfirmExpence = (id)=>{
//   expensesArray.map(item =>{
//    if(item.id === id){
//       document.querySelector(
//    `li#expenses_${item.id}`
//  ).innerHTML = `${item.description} - ${Math.abs(item.amount)} PLN
//  <div> <button id="buttonEditExpense" onclick = "correctExpensePosition(${
//    item.id
//  })">Edytuj</button>
//  <button id="deleteExpenses" onclick="deleteExp(${
//    item.id
//  })">Usun</button></div>`;
//    }})
// };

// cancelConfirmExpence();

//Podtwierdzenia nowych danych w wydatkach 

// const confirmExpensePosition = (id) => {
//   const newExpenseTitleValue = nameExpensesInput.value;
//   const newExpenseAmountValue = +amountExpensesInput.value;

//   let editedExpenseArray = [];

//   nameExpensesInput.style.borderColor = "";
//   amountExpensesInput.style.borderColor = "";

//   if (!newExpenseTitleValue || !newExpenseAmountValue) {
//     nameExpensesInput.style.borderColor = "red";
//     amountExpensesInput.style.borderColor = "red";
//     return;
//   } else {
//     const newPosition = {
//       id: id,
//       description: newExpenseTitleValue,
//       amount: +newExpenseAmountValue,
//     };
//     editedExpenseArray.push(newPosition);
//     document.querySelector(
//       `li#expenses_${id}`
//     ).innerHTML = `${newExpenseTitleValue} - ${Math.abs(
//       newExpenseAmountValue
//     )} zł<div> <button id="buttonEditIncome" onclick = "correctIncomePosition(${id})">Edytuj</button> <button id="deleteIncome" onclick="deleteExp(${id})">Usun</button></div>`;
//   }

//   nameExpensesInput.value = "";
//   amountExpensesInput.value = "";

//   expensesArray = expensesArray.map((x) => {
//     const item = editedExpenseArray.find(({ id }) => id === x.id);
//     return item ? item : x;
//   });
//   sumExpenses();
// };


// confirmExpensePosition(); 


//Roznica dochodow i wydatkow

// const availableFunds = () => {
 
//   let result;

//   if (totalIncome === 0 && totalExpense === 0) {
//     balance.innerHTML = "";
//     return;
//   } else if (totalIncome > totalExpense || totalExpense === 0) {
//     result = totalIncome - totalExpense;
//     balance.innerHTML = `<p>Możesz wydać ${result} zł</p>`;
//     balance.classList.add("active");
//   } else if (totalIncome < totalExpense || totalIncome === 0) {
//     result = totalIncome - totalExpense;
//     balance.innerHTML = `<p>Bilans jest ujemny.<br /> ${result} zł`;
//     balance.classList.add("active");
//   } else if (totalIncome === totalExpense) {
//     result = totalIncome - totalExpense;
//     balance.innerHTML = `<p>Twój bilans wynosi ${result} zł`;
//     balance.classList.add("active");
//   }
// };

// availableFunds(); 
