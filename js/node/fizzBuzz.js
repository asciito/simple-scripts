module.exports = function fizzBuzz(size=100) {
    let result = '';

    for (let n = 1; n <= size; n++) {
        if (n % 3 === 0 || n % 5 === 0) {
            result += n % 3 === 0 ? 'buzz' : '';
            result += n % 5 === 0 ? 'buzz' : '';
        } else {
            result = n;
        }

        console.log(result);
        result = '';
    }

}