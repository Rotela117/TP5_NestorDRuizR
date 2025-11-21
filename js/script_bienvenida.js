document.addEventListener("DOMContentLoaded", () => {
    let nombreCompleto = null;

    alert("¡Bienvenido!");

    while (!nombreCompleto) {
        const nombre = prompt("Ingrese su nombre:");
        const apellido = prompt("Ingrese su apellido:");

        if (!nombre || nombre.trim() === "" || !apellido || apellido.trim() === "") {
            alert("Por favor ingrese un nombre y apellido válidos.");
        } else {
            nombreCompleto = `${nombre.trim()} ${apellido.trim()}`;
        }
    }

    // Guardamos en localStorage si luego quieres usarlo
    localStorage.setItem("nombreUsuario", nombreCompleto);

    const saludo = document.getElementById("saludoUsuario");
    saludo.textContent = `Hola, ${nombreCompleto}. Bienvenido nuevamente.`;
});
