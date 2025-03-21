import BaseError from "./BaseError.js";

export default class FileNotSupportedError extends BaseError {
    constructor(extension) {
        super(`File extension not supported: ${extension}`, "FILE_NOT_SUPPORTED");
        this.extension = extension;
    }
}