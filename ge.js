export function display(fileInput, data) {
  const chatCont = document.getElementById('cont1');
  chatCont.innerHTML = `
    <h2>${fileInput}</h2>
    <p>${data}</p>
  `;
}