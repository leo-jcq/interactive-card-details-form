// Input recovery
let nameInput = document.getElementById('cardholder-name');

// Error message recovery
let nameError = document.getElementById('name-error');

// Live card element recovery
let cardName = document.getElementById('card-holder');

// Default live card value
const defaultName = 'Jane Appleseed';

/**
 * Check that the name is correct  
 * If the name is empty :
 * - Displays the error message  
 * - Changes the value on the live card to the default value  
 * 
 * Else :
 * - Removes the error message  
 * - Change the value on the live card to the given name
 * 
 * @return {boolean} True if the name is correct, false otherwise
 */
function verify_name() {
    if (nameInput.value == '' || !isNaN(nameInput.value)) {
        nameError.style.display = 'block';
        cardName.innerHTML = defaultName;
        return false;
    } else {
        nameError.style.display = 'none';
        cardName.innerHTML = nameInput.value;
        return true;
    }
}