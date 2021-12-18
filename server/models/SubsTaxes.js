import mongoose from 'mongoose'

const SubsTaxesSchema = mongoose.Schema({
    IdSubTax: Number,
    Description: String,
    Stratum: Number,
    Type: String,
    Value: Number, 
    UnitMeasurement:String
})

const SubsTaxes = mongoose.model('SubsTaxes', SubsTaxesSchema)

export default SubsTaxes