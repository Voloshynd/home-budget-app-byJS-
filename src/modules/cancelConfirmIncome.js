import globalContext from "../globalContext";
// Anuluje edytowanie danych w przychodach

const cancelConfirmIncome = (id) => {
  globalContext.incomArray.map((item) => {
    if (item.id === id) {
      document.querySelector(`li#income_${item.id}`).innerHTML = `${
        item.description
      } - ${Math.abs(item.amount)} zł
   <div> <button id="buttonEditIncome" onclick = "correctIncomePosition(${
     item.id
   })">Edytuj</button>
   <button id="deleteIncome" onclick="deleteInc(${
     item.id
   })">Usun</button></div>`;
    }
  });
};

export default window.cancelConfirmIncome = cancelConfirmIncome;
