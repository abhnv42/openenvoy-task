import config from "../../config/config.js";

export class LanguageCounter {

    constructor(fileData, extension) {
        this.originalData = fileData;
        this.extension = extension.split(".").join("");
        this.lines = this.preprocess(fileData);
    }

    preprocess(data) {
        return data
            .split("\n")
            .map(line => line.replace(/\t/g, "").trim());
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

    isBlankLine(line) {
        return line.length === 0;
    }

    isComment(line) {
        return line.match(config.syntaxInfo[this.extension].commentRegex)
    }

    isLoc(line) {
        return !this.isBlankLine(line) && !this.isComment(line);
    }
}