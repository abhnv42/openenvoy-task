import { LanguageCounter } from "./LanguageCounter.js"

export class JavaCounter extends LanguageCounter {
    constructor(fileData) {
        super();
        this.originalData = fileData;
        this.lines = this.preprocess(fileData);
    }

    preprocess(data) {
        return data
            .split("\n")
            .map(line => line.replace(/\t/g, "").trim());
    }
}