[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/G0JN8jPZ)
# Práctica 6: Clases e interfaces genéricas. Principios SOLID #
## Introducción #
En esta práctica, cada ejercicio está diseñado para explorar y aplicar conceptos clave, como el uso de clases e interfaces genéricas y la adhesión a los principios SOLID de diseño orientado a objetos. A través de estos ejercicios, aprenderemos a crear diseños flexibles, extensibles y mantenibles, mientras mejoramos nuestras habilidades de programación en TypeScript.
## Objetivo ##
El objetivo de esta práctica es profundizar en el uso de TypeScript mediante la resolución de una serie de ejercicios que abarcan el diseño e implementación de clases e interfaces genéricas, así como la aplicación de los principios SOLID de diseño orientado a objetos. Al completar estos ejercicios, espero adquirir una comprensión más sólida de cómo utilizar TypeScript de manera efectiva para desarrollar software modular, flexible y fácilmente mantenible.
## Ejercicios ##
### La mudanza ###
Este código implementa una estructura para gestionar cajas que contienen enseres, donde un enser puede ser cualquier objeto que implemente la interfaz Enser, que tiene una propiedad nombre.
Interfaz Enser:
```
export interface Enser {
  nombre: string;
}
```
Define la estructura básica de un enser, con una propiedad nombre de tipo string.
Clase genérica Caja<T>:
```
export class Caja<T extends Enser> {
  private enseres: T[] = [];
  agregarEnser(enser: T): void {
    this.enseres.push(enser);
  }
```
Representa una caja que puede contener enseres de cualquier tipo que implemente la interfaz Enser.
```
/**
 * Interfaz para los enseres.
 */
export interface Enser {
  nombre: string;
}

/**
 * Clase genérica para representar una caja que puede contener enseres.
 * @template T - Tipo de enser que contendrá la caja.
 */
export class Caja<T extends Enser> {
  private enseres: T[] = [];

  /**
   * Método para añadir un enser a la caja.
   * @param enser - Enser a añadir.
   */
  agregarEnser(enser: T): void {
    this.enseres.push(enser);
  }

  /**
   * Método para eliminar un enser de la caja.
   * @param enser - Enser a eliminar.
   */
  eliminarEnser(enser: T): void {
    this.enseres = this.enseres.filter(e => e !== enser);
  }

  /**
   * Método para listar el contenido de la caja por consola.
   */
  listarContenido(): void {
    console.log("Contenido de la caja:");
    this.enseres.forEach(enser => console.log(enser.nombre));
  }

  /**
   * Método para buscar un enser por nombre.
   * @param nombre - Nombre del enser a buscar.
   * @returns El enser encontrado o undefined si no se encuentra.
   */
  buscarPorNombre(nombre: string): T | undefined {
    return this.enseres.find(enser => enser.nombre === nombre);
  }
}

/**
 * Clase para representar utensilios de cocina.
 */
export class UtensilioCocina implements Enser {
  constructor(public nombre: string) {}
}

/**
 * Clase para representar cosas de habitación.
 */
export class Habitacion implements Enser {
  constructor(public nombre: string) {}
}

// Ejemplo de uso
const cajaUtensiliosCocina = new Caja<UtensilioCocina>();
cajaUtensiliosCocina.agregarEnser(new UtensilioCocina("Cuchillo"));
cajaUtensiliosCocina.agregarEnser(new UtensilioCocina("Sartén"));

const cajahabitacion = new Caja<Habitacion>();
cajahabitacion.agregarEnser(new Habitacion("Almohada"));
cajahabitacion.agregarEnser(new Habitacion("Lámpara"));

// Ejemplo de eliminación de un enser de la caja de utensilios de cocina
const enserAEliminar = cajaUtensiliosCocina.buscarPorNombre("Sartén");
if (enserAEliminar) {
  cajaUtensiliosCocina.eliminarEnser(enserAEliminar);
  console.log(`Se eliminó el enser ${enserAEliminar.nombre} de la caja de utensilios de cocina.`);
} else {
  console.log("No se encontró el enser a eliminar.");
}

// Listar el contenido de cada caja
console.log("Contenido de la caja de utensilios de cocina:");
cajaUtensiliosCocina.listarContenido();

console.log("Contenido de la caja de cosas de habitación:");
cajahabitacion.listarContenido();
```
Tiene métodos para agregar, eliminar, listar el contenido y buscar enseres por nombre.
La clase es genérica, lo que significa que se puede especificar el tipo de enser que contendrá la caja mediante el parámetro T.
Los métodos agregarEnser y eliminarEnser manipulan la lista de enseres de la caja.
listarContenido imprime por consola los nombres de todos los enseres contenidos en la caja.
buscarPorNombre busca un enser por su nombre en la caja y devuelve el enser encontrado o undefined si no se encuentra.
Clases UtensilioCocina y Habitacion:
Implementan la interfaz Enser y representan diferentes tipos de enseres.
Cada clase tiene un constructor que recibe el nombre del enser como argumento y lo asigna a la propiedad nombre.

