const mongoose = require("mongoose");
const { Schema } = mongoose;

const campaignSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  recipients: {
    type: String,
    default: ""
  },
  // User can change the sender email to any name they want
  email: {
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
  },
  subject: {
    type: String,
    default: ""
  },
  draft: {
    type: Boolean,
    default: true
  },
  template: {
    type: Schema.Types.ObjectId,
    ref: "templates"
  }
});

mongoose.model("campaigns", campaignSchema);
