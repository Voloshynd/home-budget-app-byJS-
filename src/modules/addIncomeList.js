// Tworzy i dodaje nowy element li do listy przychodow
const LIST_INCOME = document.getElementById("list-of-incoms");

const addIncomeList = (position) => {
  const li = document.createElement("li");
  li.id = `income_${position.id}`;
  li.innerHTML = `${position.description} - ${Math.abs(position.amount)} zł
            <div> 
              <button id="buttonEditIncome" onclick=correctIncomePosition(${position.id})>Edytuj</button>
              <button id="deleteIncome" onclick=deleteInc(${position.id})>Usun</button>
            </div>`;
  LIST_INCOME.appendChild(li);
  li.classList.add("flex");
};

export default addIncomeList;
