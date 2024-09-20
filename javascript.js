const nameForm = document.querySelector('#name-form');
const nameInput = document.querySelector('#name-input');
const formBtn = document.querySelector('#form-submit');

// On Name Submit
function onNameSubmit(e) {
  e.preventDefault();

  const newName = nameInput.value;

  // Validate Input
  if (newName === '') {
    alert('Please add a name');
    return;
  }

  // Add Name to storage
  addNameToStorage(newName);

  console.log(newName);
}

// Add Name to Storage
function addNameToStorage(name) {
  let namesFromStorage = getNamesFromStorage();

  // Add New Name to Array
  namesFromStorage.push(name);

  // Convert to JSON and set to local storage
  localStorage.setItem('Name', JSON.stringify(namesFromStorage));

  window.location = 'http://127.0.0.1:5500/';
}

// Get Names from Storage
function getNamesFromStorage() {
  let namesFromStorage;

  if (localStorage.getItem('name') === null) {
    namesFromStorage = [];
  } else {
    namesFromStorage = JSON.parse(localStorage.getItem('name'));
  }

  return namesFromStorage;
}

// Initialize app
function init() {
  // Event Listeners
}

init(nameForm.addEventListener('submit', onNameSubmit));
