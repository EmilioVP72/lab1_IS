// Colores para el fondo
const colors = ["#f7f9fc", "#ffe5e5", "#e5ffe5", "#e5e5ff", "#fff3e0"];
const colorsShadow = ["#0065fdff", "#ff0000ff", "#00ff00ff", "#0000ffff", "#ff9d00ff"];
let colorIndex = 0;
//informacion
const members = [
    { photo: "images/emilio.jpg", desc: "Alumno 1 - Emilio Francisco Vázquez Pérez" },
    { photo: "images/sergio.jpg", desc: "Alumno 2 - Sergio Cortes Naranjo" },
];
let memberIndex = 0;

// Elementos del DOM
const colorButton = document.getElementById("colorButton");
const switchButton = document.getElementById("switchButton");
const memberPhoto = document.getElementById("member-photo");
const memberDesc = document.getElementById("member-desc");
const currentTimeElement = document.getElementById("current-time");

// Función para actualizar la hora
function updateTime() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    currentTimeElement.textContent = `Hora actual: ${formattedTime}`;
}

// Actualiza la hora cada segundo
setInterval(updateTime, 1000);
updateTime(); // Llama a la función una vez para que se muestre de inmediato

// Función para actualizar el texto del botón
function updateButtonText() {
    const nextMemberIndex = (memberIndex + 1) % members.length;
    switchButton.textContent = `Mostrar Alumno ${nextMemberIndex + 1}`;
}

// Botón cambio de color
colorButton.addEventListener("click", () => {
    document.body.style.backgroundColor = colors[colorIndex];
    document.getElementById("member-photo").style.borderColor = colorsShadow[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});

// Botón cambio de integrante
switchButton.addEventListener("click", () => {
    // Aplica la clase de fade out para la transición
    memberPhoto.style.opacity = '0';
    
    // Espera un poco antes de cambiar los datos y hacer el fade in
    setTimeout(() => {
        memberIndex = (memberIndex + 1) % members.length;
        memberPhoto.src = members[memberIndex].photo;
        memberDesc.textContent = members[memberIndex].desc;
        
        // Aplica la clase de fade in
        memberPhoto.style.opacity = '1';

        // Actualiza el texto del botón después de cambiar
        updateButtonText();
    }, 300); // 300ms, un poco menos que la transición CSS
});

// Inicializa el texto del botón al cargar la página
updateButtonText();