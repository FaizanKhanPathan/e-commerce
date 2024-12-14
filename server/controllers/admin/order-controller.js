const Order = require("../../models/Order");
const emailFunctions = require('../../helpers/email');
const User = require("../../models/User");



const getAllOrdersOfAllUsers = async (req, res) => {
  try {
    const orders = await Order.find({}).sort({ orderDate: -1 });

    if (!orders.length) {
      return res.status(404).json({
        success: false,
        message: "No orders found!",
      });
    }

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const getOrderDetailsForAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);
    
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    // Fetch the user details using the `userId` from the order
    const user = await User.findById(order.userId);

    // Add user details to the order object
    const orderWithUserData = {
      ...order.toObject(), // Convert Mongoose document to plain object
      user: {
        id: user._id,
        name: user.userName,
        email: user.email,
        phone: user.phone,
        // Add other fields from the user model as needed
      },
    };

    res.status(200).json({
      success: true,
      data: orderWithUserData,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { orderStatus } = req.body;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    const user = await User.findById(order.userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    await Order.findByIdAndUpdate(id, { orderStatus });

    if (orderStatus === "delivered") {
      await emailFunctions.sendDeliveredOrder(user, order);
    }


    res.status(200).json({
      success: true,
      message: "Order status is updated successfully!",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

module.exports = {
  getAllOrdersOfAllUsers,
  getOrderDetailsForAdmin,
  updateOrderStatus,
};
