import Database from "better-sqlite3"

export default new class SqliteService{
  private db = new Database('parkfinder.db', { verbose: console.log });
  /*constructor(){

  }*/

  public async ReadAll(){
    const readEverything = this.db.prepare(
      "SELECT * FROM Base"
    );

    const result = readEverything.get()
    return result
  }

}



//const Database = require('better-sqlite3');