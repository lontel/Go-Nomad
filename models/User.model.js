const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: [true, 'Username already in use'],
      required: [true, 'Username is required'],
    },
    email: {
      type: String,
      unique: [true, 'Email is already in use'],
      required: [true, 'Email is required'],
    },
    name: {
      type: String,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    country: {
      type: String,
      required: true,
    },
    role: {
      enum: ['ADMIN', 'USER', 'PREMIUM'],
      default: 'USER'
    }
  },
  {
    timestamps: [true],
  }
);

const User = model("User", userSchema);

module.exports = User;
