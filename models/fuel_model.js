import mongoose from 'mongoose'; //importing mongoose

//defining a schema for the data model, using mongoose.
const fuelSchema = mongoose.Schema({
    "_id": Number,
    "fuel-hu": String,
    "fuel-en": String
});

//connecting to the specific database and transforming the schema to a model using mongoose
const FuelModel = mongoose.model('FuelModel', fuelSchema, 'jt_fuel');

//exporting
export default FuelModel;