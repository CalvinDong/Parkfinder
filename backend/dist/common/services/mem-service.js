"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
exports.default = new class MemoryService {
    constructor() {
        this.memDB = new Map();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21tb24vc2VydmljZXMvbWVtLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBb0M7QUFFcEMsa0JBQWUsSUFBSSxNQUFNLGFBQWE7SUFHcEM7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUE7SUFDeEIsQ0FBQztJQUVNLFdBQVcsQ0FBQyxJQUFZO1FBQzdCLE1BQU0sR0FBRyxHQUFHLElBQUEsU0FBTSxHQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3pCLE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUVNLFFBQVEsQ0FBQyxHQUFXO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVNLFdBQVcsQ0FBQyxHQUFXO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3hCLENBQUM7Q0FFRixDQUFBIn0=