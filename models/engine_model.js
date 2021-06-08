import mongoose from 'mongoose'; //importing mongoose

//defining a schema for the data model, using mongoose.
const engineSchema = mongoose.Schema({
    "_id": Number,
    "engine": String,
    "fuel_id": Number,
    "emissionstandard": String,
    "displacement": Number,
    "cylinders": Number,
    "power": Number,
    "torque": Number,
    "consumption-mixed": Number,
    "consumption-city": Number,
    "consumption-highway": Number,
    "TopSpeed": Number,
    "Acceleration": Number,
    "emission": Number
});

//connecting to the specific database and transforming the schema to a model using mongoose
const EngineModel = mongoose.model('EngineModel', engineSchema, 'jt_engine');

//exporting
export default EngineModel;