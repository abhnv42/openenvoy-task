import {describe, test} from "node:test";
import {strict as assert} from "node:assert";
import { extname } from "node:path";

import config from "../../config/config.js"
import {Counter} from "../../src/Counter.js"
import testFileMetaData from "../sourceFiles/testFileMetaData.js";

const supportedFiles = Object.keys(testFileMetaData).filter(key => config.supportedExtensions.includes(extname(key)));

for(const fileName of supportedFiles) {
    const expected = testFileMetaData[fileName];
    const filePath = new URL(`../sourceFiles/${fileName}`, import.meta.url);
    
    describe(`Integration Test: ${fileName}`, () => {
        test("check counts", async () => {
            const counter = await Counter.getCounter(filePath);
            const result = counter.countLines();

            assert.equal(result.Blank, expected.blankLines);
            assert.equal(result.Comments, expected.comments);
            assert.equal(result.Code, expected.loc);
            assert.equal(result.Total, expected.total);

        })
    });
}
