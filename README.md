# Portafolio Web - Josue Daniel Cerna Martínez

## Descripción del proyecto

Este proyecto consiste en la creación de un portafolio web personal desarrollado como parte de la Práctica Profesional en Simplexity. El objetivo fue aprender los fundamentos del desarrollo web utilizando HTML, CSS, GitHub, VS Code y Docker.

El portafolio incluye información personal, habilidades, educación, proyectos y datos de contacto. Además, el sitio puede ejecutarse localmente mediante Docker para simular un entorno profesional de desarrollo.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- Visual Studio Code
- Git y GitHub
- Docker Desktop
- Nginx (contenedor web)

---

## Lo aprendido

Durante esta práctica se aprendió a:

- Crear y administrar repositorios en GitHub.
- Realizar commits para guardar cambios en un proyecto.
- Utilizar Visual Studio Code como entorno de desarrollo.
- Crear páginas web utilizando HTML.
- Aplicar estilos profesionales mediante CSS.
- Ejecutar sitios web localmente utilizando Docker.
- Comprender la estructura básica de un proyecto web.
- Organizar archivos y recursos como imágenes, hojas de estilo y documentación.

---

## Ejecución local con Docker

Para servir el sitio web localmente utilizando Docker se utilizó un archivo Dockerfile con Nginx.

### Construir la imagen

```bash
docker build -t mi-sitio .
```

### Ejecutar el contenedor

```bash
docker run -d -p 8080:80 --name sitio-local mi-sitio
```

### Abrir en el navegador

```text
http://localhost:8080
```

Con esto el sitio web se ejecuta dentro de un contenedor Docker y puede visualizarse desde el navegador.

---

## Resumen del CSS

Se creó un diseño externo en el archivo `style.css` para mejorar la apariencia del portafolio web.

Primero, se agregaron estilos generales para eliminar los márgenes predeterminados del navegador, organizar mejor los tamaños mediante `box-sizing`, utilizar una tipografía más moderna y aplicar un fondo azul claro en toda la página.

### Encabezado

Se diseñó un encabezado profesional utilizando el identificador:

```css
#encabezado
```

Se aplicó un fondo azul con degradado, texto blanco, espacio interno, borde inferior azul oscuro y se utilizó `display: flex` para organizar el contenido horizontalmente.

También se ajustó el tamaño del encabezado reduciendo el espacio interno y el tamaño del logo para lograr una apariencia más compacta.

Se utilizaron los siguientes identificadores:

```css
#info-encabezado
#titulo-principal
#subtitulo
#contenedor-logo
#logo
```

El logo fue configurado como imagen PNG sin bordes redondeados:

```css
#logo {
    width: 170px;
    height: auto;
    object-fit: contain;
}
```

### Contenido principal

El contenido principal se organizó utilizando:

```css
#contenido-principal
```

Esto permite centrar el contenido y limitar el ancho máximo de lectura para mejorar la presentación.

### Secciones

Las secciones del portafolio se diseñaron mediante la clase:

```css
.seccion
```

Cada sección posee:

- Fondo blanco.
- Bordes redondeados.
- Sombra suave.
- Espaciado interno.
- Línea decorativa azul en el lado izquierdo.

Los títulos de cada sección fueron personalizados con colores corporativos y líneas decorativas inferiores.

### Foto de perfil

La fotografía se diseñó mediante:

```css
#foto-perfil
```

Se utilizó un diseño circular con borde azul y sombra para resaltar la imagen.

### Habilidades

Las habilidades fueron organizadas mediante:

```css
#lista-habilidades
```

Se eliminaron los estilos tradicionales de lista y se transformaron en una cuadrícula de elementos visuales.

### Proyectos

Los proyectos se presentaron utilizando tarjetas:

```css
.tarjeta-proyecto
```

Cada tarjeta incluye efectos visuales al pasar el cursor, aumentando ligeramente su tamaño y sombra.

### Enlaces

Los enlaces se personalizaron con colores azules y efectos visuales al interactuar con ellos.

### Pie de página

El pie de página fue diseñado utilizando:

```css
#pie-pagina
```

Incluye:

- Fondo azul oscuro.
- Texto blanco.
- Contenido centrado.

### Diseño adaptable (Responsive)

Se implementó un diseño adaptable utilizando:

```css
@media (max-width: 700px)
```

Esto permite que el sitio se visualice correctamente en dispositivos móviles y tablets.

Los cambios incluyen:

- Encabezado en formato vertical.
- Texto centrado.
- Imágenes más pequeñas.
- Mejor distribución de los elementos.


## Autor

**Josué Daniel Cerna Martínez**

Práctica Profesional – Instituto Privado Comayagua (IPC)  
Simplexity – Desarrollo Web e IA Generativa
## Jueves - Uso de Codex y Chatbot del Portafolio

### Objetivo
Utilizar Codex como copiloto para agregar un chatbot interactivo al portafolio personal y comprender cómo funciona su código.

### Actividades realizadas

- Se utilizó Codex para generar y mejorar un chatbot básico para el portafolio.
- Se creó el archivo `script.js` para manejar la lógica del chatbot.
- Se agregó una ventana de chat con HTML y estilos CSS para la interfaz.
- Se implementó la apertura y cierre del chatbot mediante botones.
- Se agregaron respuestas automáticas basadas en palabras clave utilizando JavaScript.
- Se ampliaron las respuestas del chatbot para incluir información personal y profesional.

### Información que responde el chatbot

El chatbot puede responder preguntas sobre:

- Nombre completo.
- Edad.
- Lugar de residencia.
- Estudios e institución educativa.
- Habilidades técnicas.
- Herramientas utilizadas.
- Proyectos realizados.
- Tecnologías que está aprendiendo.
- Intereses en informática.
- Meta profesional.
- Correo de contacto.
- Perfil de GitHub.

### Aprendizajes obtenidos

Durante esta actividad aprendí:

- Cómo utilizar Codex como asistente de programación.
- Cómo funciona un chatbot basado en reglas.
- Cómo capturar mensajes del usuario con JavaScript.
- Cómo procesar texto utilizando funciones y condiciones.
- Cómo mostrar respuestas dinámicamente en una página web.
- Cómo agregar nuevas respuestas modificando la función `obtenerRespuesta()`.

### Archivos modificados

- `index.html`
- `style.css`
- `script.js`

### Resultado

Se agregó un chatbot funcional al portafolio personal capaz de responder preguntas básicas sobre mi perfil, habilidades, proyectos y datos de contacto.

## Publicación del Portafolio

El portafolio fue publicado utilizando GitHub Pages para que pueda accederse públicamente desde cualquier navegador.

### URL del sitio
https://josuedanielcerna49-sys.github.io/portafolio-josue-cerna/

### Actividades realizadas
- Configuración de GitHub Pages desde el repositorio.
- Publicación de la rama principal (`main`).
- Verificación de la carga correcta del sitio.
- Comprobación del funcionamiento del chatbot en la versión publicada.