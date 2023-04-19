/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/globalContext.js":
/*!******************************!*\
  !*** ./src/globalContext.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const globalContext = {
    lastIdIncome: 1,
    lastIdExpenses: 0,
    totalIncome: 0,
    totalExpense: 0, 
    incomArray: [],
    expensesArray: [],
  };
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (globalContext);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amountExpensesInput": () => (/* binding */ amountExpensesInput),
/* harmony export */   "amountIncomeInput": () => (/* binding */ amountIncomeInput),
/* harmony export */   "nameExpensesInput": () => (/* binding */ nameExpensesInput),
/* harmony export */   "nameIncomeInput": () => (/* binding */ nameIncomeInput)
/* harmony export */ });
/* harmony import */ var _modules_addIncome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addIncome */ "./src/modules/addIncome.js");
/* harmony import */ var _modules_deleteInc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/deleteInc */ "./src/modules/deleteInc.js");
/* harmony import */ var _modules_correctIncomePosition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/correctIncomePosition */ "./src/modules/correctIncomePosition.js");
/* harmony import */ var _modules_cancelConfirmIncome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cancelConfirmIncome */ "./src/modules/cancelConfirmIncome.js");
/* harmony import */ var _modules_confirmIncomePosition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/confirmIncomePosition */ "./src/modules/confirmIncomePosition.js");
/* harmony import */ var _modules_addExpenses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/addExpenses */ "./src/modules/addExpenses.js");
/* harmony import */ var _modules_deleteExp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/deleteExp */ "./src/modules/deleteExp.js");
/* harmony import */ var _modules_correctExpensePosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/correctExpensePosition */ "./src/modules/correctExpensePosition.js");
/* harmony import */ var _modules_cancelConfirmExpence__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/cancelConfirmExpence */ "./src/modules/cancelConfirmExpence.js");
/* harmony import */ var _modules_confirmExpensePosition__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/confirmExpensePosition */ "./src/modules/confirmExpensePosition.js");











const nameIncomeInput = document.getElementById("name-of-income");
const amountIncomeInput = document.getElementById("sum-of-income");
const nameExpensesInput = document.getElementById("name-of-expenses");
const amountExpensesInput = document.getElementById("sum-of-expenses");

window.addEventListener("DOMContentLoaded", () => {
  const BUTTON_INCOME = document.getElementById("add-income");
  const BUTTON_EXPENSES = document.getElementById("add-expenses");

  BUTTON_INCOME.addEventListener("click", _modules_addIncome__WEBPACK_IMPORTED_MODULE_0__["default"]);

  BUTTON_EXPENSES.addEventListener("click", _modules_addExpenses__WEBPACK_IMPORTED_MODULE_5__["default"]);
});


/***/ }),

/***/ "./src/modules/addExpenses.js":
/*!************************************!*\
  !*** ./src/modules/addExpenses.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globalContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalContext.js */ "./src/globalContext.js");
/* harmony import */ var _sumExpenses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sumExpenses.js */ "./src/modules/sumExpenses.js");
/* harmony import */ var _addExpensesList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addExpensesList.js */ "./src/modules/addExpensesList.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.js */ "./src/index.js");





//Dodaje value z inputow wydatkow
const addExpenses = () => {
  const { expensesArray } = _globalContext_js__WEBPACK_IMPORTED_MODULE_0__["default"];

  const expensesTitleValue = _index_js__WEBPACK_IMPORTED_MODULE_3__.nameExpensesInput.value;
  const expensesAmountValue = _index_js__WEBPACK_IMPORTED_MODULE_3__.amountExpensesInput.value;

  if (expensesTitleValue && expensesAmountValue) {
    const position = {
      id: _globalContext_js__WEBPACK_IMPORTED_MODULE_0__["default"].lastIdExpenses++,
      description: expensesTitleValue,
      amount: +expensesAmountValue,
    };
    expensesArray.push(position);
    (0,_addExpensesList_js__WEBPACK_IMPORTED_MODULE_2__["default"])(position);
    _index_js__WEBPACK_IMPORTED_MODULE_3__.nameExpensesInput.value = "";
    _index_js__WEBPACK_IMPORTED_MODULE_3__.amountExpensesInput.value = "";
    _index_js__WEBPACK_IMPORTED_MODULE_3__.nameExpensesInput.style.borderColor = "";
    _index_js__WEBPACK_IMPORTED_MODULE_3__.amountExpensesInput.style.borderColor = "";
  } else {
    if (expensesTitleValue === "") _index_js__WEBPACK_IMPORTED_MODULE_3__.nameExpensesInput.style.borderColor = "red";
    if (expensesAmountValue === "")
      _index_js__WEBPACK_IMPORTED_MODULE_3__.amountExpensesInput.style.borderColor = "red";
  }

  (0,_sumExpenses_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addExpenses);


/***/ }),

