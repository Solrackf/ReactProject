import mongoose from "mongoose";

const InvoicesSchema = mongoose.Schema({
    Owner:String,
    EstateID: Number,
    MonthlyComsumption: Number,
    Date: Date,
    OpportuneDate: String,
    PaymentDate: String,
    Taxes: Number,
    Subsidies:Number,
    Stratum:Number
})

const Invoices = mongoose.Schema('Invoices', InvoicesSchema)

export default Invoices