const palindromes = function (user_input) {
    user_input1 = user_input.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    reversed = user_input1.toLowerCase().split('').reverse().join('');
    return user_input1 === reversed ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
