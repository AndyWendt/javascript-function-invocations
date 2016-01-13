describe("Function Invocation", function() {

    var obj = {
       run: methodToInvoke
    };

    var obj3 = {
        run: methodToInvoke
    };

    function methodToInvoke() {
        return this;
    }

    it("will have a `this` context of obj", function() {
        expect(obj.run()).toBe(obj);
    });

    it("will have a `this` context of obj3", function() {
        expect(obj3.run()).toBe(obj3);
    });



    (function () {
        'use strict';

        var obj2 = {
           run: useStrictMethodToInvoke
        };

        function useStrictMethodToInvoke() {
            return this;
        }

        it("will have a `this` context of obj2", function() {
            expect(obj2.run()).toBe(obj2);
        });
    })();
});
