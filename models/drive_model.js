import mongoose from 'mongoose'; //importing mongoose

//defining a schema for the data model, using mongoose.
const driveSchema = mongoose.Schema({
    "_id": Number,
    "drive-hu": String,
    "drive-en": String
});

//connecting to the specific database and transforming the schema to a model using mongoose
const DriveModel = mongoose.model('DriveModel', driveSchema, 'jt_drive');

//exporting
export default DriveModel;