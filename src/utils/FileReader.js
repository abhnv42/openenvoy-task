"use strict";

import { readFile } from "node:fs/promises"
import { FileNotFoundError } from "../errors/index.js";

/**
 * 
 * @param {URL} filePath
 * @returns {string}
 */
export default async function readSourceFile(filePath) {
    try {
        const data = await readFile(filePath, { encoding: 'utf-8' });
        return data;
    } catch(error) {
        if(error.code === "ENOENT") {
            throw new FileNotFoundError(filePath);
        }
        throw error;
    }
    
}