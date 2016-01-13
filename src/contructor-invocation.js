describe("Constructor Invocation", function() {
    var obj = new BaseObj();
    var obj1 = new BaseObj();

    function BaseObj () {
        this.run = function () { return this; };
    }

    it("will have a `this` context of obj", function() {
        expect(obj.run()).toBe(obj);
    });

    it("will have a `this` context of obj2", function() {
        expect(obj1.run()).toBe(obj1);
    });
});
