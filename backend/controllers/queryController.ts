import {Request, Response} from "express"
import SqliteService from "../common/services/better-sqlite3_service";
import MemoryService from "../common/services/mem-service"
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');

interface geojson{
  location: string,
}

export default new class QueryController {
  constructor(){
    
  }

  static async aggregateFiles(categoryLocations: Array<any>){ //Should make custom data types for our incoming data instead of using any
    const length = categoryLocations.length;
    let tableLength;
    const starter = `{
      "type": "FeatureCollection",
      "features": [
        `;
    const end = `]\n}`;
    let aggregate: String = starter;
    let toSend: String;
    
    for (let i = 0; i < length; i++){
      tableLength = categoryLocations[i].length;
      for (let j = 0; j < tableLength; j++){
        aggregate += categoryLocations[i][j].location
        aggregate += ',\n'; // Add comma to end of location if it is not the last element
      }
    }

    let lastIndex = aggregate.lastIndexOf(",");
    toSend = aggregate.slice(0, lastIndex);
    toSend += '\n';
    toSend += end;

    return toSend;
  }

  async listAllParks(req: Request, res: Response){
    const result: Array<Object> = await SqliteService.ReadAll() // Could define Sqlite service using an interface (e.g. CRUD interface), will have to remove "new" from export line
    const file = await QueryController.aggregateFiles(result)
    let key = MemoryService.createEntry(file)
    res.status(200).send(key)
  }

  async getPark(req: Request, res: Response){
    const table = req.params.table;
    const id = req.params.id;

    const result: Array<Object> = await SqliteService.GetPark(table, id);
    res.status(200).send(result)

  }

  async processFilter(req: Request, res: Response){
    const result: Array<Object> = await SqliteService.ReadFilter(["PARK", "LAKES"]) // Could define Sqlite service using an interface (e.g. CRUD interface), will have to remove "new" from export line
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
