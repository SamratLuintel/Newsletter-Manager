const mongoose = require("mongoose");
const { Schema } = mongoose;

const campaignSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  recipients: {
    type: String,
    default: ""
  },
  lastEdited: {
    type: Date,
    default: Date.now
  },
  senderName: {
    type: String,
    default: ""
  }
});

mongoose.model("campaigns", campaignSchema);
