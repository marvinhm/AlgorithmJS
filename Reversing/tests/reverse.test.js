const reverse = require('../lib/reverse');

describe('Reverse Tests', () => {
    it("function should take 'a' and return 'a'", () => {
        expect(reverse('a')).toEqual('a')
    });

    it("function should take 'b' and return 'b'", () => {
        expect(reverse('b')).toEqual('b')
    });

    it("function should take 'c' and return 'c'", () => {
        expect(reverse('c')).toEqual('c')
    });

    it("function should take 'ab' and return 'ba'", () => {
        expect(reverse('ab')).toEqual('ba')
    });

    it("function should take 'cd' and return 'dc'", () => {
        expect(reverse('cd')).toEqual('dc')
    });
})