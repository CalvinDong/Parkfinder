"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bucket = exports.db = void 0;
//import { initializeApp } from 'firebase-admin/app'
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const storage_1 = require("firebase-admin/storage");
const serviceAccount = require('../../parkfinder-cd1be-firebase-adminsdk-k79gh-a7f6388c6b.json');
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
    storageBucket: 'gs://parkfinder-cd1be.appspot.com'
});
exports.db = firebase_admin_1.default.firestore();
exports.bucket = (0, storage_1.getStorage)().bucket();
exports.default = firebase_admin_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2UtYWRtaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21tb24vc2VydmljZXMvZmlyZWJhc2UtYWRtaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0RBQW9EO0FBQ3BELG9FQUFrQztBQUNsQyxvREFBbUQ7QUFFbkQsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGdFQUFnRSxDQUFDLENBQUE7QUFFaEcsd0JBQUssQ0FBQyxhQUFhLENBQUM7SUFDbEIsVUFBVSxFQUFFLHdCQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDakQsYUFBYSxFQUFFLG1DQUFtQztDQUNuRCxDQUFDLENBQUE7QUFFVyxRQUFBLEVBQUUsR0FBRyx3QkFBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBRXZCLFFBQUEsTUFBTSxHQUFHLElBQUEsb0JBQVUsR0FBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVDLGtCQUFlLHdCQUFLLENBQUMifQ==