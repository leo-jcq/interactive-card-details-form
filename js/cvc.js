//////////////////// CVC ////////////////////
// default live card value
const defaultCvc = '000';

// input recover
const cvcInput = document.querySelector('.cvc input');
// error message recover
const cvcError = document.querySelector('.cvc span.error');
// liver card element recover
const liveCardCvc = document.querySelector('.live-card .cvc');

cvcInput.addEventListener('input', verifyCvc);

/**
 * Check if the cvc is correct
 * - Its not blank
 * - Its value is between 1 and 999
 *
 * If the cvc is blank :
 * - Displays the appropriate error message
 * - Change the value on the live card to the default value
 *
 * Else if the cvc is not between 1 and 999
 * - Displays the appropriate error message
 * - Change the value on the live card to the given cvc
 *
 * Else :
 * - Removes the error message
 * - Change the value on the live card to the given cvc
 *
 * @return {boolean}
 */
function verifyCvc() {
    if (cvcInput.value.length == 0) {
        cvcError.innerHTML = "Can't be blank";
        cvcInput.classList.add('error');
        liveCardCvc.innerHTML = defaultCvc;
        return false;
    } else if (cvcInput.value.length > 3) {
        cvcError.innerHTML = 'Too big';
        cvcInput.classList.add('error');
        liveCardCvc.innerHTML = defaultCvc;
        return false;
    } else if (cvcInput.value.length < 3) {
        cvcError.innerHTML = 'not complete';
        cvcInput.classList.add('error');
        liveCardCvc.innerHTML = '';
        for (let i = cvcInput.value.length; i < 3; i++) {
            liveCardCvc.innerHTML += '0';
        }
        liveCardCvc.innerHTML += cvcInput.value;
        return false;
    } else {
        cvcError.innerHTML = '';
        cvcInput.classList.remove('error');
        liveCardCvc.innerHTML = cvcInput.value;
        return true;
    }
}

/**
 * Reset the cvc input
 * - reset the inputs value
 * - Remove the error message
 * - Change the values on the live card to the default value
 */
function resetCvc() {
    cvcInput.value = '';
    cvcInput.classList.remove('error');
    liveCardCvc.innerHTML = defaultCvc;
    cvcError.innerHTML = '';
}
resetCvc();
