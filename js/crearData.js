import { conexion } from "./conexion.js";

const formulario = document.querySelector("[data-form]");

async function crearData(evento) {
    evento.preventDefault();
    
    const titulo = document.querySelector("[data-name]").value;
    const precio = document.querySelector("[data-precio]").value;
    const url = document.querySelector("[data-url]").value;

    try {
        await conexion.crearDatas(titulo, url, precio);
    } catch (error) {
        console.log(error);
    }
}

formulario.addEventListener("submit", evento => crearData(evento));
