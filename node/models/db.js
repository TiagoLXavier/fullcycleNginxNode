const Sequelize = require("sequelize")

const sequelize = new Sequelize('nodedb', 'root', 'root',{
    host: 'db',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}