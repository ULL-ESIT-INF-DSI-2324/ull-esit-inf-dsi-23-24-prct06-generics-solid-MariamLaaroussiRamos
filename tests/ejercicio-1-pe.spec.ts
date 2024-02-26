import "mocha";
import { expect } from "chai";
import { NumericSearchableCollection, StringSearchableCollection } from "../src/ejercicio-1-pe";

describe("NumericSearchableCollection tests", () => {
    let numericCollection: NumericSearchableCollection;
    beforeEach(() => {
      numericCollection = new NumericSearchableCollection();
      numericCollection.addItem(1);
      numericCollection.addItem(2);
      numericCollection.addItem(3);
      numericCollection.addItem(1);
      numericCollection.addItem(4);
      numericCollection.addItem(2);
      numericCollection.addItem(2);
    });

    it("Buscar elementos numéricos en la colección", () => {
        const resultados = numericCollection.search(1);
        expect(resultados).to.deep.equal([1, 1]);
    });

    it("Obtener número de elementos en la colección", () => {
        const numberOfItems = numericCollection.getNumberOfItems();
        expect(numberOfItems).to.equal(7);
    });

    it("Eliminar elemento de la colección", () => {
        numericCollection.removeItem(1);
        const numberOfItems = numericCollection.getNumberOfItems();
        expect(numberOfItems).to.equal(6);
    });

    it("Obtener elemento por índice", () => {
        const item = numericCollection.getItem(2);
        expect(item).to.equal(3);
    });
});

describe("StringSearchableCollection tests", () => {
    let stringCollection: StringSearchableCollection;

    beforeEach(() => {
        stringCollection = new StringSearchableCollection();
        stringCollection.addItem("a");
        stringCollection.addItem("ab");
        stringCollection.addItem("abc");
        stringCollection.addItem("acd");
        stringCollection.addItem("bc");
    });

    it("Buscar elementos de cadena en la colección", () => {
        const resultados = stringCollection.search("a");
        expect(resultados).to.deep.equal(["a", "ab", "abc", "acd"]);
    });

    it("Obtener número de elementos en la colección", () => {
        const numberOfItems = stringCollection.getNumberOfItems();
        expect(numberOfItems).to.equal(5);
    });

    it("Eliminar elemento de la colección", () => {
        stringCollection.removeItem("a");
        const numberOfItems = stringCollection.getNumberOfItems();
        expect(numberOfItems).to.equal(4);
    });

    it("Obtener elemento por índice", () => {
        const item = stringCollection.getItem(2);
        expect(item).to.equal("abc");
    });
});
