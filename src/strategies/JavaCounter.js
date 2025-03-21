import { LanguageCounter } from "./LanguageCounter.js"

export class JavaCounter extends LanguageCounter {
    constructor(fileData, extension) {
        super(fileData, extension);
    }
}