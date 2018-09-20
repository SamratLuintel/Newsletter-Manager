const mongoose = require("mongoose");
const { Schema } = mongoose;

const templateSchema = new Schema({
  json: {
    type: String,
    required: true
  },
  html: {
    type: String
  },
  name: {
    type: String
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: "Story"
  },
  lastEdited: {
    type: Date,
    default: Date.now()
  },
  _user: {
    type: Schema.Types.ObjectId
  }
});

mongoose.model("templates", templateSchema);
