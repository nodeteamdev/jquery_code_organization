(() => {
    // EXPORT
    const Module = Modules.get('Module');
    const FirstModule = Modules.get('FirstModule');

    // PRIVATE METHODS
    const sayBye = Symbol('sayBye');

    /**
     * @class SecondModule
     * @extends Module
     */
    class SecondModule extends Module {
        /**
         * Creates an instance of SecondModule.
         * @this SecondModule
         * @memberof SecondModule
         */
        constructor() {
            super();
            this.elements = {};
            this.init();
        }

        /**
         * @public
         * @returns {string} hello
         * @memberof SecondModule
         */
        writeHelloToConsole() {
            return FirstModule.getHelloString();
        }

        /**
         * @public
         * @returns
         * @memberof SecondModule
         */
        [sayBye]() {
            return console.log('goodbye!');
        }

        /**
         * @private
         * @description bind handlers to DOM
         * @return {void}
         * @memberof SecondModule
         */
        bindHandlers() {
            this.elements.title.on('click', this[sayBye]);
        }

        /**
         * @private
         * @description save DOM elements
         * @return {void}
         * @memberof SecondModule
         */
        bindElementsControls() {
            // global
            this.elements.title = $('H1');
        }

        init() {
            this.bindElementsControls();
            this.bindHandlers();
        }
    }

    // EXPORT
    Modules.set('SecondModule', SecondModule);
})();