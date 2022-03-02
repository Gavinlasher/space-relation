import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

export const StarSchema = new Schema(
  {
    name: { type: String, required: true },
    creatorId: { type: ObjectId, required: true, ref: "Account" },
    galaxyId: { type: ObjectId, required: true, ref: "Galaxy" },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
StarSchema.virtual("galaxy", {
  localField: "galaxyId",
  foreignField: "_id",
  justOne: true,
  ref: "Galaxy",
});
