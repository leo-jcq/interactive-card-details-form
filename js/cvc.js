// Input recovery
let cvcInput = document.getElementById('cvc');

// Error message recovery
let cvcError = document.getElementById('cvc-error');

// Live card element recovery
let cardCvc = document.getElementById('card-cvc');

// Default live card value
const defaultCvc = '000';

/**
 * Check that the CVC is correct:
 * - It contains 3 characters
 * - It is composed only of numbers
 * 
 * If the CVC is empty or not composed only of numbers :
 * - Displays the error message
 * - Changes the value on the live card to the default value
 * 
 * If the CVC is not complete :
 * - Displays the error message
 * - Change the value on the live card to the CVC entered
 * 
 * Else :
 * - Removes the error message
 * - Change the value on the live card to the given CVC
 *
 * @return {boolean} True if the CVC is correct, false otherwise
 */
function verify_cvc() {
    if (cvcInput.value.length == 0 || isNaN(cvcInput.value)) {
        cvcError.style.display = 'block';
        cardCvc.innerHTML = defaultCvc;
        return false;
    } else if (cvcInput.value.length < 3) {
        cvcError.style.display = 'block';
        cardCvc.innerHTML = '';
        for (let i = 3 - cvcInput.value.length; i > 0; i--) {
            cardCvc.innerHTML += '0';
        }
        cardCvc.innerHTML += cvcInput.value;
        return false;
    } else {
        cvcError.style.display = 'none';
        cardCvc.innerHTML = cvcInput.value;
        return true;
    }
}