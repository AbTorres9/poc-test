// module.exports = async function printMyName() {
//   console.log("MY NAME IS PRINT.JS");
// };

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var invoiceSchema = new Schema({
  buyer: {
    SGID: String,
    companyName: String,
    brandName: String,
  },
  invoiceNum: {
    type: String,
    unique: true,
  },
  tenant: String,
  createdAt: {
    type: Date,
    default: new Date(),
    index: true,
  },
  month: Number,
  year: Number,
  charges: {
    reverseCharges: Number,
    gst: Number,
    totalCharges: Number,
  },
});

module.exports = mongoose.model("InvoiceNum", invoiceSchema);
