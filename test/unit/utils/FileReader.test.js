"use strict";
import readSourceFile from "../../../src/utils/FileReader.js";

import { describe, test } from "node:test";
import { strict as assert } from "node:assert";

const filePath = new URL('../../sourceFiles/example.source.java', import.meta.url);

describe("File Reader Tests", () => {
    test('successfully read a file', async () => {
        assert.doesNotReject(readSourceFile(filePath));
    });

    test('file data should be a string', async () => {
        const data = await readSourceFile(filePath);
        assert.strictEqual(typeof data, "string");
    });

    test('should throw an error if filePath is invalid', async () => {
        assert.rejects(readSourceFile(""), { message: "Invalid file path" });
    })
});