const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
  name: { type: String, require: true },
  balance: { type: Number, require: true }
});

module.exports = {
  Account: mongoose.model('Account', accountSchema)
}
