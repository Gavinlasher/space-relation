import { Auth0Provider } from "@bcwdev/auth0provider";
import { starsService } from "../services/StarsServices";
import BaseController from "../utils/BaseController";

export class StarsController extends BaseController {
  constructor() {
    super("api/stars");
    this.router
      .get("", this.getAllStars)
      .get("/id:", this.getById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.createStars);
  }
  async getById(res, req, next) {
    try {
      const star = await starsService.getById(req.params.id);
      return res.send(star);
    } catch (error) {
      next(error);
    }
  }
  async getAllStars(req, res, next) {
    try {
      const stars = await starsService.getAllStars(req.query);
      return res.send(stars);
    } catch (error) {
      next(error);
    }
  }

  async createStars(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id;
      const star = await starsService.createStars(req.body);
      return res.send(star);
    } catch (error) {
      next(error);
    }
  }
}
