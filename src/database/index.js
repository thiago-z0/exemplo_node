const Sequelize = require('sequelize');

const Algo = require('../app/models/Algo');

const databaseConfig = require('../config/database');

const models = [Algo];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // conexão base dados
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}
module.exports = new Database();
