(() => {
    // EXPORT
    const Module = Modules.get('Module');

    // PRIVATE METHODS
    const sayHi = Symbol('sayHi');

    /**
     * @class FirstModule
     * @extends Module
     */
    class FirstModule extends Module {
        /**
         * Creates an instance of FirstModule.
         * @this FirstModule
         * @memberof FirstModule
         */
        constructor() {
            super();
            this.elements = {};
            this.init();
            this.name = 'FirstModule';
        }

        /**
         * @public
         * @returns {string} hello
         * @memberof FirstModule
         */
        getHelloString() {
            return `Hello from ${this.name}`;
        }

        /**
         * @public
         * @returns
         * @memberof FirstModule
         */
        [sayHi]() {
            return alert('Hi');
        }

        /**
         * @private
         * @description bind handlers to DOM
         * @return {void}
         * @memberof FirstModule
         */
        bindHandlers() {
            this.elements.body.on('click', this[sayHi]);
        }

        /**
         * @private
         * @description save DOM elements
         * @return {void}
         * @memberof FirstModule
         */
        bindElementsControls() {
            // global
            this.elements.body = $('BODY');
        }

        init() {
            this.bindElementsControls();
            this.bindHandlers();
        }
    }

    // EXPORT
    Modules.set('FirstModule', FirstModule);
})();