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
