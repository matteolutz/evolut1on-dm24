const setResettableTimeout = (callback, delay) => {
    let timeout = setTimeout(callback, delay);

    return {
        reset: () => {
            clearTimeout(timeout);
            timeout = setTimeout(callback, delay);
        },
        clear: () => clearTimeout(timeout)
    };
};

export default setResettableTimeout;