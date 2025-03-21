import { JavaCounter } from "../../../src/strategies/JavaCounter.js";

import {describe, test} from "node:test";
import {strict as assert} from "node:assert";

describe("JavaCounter", () => {
    test("should be defined", () => {
        assert.ok(JavaCounter);
    });
})