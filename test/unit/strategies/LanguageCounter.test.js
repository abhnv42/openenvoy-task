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
})
