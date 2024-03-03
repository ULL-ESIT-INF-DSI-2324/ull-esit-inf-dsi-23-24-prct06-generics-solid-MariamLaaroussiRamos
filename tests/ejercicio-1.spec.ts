import { expect } from "chai";
import { describe, it, beforeEach } from "mocha";
import { Caja, UtensilioCocina, Habitacion } from "../src/ejercicio-1";


describe("Caja tests", () => {
    let cajaUtensiliosCocina: Caja<UtensilioCocina>;
    let cajahabitacion: Caja<Habitacion>;

    beforeEach(() => {
        cajaUtensiliosCocina = new Caja<UtensilioCocina>();
        cajahabitacion = new Caja<Habitacion>();
    });

    it("Agregar y listar enseres correctamente", () => {
        cajaUtensiliosCocina.agregarEnser(new UtensilioCocina("Cuchillo"));
        cajaUtensiliosCocina.agregarEnser(new UtensilioCocina("Sartén"));

        expect(cajaUtensiliosCocina.listarContenido()).to.deep.equal(["Cuchillo", "Sartén"]);
    });

    it("Buscar enser por nombre correctamente", () => {
        const cuchillo = new UtensilioCocina("Cuchillo");
        cajaUtensiliosCocina.agregarEnser(cuchillo);

        expect(cajaUtensiliosCocina.buscarPorNombre("Cuchillo")).to.equal(cuchillo);
    });

    it("Eliminar enser correctamente", () => {
        const sarten = new UtensilioCocina("Sartén");
        cajaUtensiliosCocina.agregarEnser(sarten);

        cajaUtensiliosCocina.eliminarEnser(sarten);

        expect(cajaUtensiliosCocina.listarContenido()).to.deep.equal([]);
    });

    it("Buscar enser por nombre no existente", () => {
        expect(cajaUtensiliosCocina.buscarPorNombre("NoExistente")).to.be.undefined;
    });

    it("Eliminar enser no existente", () => {
        const noExistente = new UtensilioCocina("NoExistente");

        expect(() => cajaUtensiliosCocina.eliminarEnser(noExistente)).to.throw("No se encontró el enser a eliminar.");
    });
});
