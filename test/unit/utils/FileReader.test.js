"use strict";
import readSourceFile from "../../../src/utils/FileReader.js";
import * as CONFIG from "../../../config/config.js"

import { describe, test } from "node:test";
import { strict as assert } from "node:assert";

let filePath = new URL('../../sourceFiles/example.source.java', import.meta.url);

describe("File Reader Tests", () => {
    test('successfully read a file', async () => {
        assert.doesNotReject(readSourceFile(filePath));
    });

    test('file data should be a string', async () => {
        const data = await readSourceFile(filePath);
        assert.strictEqual(typeof data, "string");
    });

    test('should throw an error if filePath is invalid', async () => {filePath
        filePath = "";
        assert.rejects(readSourceFile(filePath), { message: `File not found: ${filePath}` });
    })

    test('should throw an error if provided file is unsupported', async () => {
        filePath = new URL("../../sourceFiles/example.source.js", import.meta.url);
        const extension = filePath.toString().match(CONFIG.extension);
        assert.rejects(readSourceFile(filePath), { message: `Extension not supported: ${extension}` });
    })
});