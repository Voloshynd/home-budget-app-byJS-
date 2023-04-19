import globalContext from "../globalContext";
import availableFunds from "./availableFunds";

// Sumuje amount z tablicy wydatkow

const sumExpenses = () => {
  let resultExpenses = globalContext.expensesArray.reduce(
    (prev, next) => prev + next.amount,
    0
  );
  document.getElementById(
    "total-expenses-sum"
  ).innerHTML = `<p>Suma wydatków: ${resultExpenses} zł</p>`;
  globalContext.totalExpense = resultExpenses;
  availableFunds();

  if (globalContext.expensesArray.length === 0) {
    document.querySelector("#total-expenses-sum").innerHTML = "";
    return;
  }
};

export default sumExpenses; 