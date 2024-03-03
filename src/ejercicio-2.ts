/**
 * Con este diseño, podría agregar nuevos formatos de generación de facturas, creando nuevas clases que implementen la interfaz GeneradorFacturas,
 * sin necesidad de modificar el código. Esto cumple con el Principio de Open/Closed (OCP) de SOLID.
 */

// Interfaz para la generación de facturas
export interface GeneradorFacturas {
  /**
   * Genera una factura en el formato especificado.
   * @param factura - La factura a generar.
   * @returns La factura generada como una cadena de texto.
   */
  generarFactura(factura: Factura): string;
}

// Clase base para representar una factura
export class Factura {
  /**
   * Constructor de la clase Factura.
   * @param cliente - El cliente al que se emite la factura.
   * @param total - El monto total de la factura.
   */
  constructor(public cliente: string, public total: number) {}
}

// Clase para la generación de facturas en formato PDF
export class GeneradorPDF implements GeneradorFacturas {
  /**
   * Genera una factura en formato PDF.
   * @param factura - La factura a generar.
   * @returns La factura generada en formato PDF.
   */
  generarFactura(factura: Factura): string {
    // Implementación para generar la factura en formato PDF
    return `Factura PDF para ${factura.cliente} - Total: ${factura.total}`;
  }
}

// Clase para la generación de facturas en formato HTML
export class GeneradorHTML implements GeneradorFacturas {
  /**
   * Genera una factura en formato HTML.
   * @param factura - La factura a generar.
   * @returns La factura generada en formato HTML.
   */
  generarFactura(factura: Factura): string {
    // Implementación para generar la factura en formato HTML
    return `<html><body><h1>Factura HTML para ${factura.cliente}</h1><p>Total: ${factura.total}</p></body></html>`;
  }
}

// Ejemplo de uso
const factura = new Factura("Cliente Ejemplo", 100);

// Generar factura en formato PDF
const generadorPDF = new GeneradorPDF();
const facturaPDF = generadorPDF.generarFactura(factura);
console.log(facturaPDF);

// Generar factura en formato HTML
const generadorHTML = new GeneradorHTML();
const facturaHTML = generadorHTML.generarFactura(factura);
console.log(facturaHTML);
