import globalContext from "../globalContext";
//Roznica dochodow i wydatkow
const availableFunds = () => {
  const balance = document.getElementById("cash-balance");
  let result;

  const{totalIncome, totalExpense}= globalContext; 

  if (totalIncome === 0 && totalExpense === 0) {
    balance.innerHTML = "";
    return;
  } else if (totalIncome > totalExpense || totalExpense === 0) {
    result = totalIncome - totalExpense;
    balance.innerHTML = `<p>Możesz wydać ${result} zł</p>`;
    balance.classList.add("active");
  } else if (totalIncome < totalExpense || totalIncome === 0) {
    result = totalIncome - totalExpense;
    balance.innerHTML = `<p>Bilans jest ujemny.<br /> ${result} zł`;
    balance.classList.add("active");
  } else if (totalIncome === totalExpense) {
    result = totalIncome - totalExpense;
    balance.innerHTML = `<p>Twój bilans wynosi ${result} zł`;
    balance.classList.add("active");
  }
};

export default availableFunds; 
