(function exec() {
    console.log("Self-Invoking Functions:");
})(); // The function is defined and immediately invoked

// Self-invoking functions are useful for creating a new scope and avoiding polluting the global namespace.
// They can also be used to execute code immediately without having to call the function separately.