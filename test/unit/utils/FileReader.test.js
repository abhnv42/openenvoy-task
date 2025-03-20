"use strict";
import readSourceFile from "../../../src/utils/FileReader.js";

import { describe, test } from "node:test";
import { strict as assert } from "node:assert";

const filePath = new URL('../../sourceFiles/example.source.java', import.meta.url);

describe("File Reader Tests", () => {
    test('successfully read a file', async () => {
        assert.doesNotReject(readSourceFile(filePath));
    });
});