"use strict";

import { LanguageCounter } from "../../../src/strategies/LanguageCounter.js";

import {describe, test} from "node:test";
import {strict as assert} from "node:assert";

describe("LanguageCounter tests", () => {
    test("LanguageCounter exists", () => {
        assert.ok(LanguageCounter);
    });

    test("count lines method should not be implemented", () => {
        assert.throws(LanguageCounter.prototype.countLines, { message: "Method not implemented" });
    })

    test("count blank lines method should not be implemented", () => {
        assert.throws(LanguageCounter.prototype.countBlankLines, { message: "Method not implemented" });
    })

    test("count comments method should not be implemented", () => {
        assert.throws(LanguageCounter.prototype.countComments, { message: "Method not implemented" });
    })

    test("count lines of code method should not be implemented", () => {
        assert.throws(LanguageCounter.prototype.countLoc, { message: "Method not implemented" });
    })
})
