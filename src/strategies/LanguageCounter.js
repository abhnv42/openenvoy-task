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
        let total = this.lines.length;

        for(let i = 0; i < this.lines.length; i++) {
            const currentLine = this.lines[i];
            if(this.isBlankLine(currentLine)) ++blankLines
            else if(this.isComment(currentLine)) ++comments
            else if(this.isLoc(currentLine)) ++loc;
        }

        return {
            Blank: blankLines,
            Comments: comments,
            Code: loc,
            Total: total
        };
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