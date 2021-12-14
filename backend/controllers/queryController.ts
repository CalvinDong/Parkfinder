import {Request, Response} from "express"
import SqliteService from "../common/services/better-sqlite3_service";
import MemoryService from "../common/services/mem-service"
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');

export default new class QueryController {
  constructor(){
    
  }

  static async aggregateFiles(locations: Array<any>){ //Should make custom data types for our incoming data istead of using any
    const length = locations.length;
    const starter = `{
      "type": "FeatureCollection",
      "features": [
        `;
    const end = `]\n}`;
    let toSend: String = starter;

    for (let i = 0; i < length; i++){
      toSend += locations[i].location
      if (i == length - 1){
        toSend += '\n';
      }
      else{
        toSend += ',\n';
      }
    }

    toSend += end

    return toSend;
  }

  async listAllParks(req: Request, res: Response){
    const result: Array<Object> = await SqliteService.ReadAll() // Could define Sqlite service using an interface (e.g. CRUD interface), will have to remove "new" from export line
    res.status(200).send(result)
  }

  async processFilter(req: Request, res: Response){
    const result: Array<Object> = await SqliteService.ReadAll() // Could define Sqlite service using an interface (e.g. CRUD interface), will have to remove "new" from export line
    const file = await QueryController.aggregateFiles(result)
    let key = MemoryService.createEntry(file)
    res.status(200).send(key)
  }

  async getFile(req: Request, res: Response){
    const key = req.params.id
    const file = MemoryService.getEntry(key)
    const deepCopy = file?.repeat(1) // To ensure that we can safely delete entry in the memory database
    MemoryService.deleteEntry(key)
    res.type('text.html')
    res.status(200).send(deepCopy)
  }
}
