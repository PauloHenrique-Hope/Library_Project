const { Sequelize} = require('sequelize')


const sequelize = new Sequelize('library', 'root', '', {
    host: "localhost",
    dialect:'mysql',
    port: 3307,
})

module.exports = sequelize