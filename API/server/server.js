const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const formFotografias = require('../controller/formFotografias');
const formEspetaculo = require('../controller/formEspetaculo');

const mongoURI = 'mongodb+srv://pautataa:lulu1010@cluster0.lomt4wp.mongodb.net/?retryWrites=true&w=majority';

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3007;
const router = express.Router();

app.use('/api/v1', router);

/*Rotas*/
const rotas = require('../route/rotas')
router.route('/usuarios').get(require('../JWT'), rotas.getUsuarios).post(rotas.postUsuarios);
router.route('/login').post(rotas.login);

/*Rotas formFotografias*/
router.post('/fotografias', formFotografias.createFotografias);
router.get('/fotografias', formFotografias.getFotografias);
router.delete('/fotografias/:id', formFotografias.deleteFotografia);

/*Rotas formEspetaculo*/
router.post('/espetaculos', formEspetaculo.createEspetaculo);
router.get('/espetaculos', formEspetaculo.getEspetaculos);
router.delete('/espetaculos/:id', formEspetaculo.deleteEspetaculo);

mongoose.connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true });
app.listen(port);
console.log('conectado a porta ' + port);