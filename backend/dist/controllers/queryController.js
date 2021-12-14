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
const mem_service_1 = __importDefault(require("../common/services/mem-service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:users-controller');
exports.default = new class QueryController {
    constructor() {
    }
    static aggregateFiles(locations) {
        return __awaiter(this, void 0, void 0, function* () {
            const length = locations.length;
            const starter = `{
      "type": "FeatureCollection",
      "features": [
        `;
            const end = `]\n}`;
            let toSend = starter;
            for (let i = 0; i < length; i++) {
                toSend += locations[i].location;
                if (i == length - 1) {
                    toSend += '\n';
                }
                else {
                    toSend += ',\n';
                }
            }
            toSend += end;
            return toSend;
        });
    }
    listAllParks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield better_sqlite3_service_1.default.ReadAll(); // Could define Sqlite service using an interface (e.g. CRUD interface), will have to remove "new" from export line
            res.status(200).send(result);
        });
    }
    processFilter(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield better_sqlite3_service_1.default.ReadAll(); // Could define Sqlite service using an interface (e.g. CRUD interface), will have to remove "new" from export line
            const file = yield QueryController.aggregateFiles(result);
            let key = mem_service_1.default.createEntry(file);
            res.status(200).send(key);
        });
    }
    getFile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = req.params.id;
            const file = mem_service_1.default.getEntry(key);
            const deepCopy = file === null || file === void 0 ? void 0 : file.repeat(1); // To ensure that we can safely delete entry in the memory database
            mem_service_1.default.deleteEntry(key);
            res.type('text.html');
            res.status(200).send(deepCopy);
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnlDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvcXVlcnlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdUdBQXNFO0FBQ3RFLGlGQUEwRDtBQUMxRCxrREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHNCQUFzQixDQUFDLENBQUM7QUFFM0Qsa0JBQWUsSUFBSSxNQUFNLGVBQWU7SUFDdEM7SUFFQSxDQUFDO0lBRUQsTUFBTSxDQUFPLGNBQWMsQ0FBQyxTQUFxQjs7WUFDL0MsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUNoQyxNQUFNLE9BQU8sR0FBRzs7O1NBR1gsQ0FBQztZQUNOLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQztZQUNuQixJQUFJLE1BQU0sR0FBVyxPQUFPLENBQUM7WUFFN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztnQkFDOUIsTUFBTSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUE7Z0JBQy9CLElBQUksQ0FBQyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUM7b0JBQ2xCLE1BQU0sSUFBSSxJQUFJLENBQUM7aUJBQ2hCO3FCQUNHO29CQUNGLE1BQU0sSUFBSSxLQUFLLENBQUM7aUJBQ2pCO2FBQ0Y7WUFFRCxNQUFNLElBQUksR0FBRyxDQUFBO1lBRWIsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztLQUFBO0lBRUssWUFBWSxDQUFDLEdBQVksRUFBRSxHQUFhOztZQUM1QyxNQUFNLE1BQU0sR0FBa0IsTUFBTSxnQ0FBYSxDQUFDLE9BQU8sRUFBRSxDQUFBLENBQUMsbUhBQW1IO1lBQy9LLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzlCLENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxHQUFZLEVBQUUsR0FBYTs7WUFDN0MsTUFBTSxNQUFNLEdBQWtCLE1BQU0sZ0NBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQSxDQUFDLG1IQUFtSDtZQUMvSyxNQUFNLElBQUksR0FBRyxNQUFNLGVBQWUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDekQsSUFBSSxHQUFHLEdBQUcscUJBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDekMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDM0IsQ0FBQztLQUFBO0lBRUssT0FBTyxDQUFDLEdBQVksRUFBRSxHQUFhOztZQUN2QyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQTtZQUN6QixNQUFNLElBQUksR0FBRyxxQkFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsbUVBQW1FO1lBQ3BHLHFCQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDckIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDaEMsQ0FBQztLQUFBO0NBQ0YsQ0FBQSJ9