document.getElementById('fecha').addEventListener("input", function() {
    calcularEdad(this.value);
});

function calcularEdad(fechaString) {
    const edadDiv = document.getElementById('edadDiv'); // Asegúrate de que existe este div
    if (!fechaString) {
        edadDiv.innerHTML = ""; // Usamos innerHTML con mayúsculas
        return;
    }

    let dia = new Date();
    let fecha = new Date(fechaString);

    if (fecha > dia) {
        edadDiv.innerHTML = "Fecha invalida";
        return;
    }

    let año = dia.getFullYear() - fecha.getFullYear();
    let m = dia.getMonth() - fecha.getMonth();
    let d = dia.getDate() - fecha.getDate();

    if (m < 0 || (m === 0 && d < 0)) {
        año--;
        m += 12;
    }
    if (d < 0) {
        m--;
        d += new Date(dia.getFullYear(), dia.getMonth(), 0).getDate();
    }

    edadDiv.innerHTML = `${año} años, ${m} meses, y ${d} días`; // Usar la variable correcta
}
