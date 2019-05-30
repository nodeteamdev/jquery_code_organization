/**
 * @abstract
 * @class Module
 */
class Module {
    /**
     * Creates an instance of Module.
     * @this {Module}
     * @memberof Module
     */
    constructor() {
        if (typeof this.init !== 'function') {
            throw new TypeError('Please implement abstract method @init.');
        }

        if (typeof this.bindElementsControls !== 'function') {
            throw new TypeError('Please implement abstract method @bindElementsControls.');
        }

        if (typeof this.bindHandlers !== 'function') {
            throw new TypeError('Please implement abstract method @bindHandlers.');
        }
    }
}

window.Modules = window.Modules || new Map();

window.Modules.set('Module', Module);