const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PurchasesSchema = new Schema({
  userId: String,
  stockId: String,
  quantity: Number,
  averagePrice: Number,
});

module.exports = mongoose.model('Purchases', PurchasesSchema);
