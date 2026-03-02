const { Schema, model } = require('mongoose');

const DirectorSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  nacionalidad: {
    type: String
  },
  estado: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = model('Director', DirectorSchema);