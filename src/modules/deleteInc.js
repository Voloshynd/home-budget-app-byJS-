import globalContext from "../globalContext";
import sumIncomes from "./sumIncomes";

//Usuwa element li o konkretnym id z listy przychodow

const deleteInc = (id) => {
  globalContext.incomArray = globalContext.incomArray.filter(
    (v) => v.id !== id
  );
  document.querySelector(`li#income_${id}`).remove();
  sumIncomes();
};

export default window.deleteInc = deleteInc;
