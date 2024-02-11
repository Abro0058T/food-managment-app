const mongoose = require('mongoose');

// Sanitize email address before storing (replace with actual sanitization code)
const sanitizeEmail = (email) => {
  // Implement email sanitization logic here (e.g., remove unnecessary spaces, trim, lowercase)
  return email;
};

const restaurantSchema = new mongoose.Schema({
  restaurant_id: {
    type: String,
    // required: true,
    unique: true, // Optional based on your needs
    minlength: 3, // Adjust based on your ID formatting rules
    maxlength: 255, // Adjust based on your ID formatting rules
  },
  name: {
    type: String,
    // required: true,
    trim: true, // Remove leading and trailing whitespace
    maxlength: 255, // Adjust based on your restaurant name length expectations
  },
  email: {
    type: String,
    // required: true,
    unique: true, // Optional based on your needs, but consider privacy implications
    trim: true, // Remove leading and trailing whitespace
    lowercase: true, // For case-insensitive matching
    validate: {
      validator: (email) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Invalid email format',
    },
    // Sanitize email before storing
    set: (email) => sanitizeEmail(email),
  },
  country: {
    type: String,
    // required: true,
    trim: true,
    maxlength: 50, // Adjust based on expected country names
  },
  state: {
    type: String,
    // required: true,
    trim: true,
    maxlength: 50, // Adjust based on expected state/province names
  },
  city: {
    type: String,
    // required: true,
    trim: true,
    maxlength: 50, // Adjust based on expected city names
  },
  address: {
    type: String,
    // required: true,
    trim: true,
    maxlength: 255, // Adjust based on expected address lengths
  },
  zipcode: {
    type: String,
    // required: true,
    trim: true,
    minlength: 5, // Adjust based on your zip code format rules
    maxlength: 10, // Adjust based on your zip code format rules
  },
  phone: {
    type: String,
    // required: true,
    trim: true,
    // Consider using a specific phone number validation library
    minlength: 8, // Adjust based on your expected phone number format
    maxlength: 20, // Adjust based on your expected phone number format
  },
  password:{
    type:String,
    require:true,
    minlength:5
  },
  collector_id:{
    type:String
  }
 });

module.exports  = mongoose.model('Restaurant', restaurantSchema);
