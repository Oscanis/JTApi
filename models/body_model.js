import mongoose from 'mongoose'; //importing mongoose

//defining a schema for the data model, using mongoose.
const bodySchema = mongoose.Schema({
    "_id": Number,
    "body-hu": String,
    "body-en": String  
});

//connecting to the specific database and transforming the schema to a model using mongoose
const BodyModel = mongoose.model('BodyModel', bodySchema, 'jt_body');

//exporting
export default BodyModel;