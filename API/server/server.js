const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const usersController = require('../controller/usersController');
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

/*Rotas testes*/
router.post('/users', usersController.createUser);
router.get('/users', usersController.getUsers);
router.delete('/users/:id', usersController.deleteUser);

/*Rotas formEspetaculo*/
router.post('/espetaculos', formEspetaculo.createEspetaculo);
router.get('/espetaculos', formEspetaculo.getEspetaculos);
router.delete('/espetaculos/:id', formEspetaculo.deleteEspetaculo);

mongoose.connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true });
app.listen(port);
console.log('conectado a porta ' + port);