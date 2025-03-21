import {describe, test} from "node:test";
import {strict as assert} from "node:assert";

import { Counter } from "../../../src/factory/CounterFactory.js";

const javaFilePath = new URL("../../sourceFiles/example.source.java", import.meta.url);

describe("Counter", () => {
    test("get correct counter based on file extension", async () => {
        const counter = await Counter.getCounter(javaFilePath);
        assert(counter.extension, ".java");
    });
})