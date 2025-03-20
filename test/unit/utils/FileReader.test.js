"use strict";
import readSourceFile from "../../../src/utils/FileReader.js";

import { describe, test } from "node:test";
import { strict as assert } from "node:assert";

describe("File Reader Tests", () => {
    test('successfully read a file', async () => {
        const filePath = new URL('../../sourceFiles/example.source.java', import.meta.url);
        assert.doesNotReject(readSourceFile(filePath));
    });

    test('')
});