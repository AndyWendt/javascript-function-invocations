describe("Global Variables are awesome", function() {

    var a = 10;

    // This is function hoisting :)
    one();

    function one() {
        b = 15;

        // This is function hoisting :)
        two();

        function two() {
            var c = 20;
            it("I can see a, b and c", function() {
                expect(a + b + c).toBe(45);
            });
        }

        it("I can see a, b but not c", function() {
            expect(a + b).toBe(25);
            expect(typeof c == 'undefined').toBe(true);
        });
    }

    it("I can see a, b but not c", function() {
        expect(a + b).toBe(25);
        expect(typeof c == 'undefined').toBe(true);
    });
});
