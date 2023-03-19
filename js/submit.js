//////////////////// Submit ////////////////////
// form recover
const form = document.querySelector('#form');
// submit button recover
const submitButton = document.querySelector('#form button');
// completed recover
const completed = document.querySelector('#completed');
// continue button recover
const continueButton = document.querySelector('#completed button');

submitButton.addEventListener('click', () => {
    if (verifyName() && verifyNumber() && verifyMonth() && verifyYear() && verifyCvc()) {
        form.classList.add('hidden');
        completed.classList.remove('hidden');
    }
});

continueButton.addEventListener('click', () => {
    resetName();
    resetNumber();
    resetDate();
    resetCvc();
    completed.classList.add('hidden');
    form.classList.remove('hidden');
});
