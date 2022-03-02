import { Schema } from "mongoose";

export const GalaxyScheme = new Schema({
  name: { type: String, required: true },
});
