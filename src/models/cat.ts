import db from "../api/v1/services/db";

export type ICat = {
  uuid: string;
  name: string;
  breed: string;
  age: number;
  description: string;
  location: string;
};

export const insertCat = async (data: Partial<ICat>): Promise<string> => {
  return db("cat").insert(data).returning("uuid");
};

export const getAllCats = async (): Promise<ICat[]> => {
  return db("cat");
};

export const getCat = async (whereParams: Partial<ICat>): Promise<ICat> => {
  return db("cat").where(whereParams).first();
};

export const updateCat = async (cat: Partial<ICat>): Promise<ICat> => {
  const { uuid, ...rest } = cat;
  return db("cat").where({ uuid }).update(rest);
};

export const deleteCat = async (uuid: string): Promise<ICat> => {
  return db("cat").where({ uuid }).del();
};
