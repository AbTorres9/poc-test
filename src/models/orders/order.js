let mongoose = require("mongoose");
let { Schema } = mongoose;

/**
 * Cod Verification Statuses
 * 0 -> Pending
 * 1 -> Completed
 */

let orders = new Schema({
  SGID: {
    type: String,
    index: true,
  },
  SG_ORDERID: {
    type: String,
    unique: true,
    index: true,
  },
  upload: [
    {
      file: String,
      type: String,
    },
  ],
  ratelog: [],
  uniqueIdentifiertrack: String,
  brandName: String,
  tenant: String,
  shipmentType: {
    type: String,
    default: "B2C",
    enum: ["B2C", "B2B"],
  },
  b2b: {
    jobId: String,
    lrNumber: String,
    documentAwb: String,
    appointmentDetails: {
      name: String,
      phone: Number,
      addressLine1: String,
      addressLine2: String,
      city: String,
      state: String,
      pincode: String,
      email: String,
      startDate: Date,
      endDate: Date,
      landline: String,
      alternateLandline: String,
      purchaseNumber: String,
    },
    deliveryType: {},
  },

  csv: String,
  firstName: String,
  lastName: String,
  failedReason: {},
  onlinePlatformOrder: {
    type: Boolean,
    default: false,
  },
  fullName: String,
  companyName: String,
  email: String,
  phone: {
    type: Number,
    index: true,
  },
  apiOrder: Boolean,
  countryCode: String,
  platformToken: String,
  sentSmsIdentifier: [String],
  sentEmailIdentifier: [String],
  currency: String,
  alternatePhone: Number,
  totalFloor: Number,
  // location: {
  //   type: { type: String, enum: ["Point"] },
  //   coordinates: { type: [Number] }
  // },
  documents: {},
  invoice: {},
  invoiceRegistered: {
    type: Boolean,
    default: false,
  },
  addressLine1: String,
  addtionalLandmark: String,
  addressLine2: String,
  rtoAWB: {
    type: String,
    index: true,
  },
  city: String,
  state: String,
  pincode: String,
  shortUrl: String,
  longUrl: String,
  bulkOrder: Boolean,
  sAdminOrder: {
    type: Boolean,
    default: false,
  },
  rtoCharges: Number,
  servicable: {},
  country: String,
  courierPrice: {},
  orderNumber: {
    type: String,
    index: true,
  },
  shippingAmount: Number,
  CODcharge: Number,
  fulfilled: {
    type: Boolean,
    default: false,
  },
  shopifyFulfillmentId: String,
  rtoBreakdown: {},
  sortCode: String,
  priceBreakdown: {},
  orderDate: Date,
  shopifyId: String,
  wooCommerceId: String,
  zoho_id: String,
  instaMojoId: String,
  multiPiece: Boolean, //For multi Piece Shipment
  otherAwb: [String],
  magentoId: String,
  createdAt: {
    type: Date,
    index: true,
  },
  updatedAt: {
    type: Date,
  },
  trackFlag: {
    status: {
      type: Boolean,
      default: false,
    },
    reason: String,
  },
  flaggedByUser: {
    type: Boolean,
    default: false,
  },
  markPriority: {
    date: Date,
    reason: String,
  },
  flaggedByAdmin: {
    type: Boolean,
    default: false,
  },
  flagged: {
    reason: String,
    flaggedOn: {
      type: Date,
    },
    resolveReason: String,
    status: {
      type: Boolean,
    },
  },
  ndr: {
    open: Boolean,
    openAt: Date,
    ndrCdd: Number,
    openReason: String,
    orderStatus: String,
    ndrStatus: String,
    actionDate: Date,
    lastAction: String,
    closeReason: String,
    resolved: Boolean,
    resolvedAt: Date,
    remarks: {
      callRecording: String,
      addtionalInfo: String,
      latLong: String,
      images: String,
      carrierCallRecording: String,
      carrierLatLong: String,
      ndrFile: String,
    },
  },

  ndrUserAction: [
    {
      action: {
        type: String,
        index: true,
      },
      date: Date,
      reason: String,
    },
  ],
  ndrLog: [
    {
      action: {
        type: String,
        index: true,
      },
      date: Date,
      reason: String,
      attempts: String,
      user: String,
    },
  ],
  paymentType: String,
  label: {
    generated: {
      type: Boolean,
      default: false,
    },
    generatedAt: Date,
  },
  manifest: {
    generated: {
      type: Boolean,
      default: false,
    },
    generatedAt: Date,
  },
  items: [],
  additionalDetails: {
    invoiceNum: String,
    invoiceVal: Number,
    ewaybillNum: String,
    shippingCharge: Number,
    transactionCharge: Number,
    giftWrapCharge: Number,
    totalDisc: Number,
  },
  storeId: String,
  orderTotal: Number,
  codTotal: Number,
  onlinePlatformName: {
    type: String,
    enum: [
      "shopify",
      "woocommerce",
      "magento1",
      "magento2",
      "unicommerce",
      "easy_ecom",
      "ESEC",
      "shippigo",
      "zoho",
      "instamojo",
      "swiggy",
    ],
  },
  tentativeWeight: Number,
  multipleBoxShipmentType: String,
  boxDataWithSameDimensions: {
    length: Number,
    breadth: Number,
    height: Number,
    weight: Number,
    boxCodTotal: Number,
    boxTotalValue: Number,
    box: String,
    numberOfBoxes: Number,
  },
  quantity: Number,
  goods: String,
  status: {
    type: Number,
    default: 1,
    index: true,
  },
  awb: {
    type: String,
    index: true,
  },
  shortUrl: String,
  liveLink: String,
  bookedOn: Date,
  bookData: {},
  multiPiece: Boolean, //For multi Piece Shipment
  boxData: [
    {
      //For multi Piece Shipment
      box: String,
      weight: Number,
      length: Number,
      breadth: Number,
      height: Number,
      boxTotalValue: Number,
      boxCodTotal: Number,
      awb: String,
      boxId: String,
      name: String,
    },
  ],
  otherAwb: [String],
  shipping_info: {
    labelAddressDifferent: {
      type: Boolean,
      default: false,
    },
    returnLabelAddressDifferent: {
      type: Boolean,
      default: false,
    },
    labelAddress: {
      wareHouseCode: String,
      location_id: String,
      contactPersonName: String,
      name: String,
      companyName: String,
      line1: String,
      line2: String,
      city: String,
      state: String,
      phone: Number,
      pincode: String,
      countrycode: String,
      email: String,
      vendorCode: String,
    },
    pickup_address: {
      wareHouseCode: String,
      location_id: String,
      name: String,
      contactPersonName: String,
      companyName: String,
      line1: String,
      line2: String,
      city: String,
      state: String,
      phone: Number,
      pincode: String,
      countrycode: String,
      email: String,
      vendorCode: String,
    },
    returnAddress: {
      wareHouseCode: String,
      name: String,
      companyName: String,
      contactPersonName: String,
      line1: String,
      line2: String,
      city: String,
      state: String,
      phone: Number,
      pincode: String,
      countrycode: String,
      email: String,
      vendorCode: String,
    },
    returnLabelAddress: {
      wareHouseCode: String,
      name: String,
      contactPersonName: String,
      companyName: String,
      line1: String,
      line2: String,
      city: String,
      state: String,
      phone: Number,
      pincode: String,
      countrycode: String,
      email: String,
      vendorCode: String,
    },
    weight: Number,
    volWeight: Number,
    chargedWeight: Number,
    chargedType: {
      type: String,
      enum: ["v", "d"],
    },
    size: {
      box: String,
      length: Number,
      breadth: Number,
      height: Number,
    },
    paymentType: String,
    courier: {
      courier_id: String,
      courier_service: String,
      courierIdentifier: String,
      service: String,
      price: Number,
      mode: String, //surface or express
      rateType: String,
      invoice_no: String,
      destinationlocation: String,
      destinationarea: String,
      manifestId: String,
    },
    shipment_labelurl: String,
  },

  ndrOrder: {
    type: Boolean,
    default: false,
  },
  lineItemsTotal: Number,
  discount: Number,
  rtoOrder: {
    type: Boolean,
    default: false,
  },
  ndrAttempts: [],
  weightDesc: {
    /**
     * 1: New
     * 2:Accepted
     * 3: Rejected or solved by admin
     */
    toResolveOn: Date,
    pending: Boolean,
    status: {
      type: String,
      enum: [
        "initial",
        "accepted",
        "rejected",
        "forced",
        "revised",
        "reset",
        "acceptedByCourier",
        "rejectedByCourier",
      ],
    },
    numStatus: {
      type: Number,
    },

    accepted: Boolean,
    acceptedOn: Date,
    created: Date,
    oldWeight: Number,
    newWeight: Number,
    repliedOn: Number,
    oldCharge: Number,
    newCharge: Number,
    pricediff: Number,
    queryRaised: String,
    resolved: {
      name: String,
      date: Date,
      id: String,
    },
    userImages: {
      length: String,
      width: String,
      height: String,
      packed: String,
      unpacked: String,
      video: String,
    },
    rejectRemarks: String,
    ownWebstoreUrl: [
      {
        platform: String,
        link: String,
      },
    ],
    ownMarketPlaceUrl: [
      {
        platform: String,
        link: String,
      },
    ],
    courierImages: [],
    wdLog: [],
    userDimensions: {
      length: Number,
      breadth: Number,
      height: Number,
      grossWeight: Number,
    },
  },
  estimatedDeliveryDate: Date,
  estimatedRtoDeliveryDate: Date,
  deliveredTo: String,
  pod: String,
  zone: String,
  reverseCharges: Number,
  orderStatusCode: [
    {
      code: { type: String },
      codeDescription: { type: String },
    },
  ],
  trackshipment_log: [
    {
      UpdateDetails: String,
      UpdateCode: String,
      UpdateDescription: String,
      UpdateDateTime: Date,
      UpdateLocation: String,
    },
  ],
  pickedDate: {
    type: Date,
    index: true,
  },
  bookingData: {
    type: Object,
  },
  processed_pickup: { type: Object },
  pickup: [
    {
      pickup_at: Date,
      processed_pickup: { type: Object },
    },
  ],
  newAwb: String,
  originalOrderSG_ORDERID: String,
  originalOrderAWB: String,
  reverseGenerated: {
    status: {
      type: String,
      default: "no",
      enum: ["yes", "no"],
    },
    awb: String,
    SG_ORDERID: String,
  },
  deliveredOn: Date,
  canceledOn: Date,
  isRevisedOrder: Boolean,
  revisedDetails: {
    oldAwb: String,
    courier_id: String,
  },
  updated: [
    {
      time: Date,
      reason: String,
      data: {},
    },
  ],
  log: [
    {
      date: Date,
      action: String,
    },
  ],
  userResponse: {
    type: Boolean,
    default: false,
  },
  splitted: Boolean,
  splittedFrom: String,
  splittedTo: [String],
  errorData: [
    {
      date: Date,
      courier: String,
      action: String,
      error: {
        code: String,
        message: String,
      },
    },
  ],
  bookingCount: Number,
  codVerify: {
    generated: {
      type: Boolean,
      default: false,
    },
    generatedOn: Date,
    question: String,
    retries: {
      type: Number,
      default: 0,
    },
    response: String,
    status: {
      type: Number,
      default: 0,
    },
    updatedOn: Date,
    url: {
      id: String,
      data: String,
      deleteFlagSet: {
        type: Date,
      },
    },
  },
});

orders.index({ "shipping_info.courier.courier_id": 1, createdAt: -1 });
orders.index({ "shipping_info.courier.courierIdentifier": 1, createdAt: -1 });
orders.index({ awb: 1, trackshipment_log: 1 });
orders.index({ "shipping_info.courier.courier_service": 1, createdAt: 1 });
orders.index({
  "shipping_info.courier.courier_id": 1,
  status: -1,
  SGID: -1,
  createdAt: -1,
});
orders.index({ createdAt: -1, status: -1 });
orders.index({ createdAt: 1, "ndr.open": 1, ndr: 1 });
orders.index({ createdAt: -1, "ndr.open": 1 });
orders.index({ SGID: 1, createdAt: -1 });
orders.index({ status: 1, "pickup.pickup_at": 1 });
orders.index({ weightDesc: 1 });
orders.index({ shipmentType: -1 });

module.exports = mongoose.model("order", orders);
