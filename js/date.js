// Input recovery
let monthInput = document.getElementById('month');
let yearInput = document.getElementById('year');

// Error message recovery
let dateError = document.getElementById('date-error');

// Live card element recovery
let cardExpMonth = document.getElementById('card-exp-month');
let cardExpYear = document.getElementById('card-exp-year');

// Default live card value
const defaultDate = '00';

/**
 * Check if the month is correct:
 * - It must be greater than 0 and less than or equal to 12
 * 
 * If the month is empty :
 * - Displays the error message
 * - Changes the value on the live card to the default value
 * 
 * If the month is not correct :
 * - Displays the error message
 * - Change the value on the live card to the month entered
 * 
 * Else :
 * - Removes the error message
 * - Change the value on the live card to the given month
 * 
 * @return {boolean} True if the month is correct, false otherwise
 */
function verify_month() {
    if (monthInput.value == '' || isNaN(monthInput.value)) {
        dateError.style.display = 'block';
        cardExpMonth.innerHTML = defaultDate;
        return false;
    } else if (parseInt(monthInput.value) > 12 || parseInt(monthInput.value) <= 0) {
        dateError.style.display = 'block';
        if (monthInput.value.length < 2) {
            cardExpMonth.innerHTML = '0' + monthInput.value;
        } else {
            cardExpMonth.innerHTML = monthInput.value;
        }
        return false;
    } else {
        dateError.style.display = 'none';
        if (monthInput.value.length < 2) {
            cardExpMonth.innerHTML = '0' + monthInput.value;
        } else {
            cardExpMonth.innerHTML = monthInput.value;
        }
        return true;
    }
}

/**
 * Check if the year is correct:
 * If the year is empty :
 * - Displays the error message
 * - Changes the value on the live card to the default value
 * 
 * Else :
 * - Removes the error message
 * - Change the value on the live card to the given month
 * 
 * @return {boolean} True if the year is correct, false otherwise
 */
function verify_year() {
    if (yearInput.value == '' || isNaN(yearInput.value)) {
        dateError.style.display = 'block';
        cardExpYear.innerHTML = defaultDate;
        return false;
    } else {
        dateError.style.display = 'none';
        if (yearInput.value.length < 2) {
            cardExpYear.innerHTML = '0' + yearInput.value;
        } else {
            cardExpYear.innerHTML = yearInput.value;
        }
        return true;
    }
}