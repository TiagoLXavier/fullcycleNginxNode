const db = require('./db')

const People = db.sequelize.define('people', {
    name: {
        type: db.Sequelize.STRING
    }
})

//Criar a tabela
People.sync()

module.exports = People