/***/ "./src/modules/addExpensesList.js":
/*!****************************************!*\
  !*** ./src/modules/addExpensesList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addExpensesList); 

/***/ }),

/***/ "./src/modules/addIncome.js":
/*!**********************************!*\
  !*** ./src/modules/addIncome.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globalContext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalContext.js */ "./src/globalContext.js");
/* harmony import */ var _sumIncomes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sumIncomes.js */ "./src/modules/sumIncomes.js");
/* harmony import */ var _addIncomeList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addIncomeList.js */ "./src/modules/addIncomeList.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.js */ "./src/index.js");





//Dodaje value z inputow przychodow
const addIncome = () => {
  const { incomArray } = _globalContext_js__WEBPACK_IMPORTED_MODULE_0__["default"];

  const incomeTitleValue = _index_js__WEBPACK_IMPORTED_MODULE_3__.nameIncomeInput.value;
  const incomeAmountValue = _index_js__WEBPACK_IMPORTED_MODULE_3__.amountIncomeInput.value;

  if (incomeTitleValue && incomeAmountValue) {
    const position = {
      id: _globalContext_js__WEBPACK_IMPORTED_MODULE_0__["default"].lastIdIncome++,
      description: incomeTitleValue,
      amount: +incomeAmountValue,
    };
    incomArray.push(position);
    (0,_addIncomeList_js__WEBPACK_IMPORTED_MODULE_2__["default"])(position);
    _index_js__WEBPACK_IMPORTED_MODULE_3__.nameIncomeInput.value = "";
    _index_js__WEBPACK_IMPORTED_MODULE_3__.amountIncomeInput.value = "";
    _index_js__WEBPACK_IMPORTED_MODULE_3__.nameIncomeInput.style.borderColor = "";
    _index_js__WEBPACK_IMPORTED_MODULE_3__.amountIncomeInput.style.borderColor = "";
  } else {
    if (incomeTitleValue === "") _index_js__WEBPACK_IMPORTED_MODULE_3__.nameIncomeInput.style.borderColor = "red";
    if (incomeAmountValue === "") _index_js__WEBPACK_IMPORTED_MODULE_3__.amountIncomeInput.style.borderColor = "red";
  }

  (0,_sumIncomes_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addIncome);


/***/ }),

/***/ "./src/modules/addIncomeList.js":
/*!**************************************!*\
  !*** ./src/modules/addIncomeList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addIncomeList);


/***/ }),

/***/ "./src/modules/availableFunds.js":
/*!***************************************!*\
  !*** ./src/modules/availableFunds.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globalContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalContext */ "./src/globalContext.js");

//Roznica dochodow i wydatkow
const availableFunds = () => {
  const balance = document.getElementById("cash-balance");
  let result;

  const{totalIncome, totalExpense}= _globalContext__WEBPACK_IMPORTED_MODULE_0__["default"]; 

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (availableFunds); 


/***/ }),

/***/ "./src/modules/cancelConfirmExpence.js":
/*!*********************************************!*\
  !*** ./src/modules/cancelConfirmExpence.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globalContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalContext */ "./src/globalContext.js");

// Anuluje edytowanie danych w wydatkow

const cancelConfirmExpence = (id) => {
  _globalContext__WEBPACK_IMPORTED_MODULE_0__["default"].expensesArray.map((item) => {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.cancelConfirmExpence = cancelConfirmExpence);


/***/ }),

/***/ "./src/modules/cancelConfirmIncome.js":
/*!********************************************!*\
  !*** ./src/modules/cancelConfirmIncome.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globalContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalContext */ "./src/globalContext.js");

// Anuluje edytowanie danych w przychodach

const cancelConfirmIncome = (id) => {
  _globalContext__WEBPACK_IMPORTED_MODULE_0__["default"].incomArray.map((item) => {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.cancelConfirmIncome = cancelConfirmIncome);


/***/ }),

/***/ "./src/modules/confirmExpensePosition.js":
/*!***********************************************!*\
  !*** ./src/modules/confirmExpensePosition.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globalContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalContext */ "./src/globalContext.js");
/* harmony import */ var _sumExpenses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sumExpenses */ "./src/modules/sumExpenses.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ "./src/index.js");




//Podtwierdzenia nowych danych w wydatkach

