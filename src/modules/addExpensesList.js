// Tworzy i dodaje nowy element li do listy wydatkow
const LIST_EXPENSES = document.getElementById("list-of-expenses");

const addExpensesList = (position) => {
  const li = document.createElement("li");
  li.id = `expenses_${position.id}`;
  li.innerHTML = `${position.description} - ${Math.abs(position.amount)} zł
            <div> <button id = "buttonEditExpense" onclick = "correctExpensePosition(${
              position.id
            })">Edytuj</button> <button id="deleteExpenses" onclick="deleteExp(${
    position.id
  })">Usun</button></div>`;
  LIST_EXPENSES.appendChild(li);
  li.classList.add("flex");
};


export default addExpensesList; 