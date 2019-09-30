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

    it("function should take 'ef' and return 'fe'", () => {
        expect(reverse('ef')).toEqual('fe')
    });

    it("function should take 'ef' and return 'fe'", () => {
        expect(reverse('ef')).toEqual('fe')
    });

    it("function should take 'abc' and return 'cba'", () => {
        expect(reverse('abc')).toEqual('cba');
    })

    it("function should take 'cba' and return 'abc'", () => {
        expect(reverse('cba')).toEqual('abc');
    })

    it("function should take 'def' and return 'fed'", () => {
        expect(reverse('def')).toEqual('fed');
    })

    it("function should take 'coin' and return 'nioc'", () => {
        expect(reverse('coin')).toEqual('nioc');
    })

    it("function should take 'mobamba' and return 'abmabom'", () => {
      expect(reverse('mobamba')).toEqual('abmabom');
    })

    it("function should keep first letter capitalised if there is a one given'", () => {
      expect(reverse('Marvin')).toEqual('Nivram');
    })

})