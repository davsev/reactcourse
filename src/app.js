import React from "react";
import ReactDOM from "react-dom";
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/style.scss';



store.dispatch(addExpense({ description: 'water bill'}));




const store = configureStore();

console.log(store.getState());




ReactDOM.render(<AppRouter />, document.getElementById("app"));

