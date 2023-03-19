//////////////////// Card number ////////////////////
// default live card value
const defaultNumber = '0000 0000 0000 0000';

// input recover
const numberInput = document.querySelector('.number input');
// error message recover
const numberError = document.querySelector('.number span.error');
// liver card element recover
const liveCardNumber = document.querySelector('.live-card .number');

numberInput.addEventListener('input', verifyNumber);

/**
 * Format the card number and if it'is correct
 * - It is not blank
 * - It contains numbers only
 *
 * If the number is blank or contains letters :
 * - Displays the appropriate error message
 * - Change the value on the live card to the default value
 *
 * Else if the number is not enougth long
 * - Displays the appropriate error message
 * - Change the value on the live card to the default value
 *
 * Else if the number is not enougth long
 * - Displays the appropriate error message
 * - Change the value on the live card to the given number and complete with '0'
 *
 * Else :
 * - Removes the error message
 * - Change the value on the live card to the given number
 *
 * @return {boolean} true if the number is correct, false otherwise
 */
function verifyNumber() {
    const noSpaceNumber = numberInput.value.replace(/\s/g, '');
    numberInput.value = noSpaceNumber.replace(/(.{4})/g, '$1 ').trim();
    if (noSpaceNumber.length == 0) {
        numberError.innerHTML = "Can't be blank";
        numberInput.classList.add('error');
        liveCardNumber.innerHTML = defaultNumber;
        return false;
    } else if (isNaN(noSpaceNumber)) {
        numberError.innerHTML = 'Numbers only';
        numberInput.classList.add('error');
        liveCardNumber.innerHTML = defaultNumber;
        return false;
    } else if (numberInput.value.length > 19) {
        numberInput.value = numberInput.value.slice(0, -1);
        return true;
    } else if (noSpaceNumber.length < 16) {
        numberError.innerHTML = 'Not complete';
        numberInput.classList.add('error');
        liveCardNumber.innerHTML = noSpaceNumber;
        for (let i = noSpaceNumber.length; i < 16; i++) {
            liveCardNumber.innerHTML += '0';
        }
        liveCardNumber.innerHTML = liveCardNumber.innerHTML.replace(/(.{4})/g, '$1 ').trim();
        return false;
    } else {
        numberError.innerHTML = '';
        numberInput.classList.remove('error');
        liveCardNumber.innerHTML = numberInput.value;
        return true;
    }
}

/**
 * Reset the number input
 * - reset the input value
 * - Remove the error message
 * - Change the value on the live card to the default value
 */
function resetNumber() {
    numberInput.value = '';
    numberInput.classList.remove('error');
    numberError.innerHTML = '';
    liveCardNumber.innerHTML = defaultNumber;
}
resetNumber();
