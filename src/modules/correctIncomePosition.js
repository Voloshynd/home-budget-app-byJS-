// Daje mozliwosc wprowadzenia nowych danych do elementu li z listy przychodow 

const correctIncomePosition = (id) => {
  document.querySelector(
    `li#income_${id}`
  ).innerHTML = `_ _ - _ _ zł<div style="display: flex"> <button id="buttonConfirmIncome" onclick = "confirmIncomePosition(${id})">Potwierdzić</button> <button id="butttonCancelIncome" onclick="cancelConfirmIncome(${id})">Anuluj</button></div>`;
};

export default window.correctIncomePosition = correctIncomePosition;
