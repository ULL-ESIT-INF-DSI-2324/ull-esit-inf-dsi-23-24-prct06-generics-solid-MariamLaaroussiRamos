import { expect } from "chai";
import { describe, it, beforeEach } from "mocha";
import { FileReader, FileWriter } from "../src/ejercicio-3";

describe("FileReader tests", () => {
    let fileReader: FileReader;

    beforeEach(() => {
        fileReader = new FileReader("example.txt");
    });

    it("Leer el contenido del archivo", () => {
        const content = fileReader.readFile();
        expect(content).to.equal("This is new content to be written into the file.");
    });
});

describe("FileWriter tests", () => {
    let fileWriter: FileWriter;

    beforeEach(() => {
        fileWriter = new FileWriter("example.txt");
    });

    it("Escribir datos en el archivo", () => {
        const newData = "This is new content to be written into the file.";
        fileWriter.writeFile(newData);
        const content = new FileReader("example.txt").readFile();
        expect(content).to.equal(newData);
    });
});
