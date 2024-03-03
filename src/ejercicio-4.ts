/**
 * Sí, el código propuesto no cumple el Principio de Segregación de Interfaces (ISP) de SOLID. 
 * El motivo es que la interfaz PrintableScannable es demasiado genérica y obliga a todas las clases que la implementan 
 * a proporcionar implementaciones para ambos métodos print() y scan(), incluso si una clase solo necesita uno de los dos métodos.
 * 
 * Para corregir esto, podemos dividir la interfaz en dos interfaces más específicas, una para la funcionalidad de impresión
 * y otra para la funcionalidad de escaneo. Aquí tienes un diseño alternativo que cumple con los principios SOLID:
 */

/**
 * Interfaz que define la funcionalidad de impresión.
 */
export interface Printable {
  /**
   * Método para imprimir.
   */
  print(): void;
}

/**
 * Interfaz que define la funcionalidad de escaneo.
 */
export interface Scannable {
  /**
   * Método para escanear.
   */
  scan(): void;
}

/**
 * Clase que implementa la funcionalidad de impresión y escaneo.
 */
export class PrinterScanner implements Printable, Scannable {
  print(): void {
    console.log('Printing...');
  }

  scan(): void {
    console.log('Scanning...');
  }
}

// Client code
const printerScanner = new PrinterScanner();
// Printing
printerScanner.print();
// Scanning
printerScanner.scan();


// Con este diseño, cada clase implementa una interfaz específica que contiene solo los métodos necesarios para su funcionalidad correspondiente. 
// Esto hace que el código sea más cohesivo y sigue el Principio de Segregación de Interfaces (ISP) de SOLID
