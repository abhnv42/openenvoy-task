import { JavaCounter } from "../../../src/strategies/JavaCounter.js";
import readSourceFile from "../../../src/utils/FileReader.js";
import testFileMetaData from "../../sourceFiles/testFileMetaData.js";

import {describe, test} from "node:test";
import {strict as assert} from "node:assert";

for(const [fileName, expected] of Object.entries(testFileMetaData)) {
    const filePath = new URL(`../../sourceFiles/${fileName}`, import.meta.url);
    describe(`JavaCounter: ${fileName}`, () => {
        test("should be defined", () => {
            assert.ok(JavaCounter);
        });

        test("preprocess should work correctly", async () => {
            const {data, extension} = await readSourceFile(filePath);
            const javaCounter = new JavaCounter(data, extension);
            assert.ok(Array.isArray(javaCounter.lines));
            assert.equal(javaCounter.lines.filter(line => line.match(/\n/g)).length, 0);
            assert.equal(javaCounter.lines.filter(line => line.match(/\t/g)).length, 0);
        });

        test("isBlankLine should work correctly", async () => {
            const {data, extension} = await readSourceFile(filePath);
            const javaCounter = new JavaCounter(data, extension);
            assert.equal(javaCounter.lines.filter(javaCounter.isBlankLine).length, expected.blankLines);
        });

        test("isComment should work correctly", async () => {
            const {data, extension} = await readSourceFile(filePath);
            const javaCounter = new JavaCounter(data, extension);
            assert.equal(javaCounter.lines.filter(line => javaCounter.isComment(line)).length, expected.comments);
        });

        test("isLoc should work correctly", async () => {
            const {data, extension} = await readSourceFile(filePath);
            const javaCounter = new JavaCounter(data, extension);
            assert.equal(javaCounter.lines.filter(line => javaCounter.isLoc(line)).length, expected.loc);
        });

        test("countLines should work correctly", async () => {
            const {data, extension} = await readSourceFile(filePath);
            const javaCounter = new JavaCounter(data, extension);
            const result = javaCounter.countLines();
            assert.equal(result.Blank, expected.blankLines);
            assert.equal(result.Comments, expected.comments);
            assert.equal(result.Code, expected.loc);
            assert.equal(result.Total, expected.total);
        });
    })
}