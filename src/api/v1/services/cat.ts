import { v4 as uuidv4 } from "uuid";
import * as CatModel from "../../../models/cat";

export const insertCat = async () => {
  await CatModel.insertCat({
    uuid: uuidv4(),
    age: 10,
    breed: "tricolor",
    description: "fat cat",
    location: "house",
    name: "gg",
  });
};
