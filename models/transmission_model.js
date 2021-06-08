import mongoose from 'mongoose'; //importing mongoose

//defining a schema for the data model, using mongoose.
const transmissionSchema = mongoose.Schema({
    "_id": Number,
    "transmission-hu": String,
    "transmission-en": String
});

//connecting to the specific database and transforming the schema to a model using mongoose
const TransmissionModel = mongoose.model('TransmissionModel', transmissionSchema, 'jt_transmission');

//exporting
export default TransmissionModel;