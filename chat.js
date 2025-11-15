export async function getInput(form) {
  const fileInput = document.getElementById('fileInput');

  // check validity of input
  if (fileInput && fileInput.value.trim() !== '') {
    form.addEventListener('submit', submitFile);
  } else {
    alert('Please enter an input!');
  }
}


export async function submitFile(event) {
  event.preventDefault(); // stop page reload
  try {
    const form = event.target;
    const formData = new FormData(form);
    const response = await fetch('https://, {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    alert(`Response received! ID: ${data.id}`);

  } catch (error) {
    alert('Error: ' + error);
  }
}