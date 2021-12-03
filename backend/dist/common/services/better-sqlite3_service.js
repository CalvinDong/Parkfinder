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
        this.db = new better_sqlite3_1.default('parkfinder.db', { verbose: console.log });
    }
    ReadAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const readEverything = this.db.prepare("SELECT * FROM Parks");
            const result = yield readEverything.all();
            return result;
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmV0dGVyLXNxbGl0ZTNfc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1vbi9zZXJ2aWNlcy9iZXR0ZXItc3FsaXRlM19zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQXFDO0FBR3JDLGtCQUFlLElBQUksTUFBTSxhQUFhO0lBSXBDO1FBQ0UsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLHdCQUFRLENBQUMsZUFBZSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFWSxPQUFPOztZQUNsQixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FDcEMscUJBQXFCLENBQ3RCLENBQUM7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtZQUN6QyxPQUFPLE1BQU0sQ0FBQTtRQUNmLENBQUM7S0FBQTtDQUVGLENBQUEifQ==