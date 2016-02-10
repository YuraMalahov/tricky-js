function bind(func, context) {
    return function() {
        return func.apply(context, arguments);
    };
}

function bindLate(context, funcName) {
    return function() {
        return context[funcName].apply(context, arguments);
    };
}
