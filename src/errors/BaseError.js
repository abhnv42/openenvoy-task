export default class BaseError extends Error {
    constructor(message, code = "ERROR") {
        super(message);
        this.name = this.constructor.name;
        this.code = code;
    }
}