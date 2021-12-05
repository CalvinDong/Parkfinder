import Database from "better-sqlite3"
import {Database as SqliteDatabase} from "better-sqlite3"

export default new class SqliteService{
  private db: SqliteDatabase
  
  constructor(){
    this.db = new Database('parkfinder.db', { verbose: console.log, readonly: true }); // Should make function that handles when db can't be found
  }

  public async ReadAll(){
    const testStatement = "Parks, BBQ";
    const readEverything = this.db.prepare(
      `SELECT * FROM ${testStatement}`
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

}
