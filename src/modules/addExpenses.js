import globalContext from "../globalContext.js";
import sumExpenses from "./sumExpenses.js";
import addExpensesList from "./addExpensesList.js";
import { nameExpensesInput, amountExpensesInput } from "../index.js";

//Dodaje value z inputow wydatkow
const addExpenses = () => {
  const { expensesArray } = globalContext;

  const expensesTitleValue = nameExpensesInput.value;
  const expensesAmountValue = amountExpensesInput.value;

  if (expensesTitleValue && expensesAmountValue) {
    const position = {
      id: globalContext.lastIdExpenses++,
      description: expensesTitleValue,
      amount: +expensesAmountValue,
    };
    expensesArray.push(position);
    addExpensesList(position);
    nameExpensesInput.value = "";
    amountExpensesInput.value = "";
    nameExpensesInput.style.borderColor = "";
    amountExpensesInput.style.borderColor = "";
  } else {
    if (expensesTitleValue === "") nameExpensesInput.style.borderColor = "red";
    if (expensesAmountValue === "")
      amountExpensesInput.style.borderColor = "red";
  }

  sumExpenses();
};

export default addExpenses;
