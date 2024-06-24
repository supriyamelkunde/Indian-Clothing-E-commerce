const Razorpay = require("razorpay");

const apiKey = "rzp_test_iMf9lr0Jm7cq6G";
const apiSecret = "ikmi6BvX5eCjCiUTp6bt4FcV";

// apiKey="rzp_test_iMf9lr0Jm7cq6G"
// apiSecret="ikmi6BvX5eCjCiUTp6bt4FcV"

const razorpay = new Razorpay({
  key_id: apiKey,
  key_secret: apiSecret,
});

module.exports = razorpay;
