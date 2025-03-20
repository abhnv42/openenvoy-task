"use strict";

import { readFile } from "node:fs/promises"

/**
 * 
 * @param {URL} filePath
 * @returns {string}
 */
export default async function readSourceFile(filePath) {
    const data = await readFile(filePath, { encoding: 'utf-8' });
    return data;
}