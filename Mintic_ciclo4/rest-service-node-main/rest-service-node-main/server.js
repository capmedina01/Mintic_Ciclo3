// El siguiente codigo crea un servidor web utilizando express.js y body-parser
//Path se usa para trabajar con rutas y directorios
const path = require("path");

//xpress.js es un marco web que facilita la creacion de appweb y apis
const express = require("express");

//body-parser se utiliza para analizar el cuerpo de las solicitudes entrantes
//y extraer datos de esa solicitud (body)
const bodyParser = require("body-parser");

// la API corre sobre express
const app = express();

// la app usara body-parser
app.use(bodyParser.json());

//Cuado se realiza una peticion Get la pagina mostrara index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

//La solicitud post se enviara mediante la ruta /add
//traera a y b y decimos que estas vienen de la peticion
app.post("/add", (req, res) => {
    const { a, b } = req.body;

    // la respuesta a enviar es la suma de a y b parseados a entero
    res.send({
        result: parseInt(a) + parseInt(b)
    });
    console.log(result)
});

//definicion del puerto donde se ejecutara nuestra app
//
app.listen(5000, () => {
    console.log(`Server is running on port 5000.`);
});