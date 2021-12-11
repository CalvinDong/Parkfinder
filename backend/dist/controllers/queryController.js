"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const better_sqlite3_service_1 = __importDefault(require("../common/services/better-sqlite3_service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:users-controller');
exports.default = new class QueryController {
    listAllParks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield better_sqlite3_service_1.default.ReadAll(); // Could define Sqlite service using an interface (e.g. CRUD interface), will have to remove "new" from export line
            console.log(result);
            res.status(200).send(result);
        });
    }
    testFile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
    }`;
            //let buffer = Buffer.from(testText, 'utf8')
            //res.setHeader( 'Content-Disposition', 'attachment; filename=testText.txt');
            //res.setHeader( 'Content-Type', 'text/html' );
            res.type('text.html');
            res.status(200).send(testText);
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnlDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvcXVlcnlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdUdBQXNFO0FBQ3RFLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUUzRCxrQkFBZSxJQUFJLE1BQU0sZUFBZTtJQUNoQyxZQUFZLENBQUMsR0FBWSxFQUFFLEdBQWE7O1lBQzVDLE1BQU0sTUFBTSxHQUFHLE1BQU0sZ0NBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQSxDQUFDLG1IQUFtSDtZQUNoSyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ25CLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzlCLENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxHQUFZLEVBQUUsR0FBYTs7WUFDeEMsTUFBTSxRQUFRLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQWtIZixDQUFBO1lBRUYsNENBQTRDO1lBQzVDLDZFQUE2RTtZQUM3RSwrQ0FBK0M7WUFDL0MsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUNyQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNoQyxDQUFDO0tBQUE7Q0FDRixDQUFBIn0=