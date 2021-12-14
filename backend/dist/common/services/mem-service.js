"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
exports.default = new class MemoryService {
    constructor() {
        this.memDB = new Map();
    }
    static checkKeyExists(key) {
    }
    createEntry(file) {
        const key = (0, uuid_1.v4)();
        this.memDB.set(key, file);
        return key;
    }
    getEntry(key) {
        return this.memDB.get(key);
    }
    deleteEntry(key) {
        this.memDB.delete(key);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWVtLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBb0M7QUFFcEMsa0JBQWUsSUFBSSxNQUFNLGFBQWE7SUFHcEM7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUE7SUFDeEIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBVztJQUV6QyxDQUFDO0lBRU0sV0FBVyxDQUFDLElBQVk7UUFDN0IsTUFBTSxHQUFHLEdBQUcsSUFBQSxTQUFNLEdBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDekIsT0FBTyxHQUFHLENBQUE7SUFDWixDQUFDO0lBRU0sUUFBUSxDQUFDLEdBQVc7UUFDekIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBRU0sV0FBVyxDQUFDLEdBQVc7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDeEIsQ0FBQztDQUVGLENBQUEifQ==