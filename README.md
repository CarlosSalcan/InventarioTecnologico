# Inventario de Equipos

Bienvenido al proyecto "Inventario de Equipos" 🖥️, una aplicación diseñada para gestionar y registrar los equipos de una organización de manera eficiente. Esta aplicación incluye la capacidad de manejar diferentes tipos de equipos, como computadoras de escritorio, portátiles, impresoras y teléfonos.

## Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación, Inicialización](#instalación)
- [Uso](#uso)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Autores](#autores)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Descripción del Proyecto

"Inventario de Equipos" es una aplicación web desarrollada para facilitar la gestión de equipos en una organización. Su objetivo es proporcionar una plataforma donde se puedan registrar, actualizar y consultar datos de diferentes tipos de equipos de manera centralizada. La aplicación contiene:

- Gestión de equipos de escritorio, portátiles, impresoras y teléfonos.
- Almacenamiento y consulta de datos de cada equipo.
- Interfaz intuitiva para la gestión de equipos.

## Estructura del Proyecto

La estructura de archivos del proyecto es la siguiente:
```plaintext
InventarioTecnol-gico/
├── backend/                      # Carpeta para el backend
│   ├── jnode_modules/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── component.controller.js
│   │   │   ├── inventory.controller.js
│   │   │   ├── option.controller.js 
│   │   │   ├── param.controller.js 
│   │   │   ├── register.controller.js 
│   │   │   ├── user.controller.js    
│   │   ├── routers/ 
│   │   │   ├── routes.server.js   
│   │   ├── connection.js
│   │   └── server.js  
│   ├── package-lock.json           
│   └── package.json              
│
└── frontend/                     # Carpeta para el frontend
    ├── assets/   
    │   ├── img/             
    │   │   loginIcon.png
    ├── componentes/           
    │   │   ├── header.js
    │   │   ├── modal.js
    ├── css/             
    │   ├── styles.css
    ├── js/
    │   ├── controllers/
    │   │   ├── footer.js
    │   │   ├── header.js
    │   │   ├── loginForm.js
    │   │   ├── modal.js
    │   ├── pages/
    │   │   ├── equipamentControl.js
    │   │   ├── fetchInventory.js
    │   │   ├── inventory.js
    │   │   ├── modal.js
    │   │   ├── modalComponent.js
    │   │   ├── modalEquipmentEdition.js
    │   │   ├── newRegister.js
    │   │   ├── parameters.js
    ├── escritorio.html   
    ├── impresora.html 
    ├── index.html                
    ├── inventario.html 
    ├── parametros.html 
    ├── portatil.html 
    ├── registro.html 
    └── telefono.html   
```

## Instalación, Inicialización 🗒️
Para clonar y ejecutar este proyecto en tu máquina local, sigue estos pasos:
1. Clona el repositorio 🔗:
    ```sh
    git clone https://github.com/CarlosSalcan/InventarioTecnologico
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd InventarioTecnol-gico
    ```

3. Instala las dependencias del backend:
    ```sh
    cd Backend
    npm install
    ```

4. Inicia el servidor:
    ```sh
    cd InventarioTecnol-gico\Backend
    node server.js
    ```

5. Abre `index.html` en tu navegador para ver la página principal.

## Uso
- Inicia sesión a través de `index.html`.
- Navega a través del menú para gestionar los diferentes tipos de equipos.
- Añade, actualiza o consulta datos de equipos de escritorio, portátiles, impresoras y teléfonos.

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- MySQL
- BootStrap

## Autor 🤓

- **Carlos Salcán** - *Estudiante y Desarrollador Principal* - [CarlosSalcan](https://github.com/CarlosSalcan)

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

## Contacto 📌💻

Para cualquier consulta o sugerencia, puedes contactarnos a través de:

- **Email**: [cdsalcan131@gmail.com](mailto:cdsalcan131@gmail.com)
- **WhatsApp**: (https://wa.me/+5930988667013)

¡Gracias por visitar "InventoryTecnologico"!