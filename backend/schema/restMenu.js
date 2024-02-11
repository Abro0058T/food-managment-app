const mongoose = require('mongoose');

// Sanitize email address before storing (replace with actual sanitization code)


const menuSchema = new mongoose.Schema({
  restaurant_id: {
    type: String,
    // required: true,
    unique: true, // Optional based on your needs
    minlength: 3, // Adjust based on your ID formatting rules
    maxlength: 255, // Adjust based on your ID formatting rules
  },
  time_of_serive:{
    type:Array,
  },
  days_of_service:{
    type:Array,
  },
  lunch:{
    type:Object
  },
  dinner:{
    type:Object
  },
  breakfast:{
    type:Object
  }
 });

module.exports  = mongoose.model('Menu', menuSchema);
