
const init = () => {
    for (const [className, Extension] of Modules) {
        if (typeof className !== 'string') {
            throw new TypeError('@param className need to be string');
        }

        if (className !== 'Module' && typeof Extension === 'function') {
            const _Extension = new Extension();

            Modules.set(className, _Extension);
        }
    }

}

// START
$(init);