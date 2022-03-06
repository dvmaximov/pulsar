import { Injectable } from "@nestjs/common";
import axios from "axios";
// import { access } from "fs/promises";
// import { constants } from "fs";

const host = "http://localhost:5000/";

@Injectable()
export class ApiService {
  // constructor() {
  //   this.createDb();
  // }

  // private async createDb() {
  //   const fileExists = await access("db.json");
  //   console.log("existing file ", fileExists);
  // }

  async create(table: string, value: unknown): Promise<any> {
    const result = await axios.post(`${host}${table}`, value);
    return result.data;
  }

  async getAll(table: string): Promise<any> {
    const result = await axios.get(`${host}${table}`);
    return result.data;
  }

  async getById(table: string, id: unknown): Promise<any> {
    const result = await axios.get(`${host}${table}/${id}`);
    return result.data;
  }

  async update(table: string, id: unknown, value: unknown): Promise<any> {
    await axios.put(`${host}${table}/${id}`, value);
  }

  async delete(table: string, id: unknown): Promise<any> {
    return await axios.delete(`${host}${table}/${id}`);
  }
}