const confirmExpensePosition = (id) => {
  const newExpenseTitleValue = _index_js__WEBPACK_IMPORTED_MODULE_2__.nameExpensesInput.value;
  const newExpenseAmountValue = +_index_js__WEBPACK_IMPORTED_MODULE_2__.amountExpensesInput.value;

  const editedExpenseArray = [];

  _index_js__WEBPACK_IMPORTED_MODULE_2__.nameExpensesInput.style.borderColor = "";
  _index_js__WEBPACK_IMPORTED_MODULE_2__.amountExpensesInput.style.borderColor = "";

  if (!newExpenseTitleValue) {
    _index_js__WEBPACK_IMPORTED_MODULE_2__.nameExpensesInput.style.borderColor = "red";
    return;
  } else if (!newExpenseAmountValue) {
    _index_js__WEBPACK_IMPORTED_MODULE_2__.amountExpensesInput.style.borderColor = "red";
    return;
  } else {
    const newPosition = {
      id: id,
      description: newExpenseTitleValue,
      amount: +newExpenseAmountValue,
    };
    editedExpenseArray.push(newPosition);
    document.querySelector(
      `li#expenses_${id}`
    ).innerHTML = `${newExpenseTitleValue} - ${Math.abs(
      newExpenseAmountValue
    )} zł<div> <button id="buttonEditIncome" onclick = "correctIncomePosition(${id})">Edytuj</button> <button id="deleteIncome" onclick="deleteExp(${id})">Usun</button></div>`;
  }

  _index_js__WEBPACK_IMPORTED_MODULE_2__.nameExpensesInput.value = "";
  _index_js__WEBPACK_IMPORTED_MODULE_2__.amountExpensesInput.value = "";

  _globalContext__WEBPACK_IMPORTED_MODULE_0__["default"].expensesArray = _globalContext__WEBPACK_IMPORTED_MODULE_0__["default"].expensesArray.map((x) => {
    const item = editedExpenseArray.find(({ id }) => id === x.id);
    return item ? item : x;
  });
  (0,_sumExpenses__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.confirmExpensePosition = confirmExpensePosition);


/***/ }),

/***/ "./src/modules/confirmIncomePosition.js":
/*!**********************************************!*\
  !*** ./src/modules/confirmIncomePosition.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globalContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalContext */ "./src/globalContext.js");
/* harmony import */ var _sumIncomes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sumIncomes */ "./src/modules/sumIncomes.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ "./src/index.js");




//Podtwierdzenia nowych danych w przychodach

const confirmIncomePosition = (id) => {
  const newIncomeTitleValue = _index_js__WEBPACK_IMPORTED_MODULE_2__.nameIncomeInput.value;
  const newIncomeAmountValue = +_index_js__WEBPACK_IMPORTED_MODULE_2__.amountIncomeInput.value;

  const editedIncomeArray = [];

  _index_js__WEBPACK_IMPORTED_MODULE_2__.nameIncomeInput.style.borderColor = "";
  _index_js__WEBPACK_IMPORTED_MODULE_2__.amountIncomeInput.style.borderColor = "";

  if (!newIncomeTitleValue) {
    _index_js__WEBPACK_IMPORTED_MODULE_2__.nameIncomeInput.style.borderColor = "red";
    return;
  } else if (!newIncomeAmountValue) {
    _index_js__WEBPACK_IMPORTED_MODULE_2__.amountIncomeInput.style.borderColor = "red";
    return;
  } else {
    const newPosition = {
      id: id,
      description: newIncomeTitleValue,
      amount: +newIncomeAmountValue,
    };
    editedIncomeArray.push(newPosition);
    document.querySelector(
      `li#income_${id}`
    ).innerHTML = `${newIncomeTitleValue} - ${Math.abs(
      newIncomeAmountValue
    )} zł<div> <button id="buttonEditIncome" onclick = "correctIncomePosition(${id})">Edytuj</button> <button id="deleteIncome" onclick="deleteInc(${id})">Usun</button></div>`;
  }

  _index_js__WEBPACK_IMPORTED_MODULE_2__.nameIncomeInput.value = "";
  _index_js__WEBPACK_IMPORTED_MODULE_2__.amountIncomeInput.value = "";

  _globalContext__WEBPACK_IMPORTED_MODULE_0__["default"].incomArray = _globalContext__WEBPACK_IMPORTED_MODULE_0__["default"].incomArray.map((x) => {
    const item = editedIncomeArray.find(({ id }) => id === x.id);
    return item ? item : x;
  });
  (0,_sumIncomes__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.confirmIncomePosition = confirmIncomePosition);


/***/ }),

/***/ "./src/modules/correctExpensePosition.js":
/*!***********************************************!*\
  !*** ./src/modules/correctExpensePosition.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Daje mozliwosc wprowadzenia nowych danych do elementu li z listy wydatkow

const correctExpensePosition = (id) => {
  document.querySelector(
    `li#expenses_${id}`
  ).innerHTML = `_ _ - _ _ zł<div style="display: flex"> <button id="buttonConfirmExpense" onclick = "confirmExpensePosition(${id})">Potwierdzić</button> <button id="butttonCancelIncome" onclick="cancelConfirmExpence(${id})">Anuluj</button></div>`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.correctExpensePosition = correctExpensePosition); 


/***/ }),

