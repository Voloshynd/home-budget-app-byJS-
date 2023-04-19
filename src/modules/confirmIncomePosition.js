import globalContext from "../globalContext";
import sumIncome from "./sumIncomes";
import { nameIncomeInput, amountIncomeInput } from "../index.js";

//Podtwierdzenia nowych danych w przychodach

const confirmIncomePosition = (id) => {
  const newIncomeTitleValue = nameIncomeInput.value;
  const newIncomeAmountValue = +amountIncomeInput.value;

  const editedIncomeArray = [];

  nameIncomeInput.style.borderColor = "";
  amountIncomeInput.style.borderColor = "";

  if (!newIncomeTitleValue) {
    nameIncomeInput.style.borderColor = "red";
    return;
  } else if (!newIncomeAmountValue) {
    amountIncomeInput.style.borderColor = "red";
    return;
  } else {
    const newPosition = {
      id: id,
      description: newIncomeTitleValue,
      amount: +newIncomeAmountValue,
    };
    editedIncomeArray.push(newPosition);
    document.querySelector(
      `li#income_${id}`
    ).innerHTML = `${newIncomeTitleValue} - ${Math.abs(
      newIncomeAmountValue
    )} zł<div> <button id="buttonEditIncome" onclick = "correctIncomePosition(${id})">Edytuj</button> <button id="deleteIncome" onclick="deleteInc(${id})">Usun</button></div>`;
  }

  nameIncomeInput.value = "";
  amountIncomeInput.value = "";

  globalContext.incomArray = globalContext.incomArray.map((x) => {
    const item = editedIncomeArray.find(({ id }) => id === x.id);
    return item ? item : x;
  });
  sumIncome();
};

export default window.confirmIncomePosition = confirmIncomePosition;
