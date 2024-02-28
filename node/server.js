const express = require('express')
const app = express()
const port = 3000

const moment = require('moment')

const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const Peoples = require("./models/People")

app.engine('handlebars', expressHandlebars.engine({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: 'main',
    helpers: {
        formatDate: (date) => {
            return moment(date).format('DD/MM/YYYY hh:mm:ss')
        }
    }
}));

app.set('view engine', 'handlebars');

app.get('/', async function (req, res) {

    await Peoples.create({
        name: "Tiago"
    }).then(function () {
        Peoples.findAll({ order: [['id', 'DESC']] }).then(function (peoples) {
            res.render('people', { peoples: peoples });
        })
    }).catch(function (erro) {
        res.send("Error: people was not registered successfully!" + erro)
    })
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})