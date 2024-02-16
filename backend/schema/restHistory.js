const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  order_id: { type: String, },
  restaurant_id: {
    type: String,


  },
  collector_id: {
    type: String ,

  },
  type: { type: String }, // Assuming this refers to order type (e.g., delivery, pickup)
  dishes: [
    {
      name: { type: String, },
      quantity: { type: Number,},
    },
  ],
  total_quantity: { type: Number },
  status: {
    type: String,

    enum: ["pending", "packing", "ready", "collected", "delivered"],
  },
  },
  // { typeKey: '$type' }
  );

module.exports = mongoose.model("OrderHistory", orderSchema);
