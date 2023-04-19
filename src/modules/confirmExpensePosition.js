import globalContext from "../globalContext";
import sumExpenses from "./sumExpenses";
import { nameExpensesInput, amountExpensesInput } from "../index.js";

//Podtwierdzenia nowych danych w wydatkach

const confirmExpensePosition = (id) => {
  const newExpenseTitleValue = nameExpensesInput.value;
  const newExpenseAmountValue = +amountExpensesInput.value;

  const editedExpenseArray = [];

  nameExpensesInput.style.borderColor = "";
  amountExpensesInput.style.borderColor = "";

  if (!newExpenseTitleValue) {
    nameExpensesInput.style.borderColor = "red";
    return;
  } else if (!newExpenseAmountValue) {
    amountExpensesInput.style.borderColor = "red";
    return;
  } else {
    const newPosition = {
      id: id,
      description: newExpenseTitleValue,
      amount: +newExpenseAmountValue,
    };
    editedExpenseArray.push(newPosition);
    document.querySelector(
      `li#expenses_${id}`
    ).innerHTML = `${newExpenseTitleValue} - ${Math.abs(
      newExpenseAmountValue
    )} zł<div> <button id="buttonEditIncome" onclick = "correctIncomePosition(${id})">Edytuj</button> <button id="deleteIncome" onclick="deleteExp(${id})">Usun</button></div>`;
  }

  nameExpensesInput.value = "";
  amountExpensesInput.value = "";

  globalContext.expensesArray = globalContext.expensesArray.map((x) => {
    const item = editedExpenseArray.find(({ id }) => id === x.id);
    return item ? item : x;
  });
  sumExpenses();
};

export default window.confirmExpensePosition = confirmExpensePosition;
