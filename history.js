import { submitFile } from './chat.js';

export let histData = JSON.parse(localStorage.getItem('histData')) || [];

export function history() {
  const histCont = document.getElementById('cont2');
  histCont.innerHTML = '';

  histData.forEach((d) => {
    const p = document.createElement('p');
    p.textContent = `${d.input} — ${d.result}`;
    histCont.appendChild(p);
  });

  saveFile();
}

export function saveFile() {
  localStorage.setItem('histData', JSON.stringify(histData));
}