### Facturas en diferentes formatos ###
```
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
```
Este código implementa un sistema de generación de facturas en diferentes formatos (PDF y HTML) siguiendo los principios SOLID, en particular el Principio de Open/Closed (OCP).

Interfaz GeneradorFacturas:
Define un contrato para generar facturas en diferentes formatos.
Tiene un método generarFactura que toma una instancia de la clase Factura y devuelve la factura generada como una cadena de texto.
Clase Factura:
Representa una factura con información sobre el cliente y el monto total.
Tiene un constructor que acepta el nombre del cliente y el total de la factura como argumentos.
Clase GeneradorPDF:
Implementa la interfaz GeneradorFacturas para generar facturas en formato PDF.
Tiene un método generarFactura que devuelve la factura en formato PDF como una cadena de texto.
Clase GeneradorHTML:
Implementa la interfaz GeneradorFacturas para generar facturas en formato HTML.
Tiene un método generarFactura que devuelve la factura en formato HTML como una cadena de texto.
Ejemplo de uso:
Se crea una instancia de la clase Factura con un cliente de ejemplo y un monto total de 100.
Se utiliza un objeto GeneradorPDF para generar la factura en formato PDF y se imprime por consola.
Se utiliza un objeto GeneradorHTML para generar la factura en formato HTML y se imprime por consola.
El diseño de este código cumple con el Principio de Open/Closed (OCP) de SOLID, ya que permite agregar nuevos formatos de generación de facturas (por ejemplo, XML, CSV, etc.) creando nuevas clases que implementen la interfaz GeneradorFacturas sin necesidad de modificar el código existente. Esto proporciona una extensibilidad fácil y evita la necesidad de cambiar el código actual cuando se agregan nuevos formatos de factura.
### Gestor de ficheros ###
```
/**
 * El código proporcionado viola el Principio de Responsabilidad Única (SRP) de SOLID. 
 * Este principio establece que una clase debe tener una sola razón para cambiar, es decir, debe tener una sola responsabilidad.
 * 
 * En el código proporcionado, la clase FileManager tiene la responsabilidad de leer archivos y escribir en ellos. 
 * Sin embargo, estas son dos responsabilidades distintas y podrían cambiar por diferentes razones. Por ejemplo, las razones para cambiar 
 * la lógica de lectura de archivos pueden ser diferentes de las razones para cambiar la lógica de escritura de archivos. 
 * Por lo tanto, tener estas dos responsabilidades en la misma clase viola el principio SRP.
 * 
 * Para mejorar el diseño y cumplir con el principio SRP, podemos separar las responsabilidades de lectura y escritura en clases separadas. 
 * Aquí tienes un diseño alternativo que cumple con el principio SRP
 */

import * as fs from 'fs';

// Clase para la lectura de archivos
export class FileReader {
  /**
   * Constructor de la clase FileReader.
   * @param filePath - Ruta del archivo a leer.
   */
  constructor(private filePath: string) {}

  /**
   * Método para leer el contenido del archivo.
   * @returns El contenido del archivo como una cadena de texto.
   */
  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, 'utf-8');
      return content;
    } catch (error) {
      console.error('Error al leer el archivo:', error.message);
      return '';
    }
  }
}

// Clase para la escritura de archivos
export class FileWriter {
  /**
   * Constructor de la clase FileWriter.
   * @param filePath - Ruta del archivo en el que escribir.
   */
  constructor(private filePath: string) {}

  /**
   * Método para escribir datos en el archivo.
   * @param data - Datos a escribir en el archivo.
   */
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, 'utf-8');
      console.log('Archivo escrito exitosamente.');
    } catch (error) {
      console.error('Error al escribir en el archivo:', error.message);
    }
  }
}

// Client code
const filePath = 'example.txt';

// Reading content
const fileReader = new FileReader(filePath);
const currentContent = fileReader.readFile();
console.log('Current content:', currentContent);

// Writing content
const fileWriter = new FileWriter(filePath);
const newData = 'This is new content to be written into the file.';
fileWriter.writeFile(newData);

// Updating content
const updatedContent = fileReader.readFile();
console.log('Updated content:', updatedContent);
```
Este código no cumple el Principio de Responsabilidad Única (SRP) de SOLID. El SRP establece que una clase debe tener una única razón para cambiar, es decir, debe tener una sola responsabilidad.

