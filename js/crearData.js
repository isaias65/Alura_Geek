import { conexion } from "./conexion.js";

const formulario = document.querySelector("[data-form]");

async function crearData(evento) {
    evento.preventDefault();
    
    const titulo = document.querySelector("[data-name]").value.trim();
    const precio = document.querySelector("[data-precio]").value.trim();
    const url = document.querySelector("[data-url]").value.trim();

    if (!titulo || !precio || !url) {
        Swal.fire({
            icon: 'warning',
            title: 'Campos incompletos',
            text: 'Todos los campos son obligatorios. Por favor, completa la información.',
        });
        return;
    }

    if (isNaN(precio) || precio <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Precio no válido',
            text: 'El precio debe ser un número mayor a 0.',
        });
        return;
    }
    
    Swal.fire({
        title: '¿Quieres guardar los datos?',
        text: "Esta acción registrará la información ingresada.",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, guardar',
        cancelButtonText: 'Cancelar'
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                await conexion.crearDatas(titulo, url, precio);
            } catch (error) {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al guardar los datos. Por favor, inténtalo de nuevo.',
                });
            }
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Operación cancelada',
                text: 'No se ha guardado ningún dato.',
            });
        }
    });
}


formulario.addEventListener("submit", evento => crearData(evento));
