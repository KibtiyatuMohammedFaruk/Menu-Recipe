import { Schema, models, model } from "mongoose";

const recipeSchema = new Schema({
  ingredients: {
    type: [String],
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  steps: {
    type: [String],
    required: true,
  },
});

export default models.Recipe || model("Recipe", recipeSchema);
