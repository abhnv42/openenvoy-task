"use strict";
import readSourceFile from "../../../src/utils/FileReader.js";
import { extname } from "node:path";

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

    test('should throw an error if filePath is invalid', async () => {filePath
        const pathForThisTest = new URL('file:///this/does/not/exist');
        await assert.rejects(readSourceFile(pathForThisTest), { message: `File not found: ${pathForThisTest.toString()}` });
    })


    test('should throw an error if provided file is unsupported', async () => {
        const pathForThisTest = new URL("../../sourceFiles/example.source.js", import.meta.url);
        await assert.rejects(
            readSourceFile(pathForThisTest),
            { message: `File extension not supported: ${extname(pathForThisTest.toString())}`}
        );
    })
});