// Implemente una interfaz genérica 'Collectable' con los siguientes métodos, los cuales deberá definir toda clase que quiera implementar dicha interfaz: 
// addItem, getItem, removeItem, getNumberOfItems.
export interface Collectable<T> {
  addItem(newItem: T): void;
  getItem(index: number): T | undefined;
  removeItem(item: T): void;
  getNumberOfItems(): number;
}

// Implemente una interfaz genérica 'Searchable' con los siguientes métodos, los cuales deberá definir toda clase que desee implementar dicha interfaz: search. 
// Este método recibirá un término de búsqueda cuyo tipo no se conoce a priori.

export interface Searchable<T> {
  search(term: T): T[];
}

// Implemente una clase abstracta genérica 'SearchableCollection' que implemente las interfaces genéricas 'Collectable' y 'Searchable'. 
// Tenga en cuenta que en este punto deberá implementar todos los metodos de la interfaz 'Collectable', mientras que el método search de 'Searchable' 
// será abstracto, de modo que aquellas clases que extiendan a 'SearchableCollection' tengan que implementarlo obligatoriamente.
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


export class NumericSearchableCollection extends SearchableCollection<number> {
  search(term: number): number[] {
    return this.items.filter(item => item === term);
  }
}

export class StringSearchableCollection extends SearchableCollection<string> {
  search(term: string): string[] {
    return this.items.filter(item => item.includes(term));
  }
}

const numericCollection = new NumericSearchableCollection();
numericCollection.addItem(1);
numericCollection.addItem(2);
numericCollection.addItem(3);
numericCollection.addItem(1);
numericCollection.addItem(4);
numericCollection.addItem(2);
numericCollection.addItem(2);


console.log(numericCollection.search(1)); // Output: [1, 1]

const stringCollection = new StringSearchableCollection();
stringCollection.addItem("a");
stringCollection.addItem("ab");
stringCollection.addItem("abc");
stringCollection.addItem("acd");
stringCollection.addItem("bc");


console.log(stringCollection.search("a")); // Output: ["banana", "orange"]
