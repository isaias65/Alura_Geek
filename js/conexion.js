async function listarData() {
    const conexion = await fetch("http://localhost:3001/data",{
        method:"GET",
        headers:{
        "Content-type":"application/json"
        }
    });
    
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function crearDatas(titulo, url, precio){
    const conexion= await fetch("http://localhost:3001/data",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            titulo:titulo,
            url:url,
            precio:precio
        })
    });

    if(!conexion.ok){
        throw new Error("No fue posible enviar el producto");
    }
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function eliminarData(codData) {
    const conexion = await fetch(`http://localhost:3001/data/${codData}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json"
        }
    });

    if(!conexion.ok){
        throw new Error("No fue posible enviar el producto");
    }

    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

export const conexion={
    listarData, crearDatas, eliminarData
}