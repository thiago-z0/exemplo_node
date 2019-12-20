const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Algo extends Model {
  static init(sequelize) {
    super.init(
      {
        algo: Sequelize.STRING
      },
      {
        sequelize
      }
    );
    return this;
  }
}

module.exports = Algo;
