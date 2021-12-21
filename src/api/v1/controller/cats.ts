import { Request, Response } from 'express'
import { insertCat, updateCat, getAllsCats, getCat, deleteCat, getLocationCats } from '../services/cat';

export class catsController {
  async postCat(req: Request, res: Response) {
    await insertCat(req.body);
    return res.status(200).send({
      message: "success",
    });
  }
  async putCat(req: Request, res: Response) {
    await updateCat(req.body);
    return res.status(200).send({
      message: "success"
    });
  }
  async getAllCats(req: Request, res: Response) {
    const data = await getAllsCats();
    return res.status(200).send({
      message: "success",
      data
    });
  }
  async getOneCat(req: Request, res: Response) {
    const data = await getCat(req.params.uuid);
    return res.status(200).send({
      message: "success",
      data
    });
  }
  async deleteCat(req: Request, res: Response) {
    const data = await deleteCat(req.params.uuid);
    return res.status(200).send({
      message: "success",
      data
    });
  }
  async getLocationCats(req: Request, res: Response) {
    const data = await getLocationCats();
    return res.status(200).send({
      message: "success",
      data
    });
  }
}