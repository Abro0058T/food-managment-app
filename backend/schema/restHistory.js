const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  order_id: { type: String, },
  restaurant_id: {
    type: String,
    ref: "Restaurant",

  },
  collector_id: {
    type: String ,
    ref: "Collector",

  },
  type: { type: String }, // Assuming this refers to order type (e.g., delivery, pickup)
  dishes: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  total_quantity: { type: Number },
  status: {
    type: String,

    enum: ["pending", "packing", "ready", "collected", "delivered"],
  },
  });

module.exports = mongoose.model("OrderHistory", orderSchema);
