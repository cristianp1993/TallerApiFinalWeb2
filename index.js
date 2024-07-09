require('dotenv').config()
const express = require("express")
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const router = require('./src/routes')
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
//Middleware para manejar cookies y sesiones
app.use(cookieParser());
app.use(session({
    secret: 'c006f36d-97d4-4efb-8d88-9d091ae6486f',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // true si se usa HTTPS
        maxAge: 1000 * 60 * 60 * 24 // 1 día
    }
}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(expressLayouts);
app.set('layout', 'layouts/base');

//passportConfig(app);
//Rutas
router(app)

//Levantando el servidor para escuchar por el puerto 3000
app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT);
})