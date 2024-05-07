const capitalizeFirstLetter = require('./capitalize')


test('Every letter of a given phrase should be capitalized', () => {


    expect(capitalizeFirstLetter('hello world')).toBe('Hello World')
    expect(capitalizeFirstLetter('america is a continent')).toBe('America Is A Continent')
    expect(capitalizeFirstLetter('god is king')).toBe('God Is King')


})
