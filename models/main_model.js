import mongoose from 'mongoose'; //importing mongoose

//defining a schema for the data model, using mongoose

const mainSchema = mongoose.Schema({
    "_id": Number,
    "Make_id": Number,
    "Type": String,
    "Category_id": Number,
    "YearMade": String,
    "Body_id": Number,
    "Doors": Number,
    "Persons": Number,
    "Width": Number,
    "Length": Number,
    "Height": Number,
    "AxleBase": Number,
    "RoadClearance": Number,
    "TurningCircle": Number,
    "KerbWeight": Number,
    "MaxWeight": Number,
    "BootSize": Number,
    "TankCapacity": Number,
    "Engine_id": Number,
    "Drive_id": Number,
    "Transmission_id": Number
});

//connecting to the specific database and transforming the schema to a model using mongoose
const MainModel = mongoose.model('MainModel', mainSchema, 'jt_main');

//exporting
export default MainModel;