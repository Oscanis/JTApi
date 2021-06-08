import mongoose from 'mongoose'; //importing mongoose

//defining a schema for the data model, using mongoose.
const categorySchema = mongoose.Schema({
    "_id": Number,
    "segment-hu": String,
    "segment-en": String,
    "segment-us": String
});

//connecting to the specific database and transforming the schema to a model using mongoose
const CategoryModel = mongoose.model('CategoryModel', categorySchema, 'jt_category');

//exporting
export default CategoryModel;