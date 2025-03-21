import {JavaCounter} from "../strategies/JavaCounter.js";
import readSourceFile from "../utils/FileReader.js";

export class Counter {
    static async getCounter(filePath) {
        const {data, extension} = await readSourceFile(filePath);
        switch(extension) {
            case ".java": {
                return new JavaCounter(data, extension);
            }
        }
    }
}