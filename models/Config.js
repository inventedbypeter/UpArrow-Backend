const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConfigSchema = new Schema({
  prices: Object,
});

module.exports = mongoose.model('Config', ConfigSchema);