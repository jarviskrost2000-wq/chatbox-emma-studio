export async function getInput(form) {
  const fileInput = document.getElementById('fileInput');

  // check validity of input
  if (fileInput && fileInput.value.trim() !== '') {
    form.addEventListener('submit', submitFile);
  } else {
    alert('Please enter an input!');
  }
}

// submit file to server (simulated with a fake fetch)
export async function submitFile(event) {
  event.preventDefault(); // stop page reload
  try {
    const form = event.target;
    const formData = new FormData(form);

    // dummy POST request (you can replace with real API)
    const response = await fetch('https://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, {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    alert(`Response received! ID: ${data.id}`);

  } catch (error) {
    alert('Error: ' + error);
  }
}