import { group } from "console";
import { v4 as uuidv4 } from "uuid";
import * as CatModel from "../../../models/cat";

export const insertCat = async (cat: CatModel.ICat) => {
  return await CatModel.insertCat({
    uuid: uuidv4(),
    age: cat.age,
    breed: cat.breed,
    description: cat.description,
    location: cat.location,
    name: cat.name,
  });
};

export const updateCat = async (cat: CatModel.ICat) => {
  return await CatModel.updateCat({
    uuid: cat.uuid,
    age: cat.age,
    breed: cat.breed,
    description: cat.description,
    location: cat.location,
    name: cat.name,
  });
};

export const getAllsCats = async () => {
  return await CatModel.getAllCats();
}
export const getCat = async (uuid: string) => {
  return await CatModel.getCat({uuid});
}
export const deleteCat = async (uuid: string) => {
  return await CatModel.deleteCat(uuid);
}
export const getLocationCats = async () => {
  const locations = await CatModel.getLocationCats();
  return locations.reduce((groups: any,loc: CatModel.ILocation)=> {
    const group = groups[loc.location]
    groups[loc.location]= {...group,...{[loc.uuid]:loc}}
    return {...groups}
  },{})
}