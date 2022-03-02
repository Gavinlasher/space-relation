import { dbContext } from "../db/DbContext";

export class StarsService {
  async getAllStars(query = {}) {
    const stars = await dbContext.Stars.find(query).populate("galaxy", "name");
    return stars;
  }
  async getById(id) {
    const star = await dbContext.Stars.findById(id);
    return star;
  }

  async createStars(body) {
    const star = await dbContext.Stars.create(body);
    return star;
  }
}

export const starsService = new StarsService();
