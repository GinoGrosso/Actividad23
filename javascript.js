let toggleBtn = document.getElementById("toggle-theme");
let body = document.body;

// Recuperar el modo guardado
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggleBtn.textContent = "☀️ Modo Claro";
}

// Cambiar tema al hacer clic
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️ Modo Claro";
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.textContent = "🌙 Modo Oscuro";
        localStorage.setItem("theme", "light");
    }
});
