import mongoose, { mongo } from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'], //here, in array, first element is its value and second element is a warning message if user didnt enter password
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', userSchema);