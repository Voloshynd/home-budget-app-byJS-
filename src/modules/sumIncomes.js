import globalContext from "../globalContext";
import availableFunds from "./availableFunds";

// Sumuje amount z tablicy przychodow

const sumIncomes = () => {

    
  let resultIncome = globalContext.incomArray.reduce((prev, next) => prev + next.amount, 0);
  document.getElementById(
    "total-income-sum"
  ).innerHTML = `<p>Suma przychodów: ${resultIncome} zł</p>`;
  globalContext.totalIncome = resultIncome;
  availableFunds();

  if (globalContext.incomArray.length === 0) {
    document.querySelector("#total-income-sum").innerHTML = "";
    return;
  }
};

export default sumIncomes; 
