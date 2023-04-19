import globalContext from "../globalContext";
import sumExpenses from "./sumExpenses";

//Usuwa element li o konkretnym id listy wydatkow

const deleteExp = (id) => {
  globalContext.expensesArray = globalContext.expensesArray.filter((v) => v.id !== id);
  document.querySelector(`li#expenses_${id}`).remove();
  sumExpenses();
};

export default window.deleteExp = deleteExp; 