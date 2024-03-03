import { expect } from "chai";
import { describe, it } from "mocha";
import { Factura, GeneradorFacturas, GeneradorPDF, GeneradorHTML } from "../src/ejercicio-2";

describe("GeneradorPDF tests", () => {
    let generadorPDF: GeneradorFacturas;

    beforeEach(() => {
        generadorPDF = new GeneradorPDF();
    });

    it("Generar factura en formato PDF", () => {
        const factura = new Factura("Cliente Ejemplo", 100);
        const facturaPDF = generadorPDF.generarFactura(factura);
        expect(facturaPDF).to.equal("Factura PDF para Cliente Ejemplo - Total: 100");
    });
});

describe("GeneradorHTML tests", () => {
    let generadorHTML: GeneradorFacturas;

    beforeEach(() => {
        generadorHTML = new GeneradorHTML();
    });

    it("Generar factura en formato HTML", () => {
        const factura = new Factura("Cliente Ejemplo", 100);
        const facturaHTML = generadorHTML.generarFactura(factura);
        expect(facturaHTML).to.equal("<html><body><h1>Factura HTML para Cliente Ejemplo</h1><p>Total: 100</p></body></html>");
    });
});
