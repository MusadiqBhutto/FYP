import mongoose from "mongoose";

const workinglistingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      experience: {
        type: String,
        required: true,
      },
      education: {
        type: String,
        required: true,
      },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
        type: String,
        required: true,
      },
    type: {
      type: String,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const WorkingListingSchema = mongoose.model("Workinglisting", workinglistingSchema);

export default WorkingListingSchema;
