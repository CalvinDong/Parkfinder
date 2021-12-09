import {Request, Response} from "express"
import SqliteService from "../common/services/better-sqlite3_service";
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');

export default new class QueryController {
  async listAllParks(req: Request, res: Response){
    const result = await SqliteService.ReadAll() // Could define Sqlite service using an interface (e.g. CRUD interface), will have to remove "new" from export line
    console.log(result)
    res.status(200).send(result)
  }
}
