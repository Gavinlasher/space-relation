import mongoose from "mongoose";
import { AccountSchema, ProfileSchema } from "../models/Account";
import { GalaxyScheme } from "../models/Galaxy";
import { StarSchema } from "../models/Star";
import { ValueSchema } from "../models/Value";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Account = mongoose.model("Account", AccountSchema);
  Profiles = mongoose.model("Profile", ProfileSchema, "accounts");
  Galaxys = mongoose.model("Galaxy", GalaxyScheme);
  Stars = mongoose.model("Star", StarSchema);
}

export const dbContext = new DbContext();
