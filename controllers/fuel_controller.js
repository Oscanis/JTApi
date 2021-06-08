import FuelModel from '../models/fuel_model.js'; //importing the model

//creating the route logic and exporting it immediately so it can be used by the route as a function
export const getFuelList = async (req, res) => {
    try {
        const list = await FuelModel.find(); //get all the documents without filter
        res.status(200).json(list); //setting status to 200 just like the default response code, and returning the json array
    } catch (error) {
        res.status(404).json({message: error.message }); //returning the error message if try fails
    }
};