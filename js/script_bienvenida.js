document.addEventListener("DOMContentLoaded", () => {
    let nombreCompleto = localStorage.getItem("nombreUsuario");

    if (!nombreCompleto) {
        alert("¡Bienvenido!");
        while (!nombreCompleto) {
            nombreCompleto = prompt("Ingrese su nombre y apellido:");
            if (nombreCompleto === null || nombreCompleto.trim() === "") {
                alert("Por favor ingrese un nombre válido.");
                nombreCompleto = null;
            }
        }
        localStorage.setItem("nombreUsuario", nombreCompleto);
    }

    const saludo = document.getElementById("saludoUsuario");
    saludo.textContent = `Hola, ${nombreCompleto}. Bienvenido nuevamente.`;
});
