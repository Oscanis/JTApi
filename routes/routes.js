import express from 'express'; //import Express for routing
//importing the controllers
import { getMainList } from '../controllers/main_controller.js';
import { getBodyList } from '../controllers/body_controller.js';
import { getCategoryList } from '../controllers/category_controller.js';
import { getDriveList } from '../controllers/drive_controller.js';
import { getEngineList } from '../controllers/engine_controller.js';
import { getFuelList } from '../controllers/fuel_controller.js';
import { getModelList } from '../controllers/model_controller.js';
import { getTransmissionList } from '../controllers/transmission_controller.js';


// SETUP
const routes = express.Router(); //creating the router

// ROUTES
routes.get('/main', getMainList);
routes.get('/body', getBodyList);
routes.get('/category', getCategoryList);
routes.get('/drive', getDriveList);
routes.get('/engine', getEngineList);
routes.get('/fuel', getFuelList);
routes.get('/model', getModelList);
routes.get('/transmission', getTransmissionList);

//exporting the whole router so it can be used in index.js
export default routes;