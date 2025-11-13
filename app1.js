import { getInput, submitFile } from './chat.js';
import { history } from './history.js';
import { display } from './ge.js';

const form = document.getElementById('myform');
const histBtn = document.getElementById('btn');
const chatCont = document.getElementById('cont1');
const histCont = document.getElementById('cont2');

// initialize app
getInput(form);

histBtn.addEventListener('click', history);
histBtn.textContent = 'HISTORY';