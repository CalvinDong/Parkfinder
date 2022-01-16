import Database from "better-sqlite3"
import {Database as SqliteDatabase} from "better-sqlite3"

import config from './config'

export default new class SqliteService{
  private db: SqliteDatabase
  
  constructor(){
    this.db = new Database(config.DB_NAME, { verbose: console.log, readonly: true }); // Should make function that handles when db can't be found
  }

  public async ReadAll(){
    /*const testStatement = "Parks, BBQ";
    const readEverything = this.db.prepare(
      `SELECT * FROM ${testStatement}`
    );*/
    const readEverything = this.db.prepare(
      `SELECT location FROM park`
    );
    const result = await readEverything.all()
    return result
  }

  public async ReadAllTableNames(){
    const readEveryTable = this.db.prepare(
      `SELECT name FROM sqlite_master WHERE type='table'`
    );
    const result = await readEveryTable.all()
    return result
  }

  public async ReadFilter(filter:Array<string>){
    let result: any = [];
    filter.forEach(async (option) => {
      let readTable = this.db.prepare(
        `SELECT location FROM ${option}`
      );
      let locations = await readTable.all();
      result.push(locations);
    })
    return result;
  }

  public async GetPark(table: string, id: string){
    console.log(table)
    console.log(id)
    const prepare = this.db.prepare(
      `SELECT * FROM ${table} WHERE id=${id}`
    )
    const result = await prepare.get()
    return result
  }

}
