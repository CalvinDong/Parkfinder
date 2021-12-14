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
const better_sqlite3_1 = __importDefault(require("better-sqlite3"));
exports.default = new class SqliteService {
    constructor() {
        this.db = new better_sqlite3_1.default('parkfinder.db', { verbose: console.log, readonly: true }); // Should make function that handles when db can't be found
    }
    ReadAll() {
        return __awaiter(this, void 0, void 0, function* () {
            /*const testStatement = "Parks, BBQ";
            const readEverything = this.db.prepare(
              `SELECT * FROM ${testStatement}`
            );*/
            const readEverything = this.db.prepare(`SELECT location FROM Parks`);
            const result = yield readEverything.all();
            return result;
        });
    }
    ReadAllTableNames() {
        return __awaiter(this, void 0, void 0, function* () {
            const readEveryTable = this.db.prepare(`SELECT name FROM sqlite_master WHERE type='table'`);
            const result = yield readEveryTable.all();
            return result;
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmV0dGVyLXNxbGl0ZTNfc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9iZXR0ZXItc3FsaXRlM19zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQXFDO0FBR3JDLGtCQUFlLElBQUksTUFBTSxhQUFhO0lBR3BDO1FBQ0UsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLHdCQUFRLENBQUMsZUFBZSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQywyREFBMkQ7SUFDaEosQ0FBQztJQUVZLE9BQU87O1lBQ2xCOzs7Z0JBR0k7WUFDSixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FDcEMsNEJBQTRCLENBQzdCLENBQUM7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtZQUN6QyxPQUFPLE1BQU0sQ0FBQTtRQUNmLENBQUM7S0FBQTtJQUVZLGlCQUFpQjs7WUFDNUIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQ3BDLG1EQUFtRCxDQUNwRCxDQUFDO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUE7WUFDekMsT0FBTyxNQUFNLENBQUE7UUFDZixDQUFDO0tBQUE7Q0FFRixDQUFBIn0=