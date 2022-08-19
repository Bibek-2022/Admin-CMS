import express from "express";
const router = express.Router();

const fakeOrders = [
  {
    _id: 1,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 2,
    status: "shipped", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 3,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 4,
    status: "cancelled", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 5,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 6,
    status: "shipped", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 7,
    status: "cancelled", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 8,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 9,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 1,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 2,
    status: "shipped", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 3,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 4,
    status: "cancelled", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 5,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 6,
    status: "shipped", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 7,
    status: "cancelled", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 8,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 9,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 1,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 2,
    status: "shipped", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 3,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 4,
    status: "cancelled", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 5,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 6,
    status: "shipped", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 7,
    status: "cancelled", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 8,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 9,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 1,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 2,
    status: "shipped", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 3,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 4,
    status: "cancelled", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 5,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 6,
    status: "shipped", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 7,
    status: "cancelled", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 8,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 9,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 1,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 2,
    status: "shipped", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 3,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 4,
    status: "cancelled", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 5,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 6,
    status: "shipped", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 7,
    status: "cancelled", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 8,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
  {
    _id: 9,
    status: "processing", // processing, shipped, cancelled
    buyer: {
      buyerId: "lskjdf20", // _id of the user table
      fName: "Prem",
      lName: "Acharya",
      email: "e@e.com",
      phone: "0444444444",
    },
    cart: [
      {
        productId: "lsjf93020", // _id of the prodcut form products tale
        productName: "large Screen monitor",
        salesPrice: "333",
        qty: 2,
        thumbnail: "http://..",
      },
      {
        productId: "lsjf9ss3020", // _id of the prodcut form products tale
        productName: "Gaming laptop",
        salesPrice: "3333",
        qty: 1,
        thumbnail: "http://..",
      },
    ],
    cartTotal: 888,
    discount: 88,
    discountCode: "slkjfsdl",
    totalAmount: 800,
    paymentInfo: {
      status: "paid", // pending or paid
      method: "Cash on pickup", // credit card, bank transfer,
      paidAmount: 8000,
      transactionId: "lsfjls39494",
      paidDate: "2020-02-20",
    },
  },
];

router.get("/:_id?", async (req, res, next) => {
  try {
    const { _id } = req.params;

    const orders = _id
      ? fakeOrders.filter((item) => item?._id == _id)
      : fakeOrders;

    res.json({
      status: "success",
      message: "the order lists",
      orders,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

export default router;
