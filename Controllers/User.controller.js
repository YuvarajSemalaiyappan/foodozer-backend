const AuthRouter = require("express").Router();
const UserModel = require("../Models/User.model");

/**
 * METHOD : GET
 * PATH = /getAllUsers
 */
AuthRouter.post("/createUser", async function (req, res, next) {
  const { userName, contactDetails, address, generalDetails } = req.body;

  // Create a new user using the provided request body
  const newUser = new UserModel({
    userName,
    contactDetails,
    address,
    generalDetails,
  });

  try {
    const response = await newUser.save();
    if (response?._id) {
      return res.status(200).json({
        success: true,
        message: "Account Created Successfully!!!",
        data: response,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Account Creation failed!!!",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Bad request!!!",
      error: error.message,
    });
  }
});


/**
 * METHOD : POST
 * PATH = /signin
 */
AuthRouter.post("/signin", async function (req, res, next) {
  const { email, password } = req.body; // Update email to primaryEmail
  console.log(req.body);
  try {
    const user = await UserModel.findOne({
      "contactDetails.email": email, // Update email to primaryEmail
    });
    console.log(user);
    if (user && user._id) {
      res.status(200).json({
        success: true,
        message: "Login successful!!",
        data: user,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Account does not exist",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});
/**
 * METHOD : POST
 * PATH = /createUser
 */
AuthRouter.post("/createUser", async function (req, res, next) {
  const { userName, contactDetails, address, generalDetails } = req.body;
  const newUser = new UserModel({
    
    userName,
    contactDetails,
    address,
    generalDetails,
  });
  try {
    const response = await newUser.save();
    if (response?._id) {
      return res.status(200).json({
        success: true,
        message: "Account Created Successfully!!!",
        data: response,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Account Creation failed!!!",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Bad request!!!",
      error: error.message,
    });
  }
});

module.exports = AuthRouter;
