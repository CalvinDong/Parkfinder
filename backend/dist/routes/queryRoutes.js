"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const queryController_1 = __importDefault(require("../controllers/queryController"));
class QueryRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'QueryRoutes');
    }
    configureRoutes() {
        this.app.route(`/queries`)
            .get(queryController_1.default.listAllParks);
        this.app.route(`/testFile`)
            .post(queryController_1.default.testFile);
        this.app.route(`/filter`)
            .post(queryController_1.default.processFilter);
        this.app.route(`/testFile/:id`)
            .get(queryController_1.default.getFile);
        return this.app;
    }
}
exports.QueryRoutes = QueryRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnlSb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9yb3V0ZXMvcXVlcnlSb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQWtFO0FBQ2xFLHFGQUE2RDtBQUc3RCxNQUFhLFdBQVksU0FBUSx5Q0FBa0I7SUFDL0MsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO2FBQ3pCLEdBQUcsQ0FBQyx5QkFBZSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzthQUMxQixJQUFJLENBQUMseUJBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7YUFDeEIsSUFBSSxDQUFDLHlCQUFlLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2FBQzlCLEdBQUcsQ0FBQyx5QkFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRS9CLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUFqQkQsa0NBaUJDIn0=