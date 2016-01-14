describe("Call() Invocation", function() {
    var obj = {score: 500};
    var obj2 = {score: 5000};

    function test(person, descriptive) {
        return person + ' scored ' + this.score + ' and that is ' + descriptive;
    }

    it("will have a `this` context of obj", function() {
        expect(test.call(obj, 'johnny','horrible')).toBe('johnny scored 500 and that is horrible');
    });

    it("will have a `this` context of obj2", function() {
        expect(test.call(obj2, 'jimmy', 'great')).toBe('jimmy scored 5000 and that is great');
    });
});
