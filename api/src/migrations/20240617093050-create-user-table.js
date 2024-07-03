'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('hosts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      hostId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      hostSince: {
        type: Sequelize.DATE
      },
      hostName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hostLocation: {
        type: Sequelize.STRING,
        allowNull: false
      },
      neighburhood: {
        type: Sequelize.STRING,
        allowNull: false
      },
      roomType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      roomType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bedrooms: {
        type: Sequelize.NUMBER
      },
      beds: {
        type: Sequelize.NUMBER
      },
      numberOfReviews: {
        type: Sequelize.NUMBER
      },
      availability30: {
        type: Sequelize.NUMBER
      },
      availability60: {
        type: Sequelize.NUMBER
      },
      availability90: {
        type: Sequelize.NUMBER
      },
      availability365: {
        type: Sequelize.NUMBER
      },
      price: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users')
  }
}