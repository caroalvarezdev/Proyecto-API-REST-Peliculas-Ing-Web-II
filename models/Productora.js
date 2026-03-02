const { Schema, model } = require('mongoose');

const ProductoraSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  pais: {
    type: String
  },
  estado: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = model('Productora', ProductoraSchema);