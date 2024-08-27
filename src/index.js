import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3031;

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());

// Base de datos simulada de usuarios
const users = [
    { id: 1, email: "user1@example.com", password: "12345" },
    { id: 2, email: "user2@example.com", password: "123476" }
];

// Ruta principal
app.get("/", (req, res) => {
    res.send("Hola mundo");
});

// Ruta para iniciar sesión
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    // Verificamos que el usuario existe y la contraseña es correcta
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        res.status(200).json({ message: "Autenticación satisfactoria" });
    } else {
        res.status(401).json({ error: "Error en la autenticación" });
    }
});

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor web iniciado en el puerto ${PORT}`);
});


