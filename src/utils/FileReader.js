"use strict";

import { readFile } from "node:fs/promises"
import { extname } from "node:path";

import { FileNotFoundError, FileNotSupportedError } from "../errors/index.js";
import CONFIG from '../../config/config.js'

/**
 * 
 * @param {URL} filePath
 * @returns {string}
 */
export default async function readSourceFile(filePath) {
    try {
        const data = await readFile(filePath, { encoding: 'utf-8' });

        const extension = extname(filePath.toString());
        if(!CONFIG.supportedExtensions.includes(extension)) throw new FileNotSupportedError(extension);

        return {data, extension};
    } catch(error) {
        if(error.code === "ENOENT") {
            throw new FileNotFoundError(filePath);
        }
        throw error;
    }
    
}