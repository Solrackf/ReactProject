import  mongoose from "mongoose";

const EstatesSchema = mongoose.Schema({
    Owner: String,
    IdEstate: Number,
    EstateDirection: String,
    Neighborhood: String,
    Stratum: Number
})

const Estates = mongoose.model('Estates', EstatesSchema)

export default Estates