// Input recovery
let numberInput = document.getElementById('card-number');

// Error message recovery
let numberError = document.getElementById('number-error');

// Live card element recovery
let cardNumbers = document.getElementById('card-numbers');

// Default live card value
const defaultNumbers = '0000 0000 0000 0000';

/**
 * Check that the card number is correct:
 * - It contains 16 characters
 * - It is composed only of numbers
 * - Add spaces every 4 characters on the input
 * 
 * If the card number is empty or not composed only of numbers :
 * - Displays the error message
 * - Changes the value on the live card to the default value
 * 
 * If the card number is not complete :
 * - Displays the error message
 * - Change the value on the live card to the card number entered
 * 
 * Else :
 * - Removes the error message
 * - Change the value on the live card to the given card number
 */
function verify_number() {
    // Recover the card number without spaces
    let noSpaceNumber = numberInput.value.replace(/\s/g, '');
    // Add spaces every 4 characters on the input
    numberInput.value = noSpaceNumber.replace(/(.{4})/g, '$1 ').trim();
    // Check if the card number is correct
    if (noSpaceNumber.length == 0 || isNaN(noSpaceNumber)) {
        numberError.style.display = 'block';
        cardNumbers.innerHTML = defaultNumbers;
        return false;
    } else if (noSpaceNumber.length < 16) {
        numberError.style.display = 'block';
        // Add spaces every 4 characters on the live card and 0s to complete the card number
        cardNumbers.innerHTML = '';
        cardNumbers.innerHTML += noSpaceNumber;
        for (let i = 16 - noSpaceNumber.length; i > 0; i--) {
            cardNumbers.innerHTML += '0';
        }
        cardNumbers.innerHTML = cardNumbers.innerHTML.replace(/(.{4})/g, '$1 ').trim();
        return false;
    } else {
        numberError.style.display = 'none';
        cardNumbers.innerHTML = numberInput.value;
        return true;
    }
}