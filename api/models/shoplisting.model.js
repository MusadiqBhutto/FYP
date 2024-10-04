import mongoose from "mongoose";

const shoplistingSchema = new mongoose.Schema(
  {
    shopname: {
      type: String,
      required: true,
    },
    ownername: {
        type: String,
        required: true,
      },
      email: {
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

const Shoplisting = mongoose.model("Shoplisting", shoplistingSchema);

export default Shoplisting;
