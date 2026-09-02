const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: process.env.DB_HOST || "db",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root123",
    database: process.env.DB_NAME || "inti_punku"
});

app.get("/api/estado", (req, res) => {
    res.json({
        mensaje: "API Inti Punku funcionando"
    });
});

app.get("/api/departamentos", (req, res) => {

    db.query("SELECT * FROM departamentos", (error, resultados) => {

        if (error) {
            return res.status(500).json(error);
        }

        res.json(resultados);
    });

});

app.get("/api/cargos", (req, res) => {

    db.query("SELECT * FROM cargos", (error, resultados) => {

        if (error) {
            return res.status(500).json(error);
        }

        res.json(resultados);
    });

});

app.get("/api/empleados", (req, res) => {

    const sql = `
        SELECT
            e.id_empleado,
            e.nombre,
            e.apellido,
            e.correo,
            e.telefono,
            e.fecha_ingreso,
            e.salario,
            d.nombre AS departamento,
            c.nombre AS cargo
        FROM empleados e
        INNER JOIN departamentos d
            ON e.id_departamento = d.id_departamento
        INNER JOIN cargos c
            ON e.id_cargo = c.id_cargo
    `;

    db.query(sql, (error, resultados) => {

        if (error) {
            return res.status(500).json(error);
        }

        res.json(resultados);
    });

});

app.get("/api/resumen", (req, res) => {

    const sql = `
        SELECT
        (SELECT COUNT(*) FROM empleados) AS empleados,
        (SELECT COUNT(*) FROM departamentos) AS departamentos,
        (SELECT COUNT(*) FROM cargos) AS cargos
    `;

    db.query(sql, (error, resultados) => {

        if (error) {
            return res.status(500).json(error);
        }

        res.json(resultados[0]);
    });

});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Backend Inti Punku ejecutándose en puerto " + PORT);
});