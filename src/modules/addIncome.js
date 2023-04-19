import globalContext from "../globalContext.js";
import sumIncomes from "./sumIncomes.js";
import addIncomeList from "./addIncomeList.js";
import { nameIncomeInput, amountIncomeInput } from "../index.js";

//Dodaje value z inputow przychodow
const addIncome = () => {
  const { incomArray } = globalContext;

  const incomeTitleValue = nameIncomeInput.value;
  const incomeAmountValue = amountIncomeInput.value;

  if (incomeTitleValue && incomeAmountValue) {
    const position = {
      id: globalContext.lastIdIncome++,
      description: incomeTitleValue,
      amount: +incomeAmountValue,
    };
    incomArray.push(position);
    addIncomeList(position);
    nameIncomeInput.value = "";
    amountIncomeInput.value = "";
    nameIncomeInput.style.borderColor = "";
    amountIncomeInput.style.borderColor = "";
  } else {
    if (incomeTitleValue === "") nameIncomeInput.style.borderColor = "red";
    if (incomeAmountValue === "") amountIncomeInput.style.borderColor = "red";
  }

  sumIncomes();
};

export default addIncome;