En el código proporcionado, la clase FileManager tiene la responsabilidad de leer archivos y escribir en ellos, lo cual son dos responsabilidades distintas y podrían cambiar por diferentes razones. Por ejemplo, la lógica de lectura de archivos podría cambiar por razones diferentes a la lógica de escritura de archivos. Por lo tanto, tener estas dos responsabilidades en la misma clase no cumple el principio SRP.

Para mejorar el diseño y cumplir con el principio SRP, el código propuesto introduce dos clases separadas: FileReader y FileWriter. Estas clases tienen responsabilidades únicas: FileReader se encarga de leer archivos y FileWriter se encarga de escribir en archivos.

Clase FileReader:
Esta clase se encarga de leer el contenido de un archivo.
Tiene un método readFile que lee el contenido del archivo especificado por la ruta proporcionada.
Clase FileWriter:
Esta clase se encarga de escribir datos en un archivo.
Tiene un método writeFile que escribe los datos proporcionados en el archivo especificado por la ruta.
Cliente (Client code):
El código cliente demuestra cómo se utilizan las clases FileReader y FileWriter para leer, escribir y actualizar el contenido de un archivo.
Se crea una instancia de FileReader para leer el contenido actual del archivo.
Se crea una instancia de FileWriter para escribir nuevos datos en el archivo.
Se actualiza el contenido del archivo leyendo nuevamente su contenido después de escribir en él.
### Impresoras y escáneres ###
```
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
```
En el código original, la interfaz PrintableScannable era demasiado genérica y obligaba a todas las clases que la implementaban a proporcionar implementaciones para ambos métodos print() y scan(), incluso si una clase solo necesitaba uno de los dos métodos.

Para solucionar esto, se ha dividido la interfaz en dos interfaces más específicas: Printable y Scannable. Ahora, las clases pueden implementar solo la interfaz correspondiente a la funcionalidad que necesitan, lo que mejora la cohesión y evita la dependencia de métodos no utilizados.

Interfaz Printable:
Define la funcionalidad de impresión.
Contiene un único método print() para imprimir.
Interfaz Scannable:
Define la funcionalidad de escaneo.
Contiene un único método scan() para escanear.
Clase PrinterScanner:
Implementa ambas interfaces Printable y Scannable.
Proporciona implementaciones para los métodos print() y scan().
Cliente (Client code):
Crea una instancia de PrinterScanner.
Llama a los métodos print() y scan() en la instancia para realizar la impresión y el escaneo respectivamente.
### Servicio de mensajería ###
```
/**
 * Sí, el código propuesto no cumple el Principio de Inversión de Dependencias (DIP) de SOLID. La clase Notifier depende directamente de las implementaciones concretas EmailService y ShortMessageService, en lugar de depender de abstracciones.
 * Esto hace que Notifier esté fuertemente acoplado a estas implementaciones concretas, lo que dificulta la extensibilidad y la modificación del código en el futuro.
 * 
 * Para mejorar el diseño y cumplir con el principio DIP, podemos introducir una interfaz común para los servicios de notificación y hacer que Notifier dependa de esta interfaz en lugar de las implementaciones concretas.
 * Aquí tienes un diseño alternativo que cumple con el principio DIP:
 */

/**
 * Interface for notification services
 */
export interface NotificationService {
  /**
   * Sends a notification message.
   * @param message - The message to send.
   */
  notify(message: string): void;
}

/**
 * Class that allows notifications by email to be sent
 */
export class EmailService implements NotificationService {
  /**
   * Sends a notification message by email.
   * @param message - The message to send.
   */
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}

/**
 * Class that allows notifications by SMS to be sent
 */
export class ShortMessageService implements NotificationService {
  /**
   * Sends a notification message by SMS.
   * @param message - The message to send.
   */
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}

/**
 * Class that makes use of different types of services to perform notifications
 */
export class Notifier {
  /**
   * Constructor of Notifier class.
   * @param notificationService - The notification service to use.
   */
  constructor(private notificationService: NotificationService) {}

  /**
   * Sends a notification message using the provided notification service.
   * @param message - The message to send.
   */
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}

// Client code
const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification('Hello World!');

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification('Hello World!');


/* Con este diseño, Notifier depende de la interfaz NotificationService, lo que permite que pueda utilizar cualquier implementación que cumpla con esta interfaz sin necesidad de modificar el código de Notifier.
 Esto sigue el Principio de Inversión de Dependencias (DIP) de SOLID y hace que el código sea más flexible y fácil de mantener.
 */
```
El diseño propuesto mejora el cumplimiento del Principio de Inversión de Dependencias (DIP) al hacer que la clase Notifier dependa de la abstracción NotificationService en lugar de depender directamente de las implementaciones concretas (EmailService y ShortMessageService). Esto significa que Notifier está desacoplado de las implementaciones concretas de los servicios de notificación, lo que facilita la extensibilidad y la modificación del código en el futuro. Ahora, Notifier puede utilizar cualquier implementación que cumpla con la interfaz NotificationService sin necesidad de modificar su código.
Interfaz NotificationService:

