"use strict";

import { LanguageCounter } from "../../../src/strategies/LanguageCounter.js";

import {describe, test} from "node:test";
import {strict as assert} from "node:assert";

describe("LanguageCounter", () => {
    test("should be defined", () => {
        assert.ok(LanguageCounter);
    });

    test("preprocess method should be implemented", () => {
        assert.ok(LanguageCounter.prototype.preprocess);
    })

    test("count lines method should be implemented", () => {
        assert.ok(LanguageCounter.prototype.countLines);
    })

    test("count blank lines method should be implemented", () => {
        assert.ok(LanguageCounter.prototype.isBlankLine);
    })

    test("count comments method should be implemented", () => {
        assert.ok(LanguageCounter.prototype.isComment);
    })

    test("count lines of code method should be implemented", () => {
        assert.ok(LanguageCounter.prototype.isLoc);
    })
})
