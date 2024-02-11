const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  order_id: { type: String,  unique: true },
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
  collection_time: { type: Date ,default:"Not collected"},
  total_quantity: { type: Number },
  status: {
    type: String,

    enum: ["pending", "packing ", "ready", "collected", "delivered"],
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }, // For tracking updates
});

module.exports = mongoose.model("OrderHistory", orderSchema);
