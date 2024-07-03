module.exports = function (sequelize, DataTypes) {//esta funcionalidad se autoejecuta cuando llamo el archivo y me dice que puede ser llamada (la funcion) por otro archivo
    const Host = sequelize.define('Host',
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        hostId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        hostSince: {
          type: DataTypes.DATE
        },
        hostName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        hostLocation: {
          type: DataTypes.STRING,
          allowNull: false
        },
        neighburhood: {
          type: DataTypes.STRING,
          allowNull: false
        },
        roomType: {
          type: DataTypes.STRING,
          allowNull: false
        },
        roomType: {
          type: DataTypes.STRING,
          allowNull: false
        },
        bedrooms: {
          type: DataTypes.NUMBER
        },
        beds: {
          type: DataTypes.NUMBER
        },
        numberOfReviews: {
          type: DataTypes.NUMBER
        },
        availability30: {
          type: DataTypes.NUMBER
        },
        availability60: {
          type: DataTypes.NUMBER
        },
        availability90: {
          type: DataTypes.NUMBER
        },
        availability365: {
          type: DataTypes.NUMBER
        },
        price: {
          type: DataTypes.DECIMAL
        },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        }
      }, {
        sequelize,
        tableName: 'hosts',//esto me dice que está interactuando con la tabla 'users' 
        timestamps: true,// esto pone la fecha del momento en que se crea o se modifica un dato
        paranoid: true,//esto me asegura que me muestre los datos de la tabla con delete null
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [
              { name: 'id' }
            ]
          }
        ]
      }
    )
  
    Host.associate = function (models) {
      //User.hasMany(models.UserCredential, { as: 'userCredentials', foreignKey: 'userId' })
      //User.hasMany(models.UserResetPasswordToken, { as: 'userResetPasswordTokens', foreignKey: 'userId' })
      //User.hasMany(models.UserActivationToken, { as: 'userActivationTokens', foreignKey: 'userId' })
    }
  
    return Host //aqui le aclaro si el modelo esta relacionado con otros modelos

  }