Define una interfaz común para los servicios de notificación.
Contiene un método notify(message: string) que permite enviar un mensaje de notificación.
Clases EmailService y ShortMessageService:

Implementan la interfaz NotificationService.
Proporcionan implementaciones específicas para enviar notificaciones por correo electrónico y SMS, respectivamente.
Ambas clases tienen un método notify(message: string) que imprime el mensaje de notificación correspondiente.
Clase Notifier:

Utiliza el patrón de inyección de dependencias en su constructor para recibir un servicio de notificación.
Tiene un método sendNotification(message: string) que utiliza el servicio de notificación proporcionado para enviar el mensaje.
Cliente (Client code):

Crea instancias de Notifier pasando diferentes implementaciones de NotificationService (en este caso, EmailService y ShortMessageService).
Llama al método sendNotification(message: string) en cada instancia para enviar un mensaje de notificación.

### Modificación ###
Este código implementa un sistema de colecciones que son tanto coleccionables como buscables.
Interfaz Collectable<T>:
```
export interface Collectable<T> {
  addItem(newItem: T): void;
  getItem(index: number): T | undefined;
  removeItem(item: T): void;
  getNumberOfItems(): number;
}
```
Esta interfaz define un conjunto de métodos que deben ser implementados por cualquier clase que quiera ser coleccionable.
Los métodos son:
addItem(newItem: T): void: Añade un nuevo elemento a la colección.
getItem(index: number): T | undefined: Devuelve el elemento en la posición especificada o undefined si no existe.
removeItem(item: T): void: Elimina un elemento de la colección.
getNumberOfItems(): number: Devuelve el número total de elementos en la colección.
Interfaz Searchable<T>:
```
export interface Searchable<T> {
  search(term: T): T[];
}
```
Esta interfaz define un método search que debe ser implementado por cualquier clase que desee ser buscable.
El método search toma un término de búsqueda y devuelve una lista de elementos que coinciden con ese término.
Clase abstracta SearchableCollection<T>:
```
export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
  protected items: T[];

  constructor(items: T[] = []) {
    this.items = items;
  }

  addItem(item: T): void {
    this.items.push(item);
  }

  getItem(index: number): T | undefined {
    return this.items[index];
  }

  removeItem(item: T): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getNumberOfItems(): number {
    return this.items.length;
  }

  abstract search(term: T): T[];
}
```
Esta es una clase abstracta genérica que implementa tanto la interfaz Collectable como Searchable.
Contiene una matriz protegida items para almacenar los elementos de la colección.
Implementa todos los métodos de la interfaz Collectable, mientras que el método search de la interfaz Searchable es declarado como abstracto. Esto significa que las clases que extiendan SearchableCollection deben proporcionar su propia implementación de search.
El constructor permite inicializar la colección con una matriz opcional de elementos.
Clase NumericSearchableCollection:
```
export class NumericSearchableCollection extends SearchableCollection<number> {
  search(term: number): number[] {
    return this.items.filter(item => item === term);
  }
}
```
Esta clase extiende SearchableCollection y especifica el tipo number.
Implementa el método search, que filtra los elementos numéricos de la colección que coinciden con el término de búsqueda proporcionado.
Clase StringSearchableCollection:
```
export class StringSearchableCollection extends SearchableCollection<string> {
  search(term: string): string[] {
    return this.items.filter(item => item.includes(term));
  }
}
```
Similar a NumericSearchableCollection, esta clase extiende SearchableCollection pero con el tipo string.
Implementa el método search, que filtra los elementos de la colección de cadenas que contienen el término de búsqueda proporcionado.
Uso del código:
## Conclusión ##

En esta práctica, hemos explorado y aplicado los principios de diseño SOLID en el contexto de la programación orientada a objetos con TypeScript. Hemos visto cómo estos principios, como el Principio de Responsabilidad Única (SRP), el Principio de Abierto/Cerrado (OCP), el Principio de Substitución de Liskov (LSP), el Principio de Segregación de Interfaces (ISP) y el Principio de Inversión de Dependencias (DIP), nos ayudan a escribir código más modular, flexible y fácil de mantener. Al diseñar nuestras clases e interfaces, hemos buscado la cohesión, el bajo acoplamiento y la facilidad de extensión para mejorar la calidad y la robustez.

## Bibliografía ##
> Resca, S. (2017, February 12). SOLID principles using Typescript. Samuele Resca. https://samueleresca.net/solid-principles-using-typescript/

> Istanbul, a JavaScript test coverage tool. (n.d.). Istanbuljs-website. https://istanbul.js.org/

> Coveralls.io - test coverage history and statistics. (n.d.). Coveralls.io. https://coveralls.io/



