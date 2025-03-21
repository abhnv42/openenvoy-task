import BaseError from "./BaseError.js";

export default class FileNotFoundError extends BaseError {
    constructor(filePath) {
        super(`File not found: ${filePath}`, "FILE_NOT_FOUND");
        this.filePath = filePath;
    }
}