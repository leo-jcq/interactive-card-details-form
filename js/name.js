//////////////////// Name ////////////////////
// default live card value
const defaultName = 'Jane Appleseed';

// input recover
const nameInput = document.querySelector('.name input');
// error message recover
const nameError = document.querySelector('.name span.error');
// liver card element recover
const liveCardName = document.querySelector('.live-card .name');

nameInput.addEventListener('input', verifyName);

/**
 * Check if the name is correct
 * - It is not blank
 * - It does not contain numbers
 *
 * If the name is blank :
 * - Displays the appropriate error message
 * - Change the value on the live card to the default value
 *
 * Else if the name contains numbers
 * - Displays the appropriate error message
 * - Change the value on the live card to the given name
 *
 * Else :
 * - Removes the error message
 * - Change the value on the live card to the given name
 *
 * @return {boolean} true if the name is correct, false otherwise
 */
function verifyName() {
    if (nameInput.value == '') {
        nameError.innerHTML = "Can't be blank";
        nameInput.classList.add('error');
        liveCardName.innerHTML = defaultName;
        return false;
    } else if (nameInput.value.match(/\d/)) {
        nameError.innerHTML = 'Letters only';
        nameInput.classList.add('error');
        liveCardName.innerHTML = defaultName;
        return false;
    } else {
        nameError.innerHTML = '';
        nameInput.classList.remove('error');
        liveCardName.innerHTML = nameInput.value;
        return true;
    }
}

/**
 * Reset the name input
 * - reset the input value
 * - Remove the error message
 * - Change the value on the live card to the default value
 */
function resetName() {
    nameInput.value = '';
    nameInput.classList.remove('error');
    nameError.innerHTML = '';
    liveCardName.innerHTML = defaultName;
}
resetName();








