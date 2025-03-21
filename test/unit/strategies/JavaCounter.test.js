import { JavaCounter } from "../../../src/strategies/JavaCounter.js";
import readSourceFile from "../../../src/utils/FileReader.js";

import {describe, test} from "node:test";
import {strict as assert} from "node:assert";

const filePath = new URL("../../sourceFiles/example.source.java", import.meta.url);

describe("JavaCounter", () => {
    test("should be defined", () => {
        assert.ok(JavaCounter);
    });

    test("preprocess should work correctly", async () => {
        const data = await readSourceFile(filePath);
        const javaCounter = new JavaCounter(data);
        assert.ok(Array.isArray(javaCounter.lines));
        assert.equal(javaCounter.lines.filter(line => line.match(/\n/g)).length, 0);
        assert.equal(javaCounter.lines.filter(line => line.match(/\t/g)).length, 0);
    });

    test("isBlankLine should work correctly", async () => {
        const data = await readSourceFile(filePath);
        const javaCounter = new JavaCounter(data);
        assert.equal(javaCounter.lines.filter(javaCounter.isBlankLine).length, 3);
    });

    test("isComment should work correctly", async () => {
        const data = await readSourceFile(filePath);
        const javaCounter = new JavaCounter(data);
        assert.equal(javaCounter.lines.filter(javaCounter.isComment).length, 3);
    });

    test("isLoc should work correctly", async () => {
        const data = await readSourceFile(filePath);
        const javaCounter = new JavaCounter(data);
        assert.equal(javaCounter.lines.filter(line => javaCounter.isLoc(line)).length, 6);
    });

    test("countLines should work correctly", async () => {
        const data = await readSourceFile(filePath);
        const javaCounter = new JavaCounter(data);
        const result = javaCounter.countLines();
        assert.equal(result.blankLines, 3);
        assert.equal(result.comments, 3);
        assert.equal(result.loc, 6);
    });
})