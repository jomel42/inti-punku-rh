const API = "http://localhost:3000/api";

async function cargarResumen() {

    try {

        const respuesta = await fetch(`${API}/resumen`);
        const datos = await respuesta.json();

        document.getElementById("total-empleados").textContent =
            datos.empleados;

        document.getElementById("total-departamentos").textContent =
            datos.departamentos;

        document.getElementById("total-cargos").textContent =
            datos.cargos;

    } catch (error) {

        console.error("Error cargando resumen:", error);

    }
}

async function cargarEmpleados() {

    try {

        const respuesta = await fetch(`${API}/empleados`);
        const empleados = await respuesta.json();

        const tabla =
            document.getElementById("tabla-empleados");

        tabla.innerHTML = "";

        empleados.forEach(empleado => {

            const fila = document.createElement("tr");

            fila.innerHTML = `
                <td>${empleado.nombre} ${empleado.apellido}</td>
                <td>${empleado.correo}</td>
                <td>${empleado.departamento}</td>
                <td>${empleado.cargo}</td>
                <td>Bs ${empleado.salario}</td>
            `;

            tabla.appendChild(fila);

        });

    } catch (error) {

        console.error("Error cargando empleados:", error);

    }
}

cargarResumen();
cargarEmpleados();