/***/ "./src/modules/correctIncomePosition.js":
/*!**********************************************!*\
  !*** ./src/modules/correctIncomePosition.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Daje mozliwosc wprowadzenia nowych danych do elementu li z listy przychodow 

const correctIncomePosition = (id) => {
  document.querySelector(
    `li#income_${id}`
  ).innerHTML = `_ _ - _ _ zł<div style="display: flex"> <button id="buttonConfirmIncome" onclick = "confirmIncomePosition(${id})">Potwierdzić</button> <button id="butttonCancelIncome" onclick="cancelConfirmIncome(${id})">Anuluj</button></div>`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.correctIncomePosition = correctIncomePosition);


/***/ }),

/***/ "./src/modules/deleteExp.js":
/*!**********************************!*\
  !*** ./src/modules/deleteExp.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globalContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalContext */ "./src/globalContext.js");
/* harmony import */ var _sumExpenses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sumExpenses */ "./src/modules/sumExpenses.js");



//Usuwa element li o konkretnym id listy wydatkow

const deleteExp = (id) => {
  _globalContext__WEBPACK_IMPORTED_MODULE_0__["default"].expensesArray = _globalContext__WEBPACK_IMPORTED_MODULE_0__["default"].expensesArray.filter((v) => v.id !== id);
  document.querySelector(`li#expenses_${id}`).remove();
  (0,_sumExpenses__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.deleteExp = deleteExp); 

/***/ }),

/***/ "./src/modules/deleteInc.js":
/*!**********************************!*\
  !*** ./src/modules/deleteInc.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globalContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalContext */ "./src/globalContext.js");
/* harmony import */ var _sumIncomes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sumIncomes */ "./src/modules/sumIncomes.js");



//Usuwa element li o konkretnym id z listy przychodow

const deleteInc = (id) => {
  _globalContext__WEBPACK_IMPORTED_MODULE_0__["default"].incomArray = _globalContext__WEBPACK_IMPORTED_MODULE_0__["default"].incomArray.filter(
    (v) => v.id !== id
  );
  document.querySelector(`li#income_${id}`).remove();
  (0,_sumIncomes__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.deleteInc = deleteInc);


/***/ }),

/***/ "./src/modules/sumExpenses.js":
/*!************************************!*\
  !*** ./src/modules/sumExpenses.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globalContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalContext */ "./src/globalContext.js");
/* harmony import */ var _availableFunds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./availableFunds */ "./src/modules/availableFunds.js");



// Sumuje amount z tablicy wydatkow

const sumExpenses = () => {
  let resultExpenses = _globalContext__WEBPACK_IMPORTED_MODULE_0__["default"].expensesArray.reduce(
    (prev, next) => prev + next.amount,
    0
  );
  document.getElementById(
    "total-expenses-sum"
  ).innerHTML = `<p>Suma wydatków: ${resultExpenses} zł</p>`;
  _globalContext__WEBPACK_IMPORTED_MODULE_0__["default"].totalExpense = resultExpenses;
  (0,_availableFunds__WEBPACK_IMPORTED_MODULE_1__["default"])();

  if (_globalContext__WEBPACK_IMPORTED_MODULE_0__["default"].expensesArray.length === 0) {
    document.querySelector("#total-expenses-sum").innerHTML = "";
    return;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sumExpenses); 

/***/ }),

/***/ "./src/modules/sumIncomes.js":
/*!***********************************!*\
  !*** ./src/modules/sumIncomes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globalContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globalContext */ "./src/globalContext.js");
/* harmony import */ var _availableFunds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./availableFunds */ "./src/modules/availableFunds.js");



// Sumuje amount z tablicy przychodow

const sumIncomes = () => {

    
  let resultIncome = _globalContext__WEBPACK_IMPORTED_MODULE_0__["default"].incomArray.reduce((prev, next) => prev + next.amount, 0);
  document.getElementById(
    "total-income-sum"
  ).innerHTML = `<p>Suma przychodów: ${resultIncome} zł</p>`;
  _globalContext__WEBPACK_IMPORTED_MODULE_0__["default"].totalIncome = resultIncome;
  (0,_availableFunds__WEBPACK_IMPORTED_MODULE_1__["default"])();

  if (_globalContext__WEBPACK_IMPORTED_MODULE_0__["default"].incomArray.length === 0) {
    document.querySelector("#total-income-sum").innerHTML = "";
    return;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sumIncomes); 


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map