describe("Global Variables are awesome", function() {

    var a = 10;

    function one() {
        b = 15;
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

        two();
    }

    it("I can see a, b but not c", function() {
        expect(a + b).toBe(25);
        expect(typeof c == 'undefined').toBe(true);
    });


    one();
});
