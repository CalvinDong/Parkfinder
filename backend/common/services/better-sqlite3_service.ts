import Database from "better-sqlite3"
import {Database as SqliteDatabase} from "better-sqlite3"

export default new class SqliteService{
  //private db = new Database('parkfinder.db', { verbose: console.log });
  private db: SqliteDatabase
  
  constructor(){
    this.db = new Database('parkfinder.db', { verbose: console.log });
  }

  public async ReadAll(){
    const readEverything = this.db.prepare(
      "SELECT * FROM Parks"
    );
    const result = await readEverything.all()
    return result
  }

}
