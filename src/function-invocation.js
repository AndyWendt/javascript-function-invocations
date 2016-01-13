function functionInvocation() {
    return 'function invocation';
}

function functionInvocationThisReturn() {
    return this;
}

describe("Function Invocation", function() {
    it("can be called as a function", function() {
        expect(functionInvocation()).toBe('function invocation');
    });

    it("is attached to the window object and thus global", function() {
        expect(window.functionInvocation()).toBe('function invocation');
    });

    it("'this' equals the window object", function() {
        // in strict mode, the return would be undefined.  See example below
        expect(functionInvocationThisReturn()).toBe(window);
    });

    (function () {
        "use strict";
        var that = this;

        function functionInvocationStrictMode() {
            return this;
        }

        it("`this` is undefined since function was not called as a method in strict mode", function() {
            // see here for an explanation: http://stackoverflow.com/questions/9822561/why-is-this-in-an-anonymous-function-undefined-when-using-strict
            expect(functionInvocationStrictMode()).toBe(undefined);
            expect(that).toBe(undefined);
        });
    })();
});
