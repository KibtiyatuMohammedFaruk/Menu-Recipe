import mongoose from "mongoose";

// mongodb+srv://kibtiya:Optimistic@dev.ls26p.mongodb.net/recipe?retryWrites=true&w=majority

export const dbConnect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect("// mongodb+srv://kibtiya:Optimistic@dev.ls26p.mongodb.net/recipe?retryWrites=true&w=majority");
    console.log("Database connected successfully.");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
