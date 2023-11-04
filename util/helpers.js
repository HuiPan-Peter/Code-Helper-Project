const format = require('date-fns/format');
const isValid = require('date-fns/isValid');

function formatDate(date) {
    if (!isValid(new Date(date))) {
        return "Invalid Date"; // or any default placeholder
    }
    return format(date, 'MMMM d, yyyy');
}


module.exports = {
  formatDate
};