describe("Constructor Invocation", function() {
    var obj = new BaseConstructor();
    var obj1 = new BaseConstructor();
    var returned = new ReturnThis();

    function BaseConstructor () {
        this.run = function () { return this; };
    }

    function ReturnThis() { this.a = 50; }

    it("will have a `this` context of obj", function() {
        expect(obj.run()).toBe(obj);
    });

    it("will have a `this` context of obj2", function() {
        expect(obj1.run()).toBe(obj1);
    });

    it("will automatically return this", function() {
        expect(returned.a).toBe(50);
    });
});
