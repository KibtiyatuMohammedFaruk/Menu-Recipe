import { Schema, models, model } from "mongoose";

const menuSchema = new Schema(
  {
    // creator: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["continental", "local"],
    },
    timeToBeTaken: {
      type: String,
      required: true,
      enum: ["breakfast", "lunch", "supper"],
    },
    ingredients: {
      type: [String],
      required: true,
    },
    timeTakenToCook: {
      type: String,
      required: true,
    },
    steps: {
      type: [String],
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Menu || model("Menu", menuSchema);
