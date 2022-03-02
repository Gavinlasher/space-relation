import { Auth0Provider } from "@bcwdev/auth0provider";
import { query } from "express";
import { galaxysService } from "../services/GalaxysService";
import { starsService } from "../services/StarsServices";
import BaseController from "../utils/BaseController";

export class GalaxysController extends BaseController {
  constructor() {
    super("api/galaxys");
    this.router
      .get("", this.getAllGalaxys)
      .get("/:id", this.getById)
      .get("/:id/stars", this.getStarsByGalaxyId)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.createGalaxy);
  }

  async getById(req, res, next) {
    try {
      const galaxys = await galaxysService.getById(req.params.id);
      res.send(galaxys);
    } catch (error) {
      next(error);
    }
  }
  async getStarsByGalaxyId(req, res, next) {
    try {
      const stars = await starsService.getAllStars({ galaxyId: req.params.id });
      return res.send(stars);
    } catch (error) {
      next(error);
    }
  }

  async getAllGalaxys(req, res, next) {
    try {
      const galaxys = await galaxysService.getAllGalaxys(req.query);
      return res.send(galaxys);
    } catch (error) {
      next(error);
    }
  }

  async createGalaxy(req, res, next) {
    try {
      req.body.creatorId = req.body.userId;
      const galaxy = await galaxysService.createGalaxy(req.body);
      return res.send(galaxy);
    } catch (error) {
      next(error);
    }
  }
}
