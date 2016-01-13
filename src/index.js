function functionInvocation() {
    return 'function invocation';
}

function functionInvocationThisReturn() {
    return this;
}

describe("Function Invocation", function() {
    it("It can be called as a function", function() {
        expect(functionInvocation()).toBe('function invocation');
    });

    it("It is attached to the window object and thus global", function() {
        expect(window.functionInvocation()).toBe('function invocation');
    });

    it("It's 'this' equals the window object", function() {
        expect(functionInvocationThisReturn()).toBe(window);
    });
});
