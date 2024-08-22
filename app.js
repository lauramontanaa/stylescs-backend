// Importar Express y Sequelize
const express = require('express');
const sequelize = require('./src/config/database');

// Importar rutas
const categoryRouter = require('./src/routes/categoryRoutes');
const contactRouter = require('./src/routes/contactRoutes');
const personRouter = require('./src/routes/personRoutes');
const productRouter = require('./src/routes/productRoutes');
const proveedorRouter = require('./src/routes/proveedorRoutes');
const roleRouter = require('./src/routes/roleRoutes');
const stockRouter = require('./src/routes/stockRoutes');
const userRouter = require('./src/routes/userRoutes');

// Instancia Express
const app = express();

// Procesar solicitudes en JSON (middleware)
app.use(express.json());

// Middleware de registro de solicitudes
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Ruta de bienvenida
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenido' });
});

// Usa las rutas
app.use('/api', categoryRouter);
app.use('/api', contactRouter);
app.use('/api', personRouter);
app.use('/api', productRouter);
app.use('/api', proveedorRouter);
app.use('/api', roleRouter);
app.use('/api', stockRouter);
app.use('/api', userRouter);

// Definición puerto del servidor (variable de entorno PORT)
const port = process.env.PORT || 8080;

// Sincronización BD con Sequelize 
sequelize.sync().then(() => {
    console.log('Base de datos sincronizada');
    app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
    });
}).catch(err => {
    console.error('Error al sincronizar la base de datos', err);
});
