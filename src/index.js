import addIncome from "./modules/addIncome";
import deleteInc from "./modules/deleteInc";
import correctIncomePosition from "./modules/correctIncomePosition";
import cancelConfirmIncome from "./modules/cancelConfirmIncome";
import confirmIncomePosition from "./modules/confirmIncomePosition";
import addExpenses from "./modules/addExpenses";
import deleteExp from "./modules/deleteExp";
import correctExpensePosition from "./modules/correctExpensePosition";
import cancelConfirmExpence from "./modules/cancelConfirmExpence";
import confirmExpensePosition from "./modules/confirmExpensePosition";

export const nameIncomeInput = document.getElementById("name-of-income");
export const amountIncomeInput = document.getElementById("sum-of-income");
export const nameExpensesInput = document.getElementById("name-of-expenses");
export const amountExpensesInput = document.getElementById("sum-of-expenses");

window.addEventListener("DOMContentLoaded", () => {
  const BUTTON_INCOME = document.getElementById("add-income");
  const BUTTON_EXPENSES = document.getElementById("add-expenses");

  BUTTON_INCOME.addEventListener("click", addIncome);

  BUTTON_EXPENSES.addEventListener("click", addExpenses);
});
