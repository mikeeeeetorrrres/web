# Generador de Códigos de Barras

## Descripción

Este proyecto proporciona una herramienta web para generar códigos de barras personalizados. La aplicación permite a los usuarios ingresar un texto y generar un código de barras para imprimirlo en formato de una o dos tarjetas. Está diseñada para ser simple, intuitiva y fácil de usar.

## Características

- **Generación de Códigos de Barras**: Ingresa un texto y genera el código de barras en tiempo real.
- **Opción de Dos Códigos**: La aplicación permite generar dos códigos de barras en una sola página.
- **Impresión**: Los usuarios pueden imprimir los códigos generados.
- **Diseño Responsivo**: Se adapta a dispositivos móviles y escritorios.
- **Interfaz Interactiva**: Usando la librería [Lucide](https://lucide.dev/) para íconos interactivos en la navegación.

## Estructura del Proyecto

Este proyecto está dividido en tres archivos principales:

- **`index.html`**: El archivo principal que contiene la estructura HTML de la aplicación.
- **`styles.css`**: El archivo de estilos que define la apariencia visual de la página.
- **`scripts.js`**: El archivo que contiene la lógica para generar los códigos de barras y manejar la interacción.

## Instalación

Sigue estos pasos para poner en marcha el proyecto en tu máquina local:

1. Clona este repositorio o descarga los archivos directamente.
   
   ```bash
   git clone https://github.com/usuario/generador-codigos-barras.git
Asegúrate de que tienes una conexión a internet para cargar las librerías externas como JsBarcode y Lucide.

Abre el archivo index.html en tu navegador web preferido.

Uso
Generar un Código de Barras:

Ingresa un texto en el campo correspondiente.

Haz clic en el botón Generar para crear el código de barras.

Generar Dos Códigos de Barras:

Ingresa texto en los dos campos correspondientes.

Haz clic en el botón Generar ambos para crear los dos códigos de barras.

Imprimir Códigos de Barras:

Haz clic en el botón Imprimir para imprimir los códigos de barras generados.

Navegación entre Secciones:

Usa el menú de navegación para alternar entre la opción de generar un solo código de barras o dos.

Ejemplo de Uso
Generar un solo código de barras:
Escribe el texto que deseas codificar en el campo correspondiente.

Haz clic en Generar.

El código de barras se generará y podrás agregar un comentario debajo de él.

Generar dos códigos de barras:
Ingresa el texto para los dos códigos.

Haz clic en Generar ambos.

Ambos códigos de barras se generarán, cada uno con su respectivo comentario.

Personalización
Puedes personalizar este generador de códigos de barras según tus necesidades:

Diseño: Modifica los estilos en styles.css para cambiar los colores, márgenes, tamaños, etc.

Funcionalidad: Si necesitas un tipo de código de barras específico (QR, DataMatrix, etc.), puedes modificar el código en scripts.js para usar una librería diferente o cambiar las opciones de JsBarcode.

Dependencias
JsBarcode: Librería para generar códigos de barras en formato SVG.

Lucide: Librería de íconos que se utiliza en el menú de navegación.

Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

Contribuciones
Si deseas contribuir a este proyecto, por favor sigue estos pasos:

Haz un fork de este repositorio.

Crea una rama con tu nueva funcionalidad (git checkout -b nueva-funcionalidad).

Realiza los cambios y haz commit (git commit -am 'Añadir nueva funcionalidad').

Haz un push a la rama (git push origin nueva-funcionalidad).

Crea un Pull Request.

Agradecimientos
Agradecimientos especiales a los desarrolladores de las librerías JsBarcode y Lucide por sus herramientas fáciles de integrar y altamente personalizables.
