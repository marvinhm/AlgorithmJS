
const fizzbuzz = (num) => {
    if (num%3 == 0 && num%5 == 0 && num != 0) {
        return "FizzBuzz";
    } else if (num%3 == 0 && num != 0) {
        return "Fizz"
    } else if (num%5 == 0 && num != 0) {
        return "Buzz";
    } else {
        return num;
    }

}

let demo = () => {
    for(var i = 0; i<100; i++) {
        console.log(`For the number: ${i}: `, fizzbuzz(i));
    }
}

demo();

module.exports = fizzbuzz;