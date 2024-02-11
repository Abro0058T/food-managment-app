const mongoose = require('mongoose');

const foodCollectorSchema = new mongoose.Schema({
  collector_id: { type: String, unique: true },
  phone_number: {
    type: String,
    validate: {
      validator: (phone) => /^(\+\d{1,2}\s)?\(?\d{3}\)?[-.\s]\d{3}[-.\s]\d{4}$/,
      message: 'Invalid phone number format'
    }
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: (email) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Invalid email format'
    }
  },
  area: {
    type: Array,
   },
  restaurants_under: {
    type: Object,
    default: []
  },
password:{

    type :String 
}});

module.exports = mongoose.model('FoodCollector', foodCollectorSchema);
