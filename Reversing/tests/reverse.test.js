const reverse = require('../lib/reverse');

describe('Reverse Tests', () => {
    it('initial test', () => {
        expect(reverse('a')).toEqual('a')
    })

    it('initial test', () => {
        expect(reverse('b')).toEqual('b')
    })

    it('initial test', () => {
        expect(reverse('c')).toEqual('c')
    })


    it('initial test', () => {
        expect(reverse('ab')).toEqual('ba')
    })
})