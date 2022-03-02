import { dbContext } from "../db/DbContext";

export class GalaxysService {
  async getAllGalaxys(query = {}) {
    const galaxys = await dbContext.Galaxys.find(query);
    return galaxys;
  }

  async getById(id) {
    const galaxys = await dbContext.Galaxys.findById(id);
    return galaxys;
  }

  async createGalaxy(body) {
    const galaxy = await dbContext.Galaxys.create(body);
    return galaxy;
  }
}

export const galaxysService = new GalaxysService();
