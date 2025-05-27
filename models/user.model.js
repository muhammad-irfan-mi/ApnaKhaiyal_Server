const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
    },
    password: {
      type: String,
    },
    roles: {
      type: String,
      enum: ["LOCAL SERVICES", "TOWN OWNER", "PROPERTY AGENT", "MARKETING AGENCIES", "INDIVIDUAL ACCOUNT"],
    },
  },
  {
    timestamps: true,
  }
);


const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
