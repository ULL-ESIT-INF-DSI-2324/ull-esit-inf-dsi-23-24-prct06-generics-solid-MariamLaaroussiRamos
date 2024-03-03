import { expect } from "chai";
import { describe, it } from "mocha";
import { Printable, Scannable, PrinterScanner } from "../src/ejercicio-4";

describe("PrinterScanner tests", () => {
    it("Should print correctly", () => {
        const printerScanner = new PrinterScanner();
        const result = captureConsoleOutput(() => {
            printerScanner.print();
        });

        expect(result).to.include('Printing...');
    });

    it("Should scan correctly", () => {
        const printerScanner = new PrinterScanner();
        const result = captureConsoleOutput(() => {
            printerScanner.scan();
        });

        expect(result).to.include('Scanning...');
    });
});

function captureConsoleOutput(callback: () => void): string {
    const log = console.log;
    let output = '';
    console.log = (message: string) => {
        output += message + '\n';
    };

    callback();

    console.log = log;

    return output;
}
