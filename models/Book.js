const { DataTypes} = require('sequelize')

const db = require('../db/conn')

const Book = db.define('Book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    n_pages: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

})

module.exports = Book