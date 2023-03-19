//////////////////// Date ////////////////////
// default live card value
const defaultDate = '00';

// input recover
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
// error message recover
const dateError = document.querySelector('.date span.error');
// liver card element recover
const liveCardMonth = document.querySelector('.live-card .month');
const liveCardYear = document.querySelector('.live-card .year');

monthInput.addEventListener('input', verifyMonth);
yearInput.addEventListener('input', verifyYear);

/**
 * Check if the month is correct
 * - Its not blank
 * - Its value is between 1 and 12
 *
 * If the month is blank :
 * - Displays the appropriate error message
 * - Change the value on the live card to the default value
 *
 * Else if the month is not between 1 and 12
 * - Displays the appropriate error message
 * - Change the value on the live card to the given month
 *
 * Else :
 * - Removes the error message
 * - Change the value on the live card to the given month
 *
 * @return {boolean} true if the month is correct, false otherwise
 */
function verifyMonth() {
    if (monthInput.value == '') {
        dateError.innerHTML = "Cant'be blank";
        monthInput.classList.add('error');
        liveCardMonth.innerHTML = defaultDate;
        return false;
    } else if (parseInt(monthInput.value) > 12 || parseInt(monthInput.value) <= 0) {
        dateError.innerHTML = 'Incorrect value';
        monthInput.classList.add('error');
        if (monthInput.value.length < 2) {
            liveCardMonth.innerHTML = '0' + monthInput.value;
        } else {
            liveCardMonth.innerHTML = monthInput.value;
        }
        return false;
    } else {
        dateError.innerHTML = '';
        monthInput.classList.remove('error');
        if (monthInput.value.length < 2) {
            liveCardMonth.innerHTML = '0' + monthInput.value;
        } else {
            liveCardMonth.innerHTML = monthInput.value;
        }
        return true;
    }
}

/**
 * Check if the year is correct
 * - Its not blank
 * - Its value is positive
 *
 * If the year is blank :
 * - Displays the appropriate error message
 * - Change the value on the live card to the default value
 *
 * Else if the year is negative
 * - Displays the appropriate error message
 * - Change the value on the live card to the given year
 *
 * Else :
 * - Removes the error message
 * - Change the value on the live card to the given year
 *
 * @return {boolean} true if the year is correct, false otherwise
 */
function verifyYear() {
    if (monthInput.value == '') {
        dateError.innerHTML = "Cant'be blank";
        yearInput.classList.add('error');
        liveCardYear.innerHTML = defaultDate;
        return false;
    } else if (parseInt(yearInput.value) < 0) {
        dateError.innerHTML = 'Incorrect value';
        yearInput.classList.add('error');
        if (yearInput.value.length < 2) {
            liveCardYear.innerHTML = '0' + yearInput.value;
        } else {
            liveCardYear.innerHTML = yearInput.value;
        }
        return false;
    } else {
        dateError.innerHTML = '';
        yearInput.classList.remove('error');
        if (yearInput.value.length < 2) {
            liveCardYear.innerHTML = '0' + yearInput.value;
        } else {
            liveCardYear.innerHTML = yearInput.value;
        }
        return true;
    }
}

/**
 * Reset the date inputs
 * - reset the inputs value
 * - Remove the error message
 * - Change the values on the live card to the default value
 */
function resetDate() {
    monthInput.value = '';
    monthInput.classList.remove('error');
    liveCardMonth.innerHTML = defaultDate;
    yearInput.value = '';
    yearInput.classList.remove('error');
    liveCardYear.innerHTML = defaultDate;
    dateError.innerHTML = '';
}
resetDate();
