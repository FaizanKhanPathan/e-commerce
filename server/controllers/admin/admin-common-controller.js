const User = require("../../models/User");
const Order = require("../../models/Order");

const getUsers = async (req, res) => {
    try {
        const getAllUsers = await User.find({}).select("-password").sort({ _id: -1 });
        res.status(200).json({
            success: true,
            data: getAllUsers,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error occured",
        });
    }
}

const getPayments = async (req, res) => {
    try {
        // Fetch all orders
        const orders = await Order.find({}).populate("userId", "userName email phone");

        // Map orders to the desired format
        const formattedOrders = orders.map((order) => ({
            paymentId: order.paymentId || "N/A",
            amount: order.totalAmount.toFixed(2),
            paymentStatus: order.paymentStatus,
            orderDetails: order.cartItems,
            userDetails: {
                userName: order.userId?.userName || "Unknown",
                email: order.userId?.email || "Unknown",
                phone: order.userId?.phone || "Unknown",
            }

            // email: order.userId?.email || "Unknown",
        }));

        res.status(200).json({
            success: true,
            data: formattedOrders,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error occurred",
        });
    }
}

module.exports = { getUsers, getPayments }