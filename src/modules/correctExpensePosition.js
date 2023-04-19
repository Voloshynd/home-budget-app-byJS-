// Daje mozliwosc wprowadzenia nowych danych do elementu li z listy wydatkow

const correctExpensePosition = (id) => {
  document.querySelector(
    `li#expenses_${id}`
  ).innerHTML = `_ _ - _ _ zł<div style="display: flex"> <button id="buttonConfirmExpense" onclick = "confirmExpensePosition(${id})">Potwierdzić</button> <button id="butttonCancelIncome" onclick="cancelConfirmExpence(${id})">Anuluj</button></div>`;
};

export default window.correctExpensePosition = correctExpensePosition; 
