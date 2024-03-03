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
