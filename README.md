# Challenge AluraGeek

Este proyecto es parte de un desafío de **Alura** y tiene como objetivo principal fortalecer nuestras habilidades en programación. En particular, se busca consolidar conocimientos en el desarrollo de interfaces dinámicas, manipulación del DOM, validaciones de formularios y funcionalidades interactivas

## Descripción

El proyecto consiste en una aplicación web interactiva que permite a los usuarios registrar, listar y eliminar productos. Los usuarios pueden agregar nuevos productos mediante un formulario, visualizar la lista de productos registrados y eliminar aquellos que ya no deseen mantener en el sistema. El proyecto hace uso de validaciones para asegurar que los datos ingresados sean correctos, y permite la manipulación dinámica del DOM.

### Funcionalidades principales:


- **Registrar nuevos productos**: Se pueden ingresar productos con información como nombre, precio y URL de imagen.
- **Listar productos registrados**: Los productos registrados se muestran en una lista que se actualiza dinámicamente.
- **Eliminar productos registrados**: Los productos pueden eliminarse de la lista con un solo clic.
- **Validaciones de formulario**: Se realizan validaciones para garantizar que los datos ingresados sean correctos antes de registrar un producto.


## Tecnologías Utilizadas

- **HTML5**: Estructura de la página web.
- **CSS3**: Estilos para la presentación visual de la aplicación.
- **JavaScript**: Lógica y manipulación del DOM para interactividad, validaciones y actualización dinámica de la lista de productos.
- **SweetAlert**: Generación de alertas personalizadas y visualmente atractivas para mejorar la experiencia del usuario.
- **Node.js**: Entorno de ejecución para el servidor y manejo de dependencias.
- **JSON-Server**: Simulación de un backend para manejar datos de productos mediante una API REST.
- **Git**: Control de versiones para el manejo del código fuente.

## Instalación

1. **Clona el repositorio**:  
   ```bash
   git clone https://github.com/isaias65/Alura_Geek.git
2. **Instala las dependencias**: 
    ```bash
    npm install
3. **Ejecuta el servidor local**: 
    ```bash
    npm run dev
Este comando inicializará el servidor local utilizando JSON-Server para simular un backend. El servidor estará disponible en http://localhost:3001 y manejará los datos de los productos mediante una API REST.