"use strict";

import { LanguageCounter } from "../../../src/strategies/LanguageCounter.js";

import {describe, test} from "node:test";
import {strict as assert} from "node:assert";

describe("LanguageCounter", () => {
    test("should be defined", () => {
        assert.ok(LanguageCounter);
    });

    test("count lines method should not be implemented", () => {
        assert.throws(LanguageCounter.prototype.countLines, { message: "Method not implemented" });
    })

    test("count blank lines method should not be implemented", () => {
        assert.throws(LanguageCounter.prototype.isBlankLine, { message: "Method not implemented" });
    })

    test("count comments method should not be implemented", () => {
        assert.throws(LanguageCounter.prototype.isComment, { message: "Method not implemented" });
    })

    test("count lines of code method should not be implemented", () => {
        assert.throws(LanguageCounter.prototype.isLoc, { message: "Method not implemented" });
    })
})
