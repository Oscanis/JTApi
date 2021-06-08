import mongoose from 'mongoose'; //importing mongoose

//defining a schema for the data model, using mongoose.
const modelSchema = mongoose.Schema({
    "_id": Number,
    "Make": String,
    "Model": String,
    "Type": String,
    "Logo": String
  
});

//connecting to the specific database and transforming the schema to a model using mongoose
const ModelModel = mongoose.model('ModelModel', modelSchema, 'jt_model');

//exporting
export default ModelModel;