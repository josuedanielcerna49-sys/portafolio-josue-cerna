const botonChat = document.getElementById("boton-chat");
const ventanaChat = document.getElementById("ventana-chat");
const cerrarChat = document.getElementById("cerrar-chat");
const mensajesChat = document.getElementById("mensajes-chat");
const formularioChat = document.getElementById("formulario-chat");
const entradaChat = document.getElementById("entrada-chat");
const preguntasRapidas = document.querySelectorAll("[data-pregunta]");

let chatIniciado = false;

function agregarMensaje(texto, tipo) {
    const mensaje = document.createElement("p");
    mensaje.classList.add("mensaje", tipo);
    mensaje.textContent = texto;
    mensajesChat.appendChild(mensaje);
    mensajesChat.scrollTop = mensajesChat.scrollHeight;
}

function abrirChat() {
    ventanaChat.hidden = false;
    botonChat.setAttribute("aria-expanded", "true");

    if (!chatIniciado) {
        agregarMensaje(
            "¡Hola! Soy el asistente de Josué. Puedes preguntarme sobre él, sus habilidades, proyectos o contacto.",
            "mensaje-bot"
        );
        chatIniciado = true;
    }

    entradaChat.focus();
}

function ocultarChat() {
    ventanaChat.hidden = true;
    botonChat.setAttribute("aria-expanded", "false");
    botonChat.focus();
}

function limpiarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[¿?¡!.,;:]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function obtenerRespuesta(pregunta) {
    const texto = limpiarTexto(pregunta);

    if (texto.includes("hola") || texto.includes("buenas")) {
        return "¡Hola! ¿Qué te gustaría saber sobre Josué?";
    }

    if (
        texto.includes("cuantos anos") ||
        texto.includes("anos tienes") ||
        texto.includes("que edad") ||
        texto.includes("edad")
    ) {
        return "Josué tiene 17 años.";
    }

    if (
        texto.includes("de donde eres") ||
        texto.includes("donde vives") ||
        texto.includes("eres de") ||
        texto.includes("vives")
    ) {
        return "Josué es de Comayagua, Honduras.";
    }

    if (
        texto.includes("donde estudias") ||
        texto.includes("instituto") ||
        texto.includes("colegio")
    ) {
        return "Josué estudia en el Instituto Privado Comayagua.";
    }

    const frasesSobreEstudios = [
        "que estudias",
        "que estudia",
        "que estas estudiando",
        "que esta estudiando",
        "que carrera",
        "cual es tu carrera",
        "cual es su carrera",
        "cuales son tus estudios",
        "cuales son sus estudios",
        "area de estudio",
        "estudios",
        "carrera",
        "formacion",
        "formacion academica",
        "especialidad",
        "bachillerato",
        "educacion"
    ];

    if (frasesSobreEstudios.some((frase) => texto.includes(frase))) {
        return "Josué estudia el Bachillerato Técnico Profesional en Informática.";
    }

    if (
        texto.includes("herramienta") ||
        texto.includes("programas usas") ||
        texto.includes("programas utiliza")
    ) {
        return "Josué usa VS Code, GitHub, Docker, Codex y Claude.";
    }

    if (
        texto.includes("habilidad") ||
        texto.includes("tecnologia") ||
        texto.includes("que sabes hacer") ||
        texto.includes("que sabe hacer")
    ) {
        return "Sus habilidades incluyen HTML, CSS, JavaScript básico, Git, GitHub, Docker y VS Code.";
    }

    if (texto.includes("proyecto") || texto.includes("trabajo has hecho")) {
        return "Sus proyectos incluyen este portafolio web y diversas prácticas con HTML, CSS, JavaScript básico y Docker.";
    }

    if (
        texto.includes("aprendiendo") ||
        texto.includes("aprendes") ||
        texto.includes("aprender")
    ) {
        return "Josué está aprendiendo desarrollo web e inteligencia artificial, además de crear páginas web y resolver problemas.";
    }

    if (
        texto.includes("gusta de informatica") ||
        texto.includes("gusta la informatica") ||
        texto.includes("por que informatica")
    ) {
        return "A Josué le gusta crear páginas web, resolver problemas y seguir aprendiendo.";
    }

    if (
        texto.includes("meta") ||
        texto.includes("objetivo") ||
        texto.includes("futuro profesional")
    ) {
        return "Su meta profesional es seguir aprendiendo programación y trabajar en tecnología.";
    }

    if (texto.includes("github")) {
        return "Puedes encontrar a Josué en GitHub como josuedanielcerna49-sys.";
    }

    if (
        texto.includes("contact") ||
        texto.includes("correo") ||
        texto.includes("email")
    ) {
        return "Puedes contactar a Josué en josuedanielcerna49@gmail.com.";
    }

    if (texto.includes("como se llama la chi chi de josue")) {
        return "Sofia";
    }

    if (texto.includes("quien") || texto.includes("sobre ti") || texto.includes("perfil")) {
        return "Josué Daniel Cerna Martinez tiene 17 años, es de Comayagua, Honduras, y estudia el Bachillerato Técnico Profesional en Informática.";
    }

    if (texto.includes("gracias")) {
        return "¡Con gusto! Puedes hacerme otra pregunta.";
    }

    return "Todavía no sé responder eso. Prueba preguntando sobre la edad de Josué, sus estudios, habilidades, herramientas, proyectos, metas o contacto.";
}

function enviarPregunta(pregunta) {
    const preguntaLimpia = pregunta.trim();

    if (preguntaLimpia === "") {
        return;
    }

    agregarMensaje(preguntaLimpia, "mensaje-usuario");
    agregarMensaje(obtenerRespuesta(preguntaLimpia), "mensaje-bot");
}

botonChat.addEventListener("click", abrirChat);
cerrarChat.addEventListener("click", ocultarChat);

formularioChat.addEventListener("submit", function (evento) {
    evento.preventDefault();
    enviarPregunta(entradaChat.value);
    entradaChat.value = "";
    entradaChat.focus();
});

preguntasRapidas.forEach(function (boton) {
    boton.addEventListener("click", function () {
        enviarPregunta(boton.dataset.pregunta);
    });
});
