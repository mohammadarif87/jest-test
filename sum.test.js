const reverse = require('./reverse');

test('Check that mohammadarif returns firadammahom', () => {

    const answer = reverse("mohammadarif")
    console.log(answer)
    expect(answer).toBe("firadammahom");

});

test('Check the type is string', () => {

    const answer = reverse("yes")
    console.log(answer)
    expect(typeof answer).toBe('string');

});