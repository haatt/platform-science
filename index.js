import { assignRoutes } from "./RoutingFunctions.js";

console.table( await assignRoutes(process.argv[2], process.argv[3]));