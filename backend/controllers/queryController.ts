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

  async testFile(req: Request, res: Response){
    const testText = `{
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Pioneers Memorial Park",
            "id": "LP00001"
          },
          "geometry": {
            "coordinates": [
              [
                [
                  151.156402,
                  -33.877553
                ],
                [
                  151.156631,
                  -33.879682
                ],
                [
                  151.157123,
                  -33.879658
                ],
                [
                  151.157141,
                  -33.879805
                ],
                [
                  151.157501,
                  -33.879767
                ],
                [
                  151.157535,
                  -33.87991
                ],
                [
                  151.157661,
                  -33.8799
                ],
                [
                  151.15765,
                  -33.879744
                ],
                [
                  151.158211,
                  -33.879701
                ],
                [
                  151.158239,
                  -33.879853
                ],
                [
                  151.158531,
                  -33.879834
                ],
                [
                  151.158257,
                  -33.87742
                ],
                [
                  151.158165,
                  -33.877368
                ],
                [
                  151.156454,
                  -33.877463
                ],
                [
                  151.156402,
                  -33.877553
                ]
              ]
            ],
            "type": "Polygon"
          },
          "id": "2a291db8f631557f3bea7b17cf2ec031"
        },
        {
          "type": "Feature",
          "properties": {
            "id": "LP00002",
            "name": "War Memorial Park"
          },
          "geometry": {
            "coordinates": [
              [
                [
                  151.16336,
                  -33.877686
                ],
                [
                  151.162926,
                  -33.878937
                ],
                [
                  151.164068,
                  -33.879176
                ],
                [
                  151.164502,
                  -33.877976
                ],
                [
                  151.16336,
                  -33.877686
                ]
              ]
            ],
            "type": "Polygon"
          },
          "id": "73551427014be48e77d10f4dd2d7bd24"
        }
      ],
      "type": "FeatureCollection"
    }`

    //let buffer = Buffer.from(testText, 'utf8')
    //res.setHeader( 'Content-Disposition', 'attachment; filename=testText.txt');
    //res.setHeader( 'Content-Type', 'text/html' );
    res.type('text.html')
    res.status(200).send(testText)
  }
}
