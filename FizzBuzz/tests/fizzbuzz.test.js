const Fizzbuzz = require('../src/fizzbuzz');

describe("Fizzbuzz Test", () => {
    it('Should return the word Fizz if argument is 3', () => {
        expect(Fizzbuzz(3)).toEqual('Fizz') 
    });

    it('Should return the word Buzz if argument is 5', () => {
        expect(Fizzbuzz(5)).toEqual('Buzz') 
    });

    it('Should return the word Fizz if argument is 6', () => {
        expect(Fizzbuzz(6)).toEqual('Fizz') 
    });

    it('Should return the word Buzz if argument is 10', () => {
        expect(Fizzbuzz(10)).toEqual('Buzz') 
    });

    it('Should return 4 if argument is 4', () => {
        expect(Fizzbuzz(4)).toEqual(4) 
    });

    it('Should return the word FizzBuzz if argument is 15', () => {
        expect(Fizzbuzz(15)).toEqual("FizzBuzz") 
    });

    it('Should return the word FizzBuzz if argument is 30', () => {
        expect(Fizzbuzz(30)).toEqual("FizzBuzz") 
    });

    it('Should return the word FizzBuzz if argument is 30', () => {
        expect(Fizzbuzz(30)).toEqual("FizzBuzz") 
    });

    it('Should return the 0 if argument is 0', () => {
        expect(Fizzbuzz(0)).toEqual(0) 
    });
});