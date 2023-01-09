const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * -1: remmitToBeDoneSaved
 * 0: Delivered
 * 1: remmit Recieved
 * 2: remitted Pending
 * 3: Remit recieved + Pending
 * 4: Remitted
 * 5: Remitt Issue
 */

const codRemit = new Schema({
  SG_ORDERID: {
    type: String,
    unique: true,
    index: true,
  },
  tenant: String,
  orderDate: Date,
  brandName: String,

  courierId: String,
  SGID: {
    type: String,
    index: true,
  },
  collectable: Number,
  awb: String,
  orderNumber: String,
  refNumber: String,
  deliveryDate: {
    type: Date,
    index: true,
  },
  remittedToSG: {
    uploadDate: Date,
    amount: Number,
    date: Date,
    refNumber: String,
  },
  remittedToUser: {
    uploadDate: Date,
    amount: Number,
    date: Date,
    refNumber: String,
  },
  remmitDifference: Number,
  status: {
    type: Number,
    index: true,
  },
});

codRemit.index({ status: 1, awb: 1 });
codRemit.index({ awb: 1, deliveryDate: 1 });

module.exports = mongoose.model("codremittance", codRemit);
