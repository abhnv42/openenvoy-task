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
    })
})