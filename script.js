const preguntas = [
    {
        pregunta: "¿Qué es un sistema distribuido?",
        opciones: [
            "Un solo ordenador con múltiples procesadores",
            "Computadoras conectadas en red que trabajan de forma conjunta",
            "Un sistema operativo multiusuario",
            "Una red local de ordenadores"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un sistema distribuido consiste en computadoras conectadas en red, permitiendo que sus componentes se comuniquen y trabajen de forma conjunta."
    },
    {
        pregunta: "¿Cuáles son los tres elementos esenciales para la comunicación de datos en sistemas distribuidos?",
        opciones: [
            "CPU, RAM, Disco Duro",
            "Puerto, IP, Protocolos",
            "Cliente, Servidor, Red",
            "Ethernet, WiFi, Fibra Óptica"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los tres elementos esenciales para la comunicación de datos son: Puerto, IP y Protocolos."
    },
    {
        pregunta: "¿Cuáles son las dos formas principales de implementar hilos en Java?",
        opciones: [
            "Socket y ServerSocket",
            "Thread y Runnable",
            "TCP y UDP",
            "GET y POST"
        ],
        respuestaCorrecta: 1,
        explicacion: "En Java, las dos formas principales de implementar hilos son extendiendo la clase Thread o implementando la interfaz Runnable."
    },
    {
        pregunta: "¿Los hilos en Java se utilizan principalmente para trabajar con concurrencia o paralelismo?",
        opciones: [
            "Paralelismo",
            "Concurrencia",
            "Ambos por igual",
            "Ninguno de los dos"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los hilos en Java se utilizan principalmente para trabajar con concurrencia, permitiendo que múltiples tareas se ejecuten de forma aparentemente simultánea."
    },
    {
        pregunta: "¿Qué es la concurrencia en el contexto de sistemas distribuidos?",
        opciones: [
            "Ejecución simultánea de tareas",
            "Tareas que inician en diferente tiempo pero eventualmente coinciden",
            "Procesamiento secuencial de tareas",
            "Distribución de tareas entre diferentes servidores"
        ],
        respuestaCorrecta: 1,
        explicacion: "La concurrencia se refiere a cuando las tareas inician en diferentes tiempos pero llegará un momento en donde los elementos van a coincidir en su ejecución."
    },
    {
        pregunta: "¿Qué componente de hardware utiliza principalmente los hilos para su procesamiento en sistemas concurrentes?",
        opciones: [
            "Memoria RAM",
            "Disco Duro",
            "Microprocesador (CPU)",
            "Tarjeta de Red"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los hilos (threads) son utilizados principalmente por el microprocesador (CPU) para implementar concurrencia en sistemas distribuidos."
    },
    {
        pregunta: "¿Qué característica diferencia principalmente a la arquitectura Serverless de otras arquitecturas?",
        opciones: [
            "No utiliza servidores en absoluto",
            "Escala automáticamente y cobra solo por el tiempo de ejecución",
            "Requiere configuración manual de servidores",
            "Solo funciona con aplicaciones monolíticas"
        ],
        respuestaCorrecta: 1,
        explicacion: "La arquitectura Serverless se diferencia por permitir escalar automáticamente y cobrar solo por el tiempo de ejecución del código, sin necesidad de gestionar servidores."
    },
    {
        pregunta: "¿Cuál es la principal diferencia entre una arquitectura Cliente-Servidor y una arquitectura Peer-to-Peer?",
        opciones: [
            "Cliente-Servidor usa HTTP, P2P usa FTP",
            "Cliente-Servidor tiene clientes y servidores definidos, P2P tiene nodos que actúan como ambos",
            "Cliente-Servidor es más seguro que P2P",
            "P2P solo se usa para compartir archivos"
        ],
        respuestaCorrecta: 1,
        explicacion: "En Cliente-Servidor, los clientes solicitan servicios a servidores centralizados, mientras que en Peer-to-Peer (P2P), todos los nodos actúan como clientes y servidores, compartiendo responsabilidades."
    },
    {
        pregunta: "¿Cuál de los siguientes NO es uno de los protocolos de red más conocidos?",
        opciones: [
            "HTTP",
            "FTP",
            "SMTP",
            "P2P"
        ],
        respuestaCorrecta: 3,
        explicacion: "P2P no es un protocolo, sino un tipo de arquitectura. Los protocolos de red más conocidos incluyen TCP/IP, HTTP, HTTPS, FTP y SMTP."
    },
    {
        pregunta: "¿Cuál de los siguientes NO es un método esencial en el protocolo HTTP?",
        opciones: [
            "GET",
            "POST",
            "DELETE",
            "SEND"
        ],
        respuestaCorrecta: 3,
        explicacion: "SEND no es un método estándar de HTTP. Los métodos esenciales incluyen GET, POST, PUT y DELETE."
    },
    {
        pregunta: "¿Qué es la serialización de objetos en Java?",
        opciones: [
            "Convertir un objeto en una secuencia de bytes para transmisión",
            "Ordenar objetos en una lista",
            "Crear múltiples instancias de un objeto",
            "Encriptar datos de un objeto"
        ],
        respuestaCorrecta: 0,
        explicacion: "La serialización en Java convierte un objeto en una secuencia de bytes para su transmisión a través de la red, siendo clave para enviar datos complejos en aplicaciones distribuidas."
    },
    {
        pregunta: "¿Qué clase se utiliza en Java para crear un servidor TCP básico?",
        opciones: [
            "TCPServer",
            "Socket",
            "ServerSocket",
            "NetworkServer"
        ],
        respuestaCorrecta: 2,
        explicacion: "La clase ServerSocket se utiliza en Java para crear un servidor TCP básico que puede aceptar conexiones de clientes."
    },
    {
        pregunta: "¿Qué protocolo se utiliza comúnmente para asegurar las comunicaciones en aplicaciones web?",
        opciones: [
            "HTTP",
            "FTP",
            "HTTPS",
            "SMTP"
        ],
        respuestaCorrecta: 2,
        explicacion: "HTTPS (HTTP Secure) es la versión segura de HTTP que utiliza SSL/TLS para cifrar la comunicación, protegiendo contra ataques de intermediarios."
    },
    {
        pregunta: "En el contexto de REST, ¿qué método HTTP se utiliza típicamente para actualizar un recurso existente?",
        opciones: [
            "GET",
            "POST",
            "PUT",
            "DELETE"
        ],
        respuestaCorrecta: 2,
        explicacion: "En una API RESTful, el método PUT se utiliza típicamente para actualizar un recurso existente."
    },
    {
        pregunta: "¿Qué significa que HTTP sea un protocolo sin estado (stateless)?",
        opciones: [
            "No puede manejar múltiples conexiones",
            "No mantiene información entre diferentes solicitudes del mismo cliente",
            "No requiere una conexión persistente",
            "No puede enviar datos binarios"
        ],
        respuestaCorrecta: 1,
        explicacion: "HTTP es un protocolo sin estado (stateless), lo que significa que no mantiene información entre diferentes solicitudes del mismo cliente."
    },
    {
        pregunta: "¿Cuál es la función principal de la capa de transporte en el modelo TCP/IP?",
        opciones: [
            "Enrutamiento de paquetes",
            "Entrega confiable de datos entre aplicaciones",
            "Definición de formatos de datos",
            "Conexión física a la red"
        ],
        respuestaCorrecta: 1,
        explicacion: "La capa de transporte en TCP/IP se encarga de la entrega confiable de datos entre aplicaciones, con TCP garantizando la entrega ordenada y sin errores."
    },
    {
        pregunta: "¿Qué ventaja ofrece la arquitectura de microservicios sobre una arquitectura monolítica?",
        opciones: [
            "Menor complejidad",
            "Mayor acoplamiento entre componentes",
            "Facilidad para escalar y actualizar servicios individualmente",
            "Menor latencia en la comunicación entre componentes"
        ],
        respuestaCorrecta: 2,
        explicacion: "La arquitectura de microservicios ofrece mayor flexibilidad para escalar y actualizar servicios individuales, lo que es más difícil en una arquitectura monolítica."
    },
    {
        pregunta: "¿Qué es un socket en el contexto de la programación de redes?",
        opciones: [
            "Un tipo de protocolo de red",
            "Un endpoint para la comunicación entre programas",
            "Un método de encriptación",
            "Un tipo de dirección IP"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un socket es un endpoint para la comunicación bidireccional entre programas que se ejecutan en una red, permitiendo el intercambio de datos."
    },
    {
        pregunta: "¿Qué significa API en el contexto de sistemas distribuidos?",
        opciones: [
            "Application Programming Interface",
            "Advanced Protocol Integration",
            "Automated Program Instruction",
            "Application Process Interconnection"
        ],
        respuestaCorrecta: 0,
        explicacion: "API significa Application Programming Interface, y define cómo los componentes de software deben interactuar entre sí, siendo fundamental en sistemas distribuidos."
    },
    {
        pregunta: "¿Cuál es el propósito principal de usar SSL/TLS en comunicaciones de red?",
        opciones: [
            "Aumentar la velocidad de transmisión",
            "Comprimir datos",
            "Proporcionar seguridad mediante cifrado y autenticación",
            "Facilitar el enrutamiento de paquetes"
        ],
        respuestaCorrecta: 2,
        explicacion: "SSL/TLS se utiliza principalmente para proporcionar seguridad en las comunicaciones de red mediante el cifrado de datos y la autenticación de las partes involucradas."
    },
    {
        pregunta: "En el diseño de una aplicación de red social distribuida, ¿qué componentes clave considerarías incluir en la arquitectura?",
        opciones: [
            "Solo un servidor monolítico que maneje todas las funciones",
            "Microservicios para autenticación, perfiles de usuario, y mensajería",
            "Un único servicio de base de datos centralizado",
            "Solamente clientes móviles sin backend"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una arquitectura de microservicios con componentes separados para autenticación, perfiles de usuario y mensajería es una aproximación común en aplicaciones de red social modernas y distribuidas."
    }
];

function mostrarPreguntas() {
    const contenedor = document.getElementById('preguntas-practica');
    preguntas.forEach((pregunta, index) => {
        const preguntaHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title h6">Pregunta ${index + 1}</h5>
                    <p class="card-text">${pregunta.pregunta}</p>
                    <div class="opciones mb-3">
                        ${pregunta.opciones.map((opcion, i) => `
                            <div class="form-check mb-2">
                                <input class="form-check-input" type="radio" name="pregunta${index}" id="pregunta${index}opcion${i}" value="${i}">
                                <label class="form-check-label" for="pregunta${index}opcion${i}">
                                    ${opcion}
                                </label>
                            </div>
                        `).join('')}
                    </div>
                    <button class="btn btn-primary btn-verificar" onclick="verificarRespuesta(${index})">Verificar</button>
                    <div id="feedback${index}" class="mt-3"></div>
                </div>
            </div>
        `;
        contenedor.innerHTML += preguntaHTML;
    });
}

function verificarRespuesta(index) {
    const seleccionada = document.querySelector(`input[name="pregunta${index}"]:checked`);
    const feedbackElement = document.getElementById(`feedback${index}`);
    
    if (!seleccionada) {
        feedbackElement.innerHTML = '<div class="alert alert-warning">Por favor, selecciona una respuesta.</div>';
        return;
    }
    
    const respuestaUsuario = parseInt(seleccionada.value);
    const pregunta = preguntas[index];
    
    if (respuestaUsuario === pregunta.respuestaCorrecta) {
        feedbackElement.innerHTML = '<div class="alert alert-success">¡Correcto! Bien hecho.</div>';
    } else {
        feedbackElement.innerHTML = `
            <div class="alert alert-danger">
                Incorrecto. ${pregunta.explicacion}
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', mostrarPreguntas);
