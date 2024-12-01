const formData = {
  email: '',
  message: '',
};
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[name]');
const textareaMessage = document.querySelector('textarea[name]');
function saveToLocaleStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function loadFromLocaleStorage() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
    inputEmail.value = formData.email;
    textareaMessage.value = formData.message;
  }
}
form.addEventListener('input', evt => {
  const { name, value } = evt.target;
  formData[name] = value;
  saveToLocaleStorage();
});
form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});
loadFromLocaleStorage();
