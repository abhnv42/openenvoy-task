import config from "../../config/config.js";
import { LanguageCounter } from "./LanguageCounter.js"

export class JavaCounter extends LanguageCounter {
    constructor(fileData) {
        super();
        this.originalData = fileData;
        this.lines = this.preprocess(fileData);
    }

    countLines() {
        let comments = 0;
        let blankLines = 0;
        let loc = 0;

        for(let i = 0; i < this.lines.length; i++) {
            const currentLine = this.lines[i];
            if(this.isBlankLine(currentLine)) ++blankLines;
            if(this.isComment(currentLine)) ++comments;
            if(this.isLoc(currentLine)) ++loc;
        }

        return {blankLines, comments, loc};
    }

    preprocess(data) {
        return data
            .split("\n")
            .map(line => line.replace(/\t/g, "").trim());
    }

    isBlankLine(line) {
        return line.length === 0;
    }

    isComment(line) {
        return line.match(config.syntaxInfo.java.commentRegex)
    }

    isLoc(line) {
        return !this.isBlankLine(line) && !this.isComment(line);
    }
}