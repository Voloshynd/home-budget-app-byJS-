import globalContext from "../globalContext";
// Anuluje edytowanie danych w wydatkow

const cancelConfirmExpence = (id) => {
  globalContext.expensesArray.map((item) => {
    if (item.id === id) {
      document.querySelector(`li#expenses_${item.id}`).innerHTML = `${
        item.description
      } - ${Math.abs(item.amount)} PLN
   <div> <button id="buttonEditExpense" onclick = "correctExpensePosition(${
     item.id
   })">Edytuj</button>
   <button id="deleteExpenses" onclick="deleteExp(${
     item.id
   })">Usun</button></div>`;
    }
  });
};

export default window.cancelConfirmExpence = cancelConfirmExpence;
