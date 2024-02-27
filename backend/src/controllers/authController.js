const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Buffer = require("buffer/").Buffer;
const User = require("../models/UserData");
const ApiUser = require("../models/ApiUser");
const EmployeeDetails = require("../models/EmployeeDetails");
const axios = require("axios");
const nodemailer = require("nodemailer");
const registerUser = async (req, res) => {
  try {
    const { userName, password, role, email } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      userName,
      password: hashedPassword,
      role,
      email,
    });
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      console.error(
        "Validation Errors:",
        error.errors.map((err) => err.message)
      );
      res
        .status(400)
        .json({ message: "Validation error", errors: error.errors });
    } else {
      console.error("Error:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  }
};
const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        userName: username,
      },
    });

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        const accessToken = jwt.sign(
          {
            userId: user.id,
            userName: user.userName,
            role: user.role,
            mode: "LOCAL",
          },
          process.env.JWT_SECRETKEY,
          { expiresIn: "1h" }
        );

        return res.status(200).json({
          userName: user.userName,
          role: user.role,
          token: accessToken,
        });
      } else {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }
    }

    await validateUser(req, res, next);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
const ForgetPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (user) {
      const verificationCode = Math.floor(100000 + Math.random() * 900000);

      const resetToken = jwt.sign(
        {
          userId: user.id,
          email: user.email,
          verificationCode: verificationCode,
        },
        process.env.JWT_SECRETKEY,
        { expiresIn: "1h" }
      );

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "dinukanisheda9@gmail.com",
          pass: "elbu hxlj indb grpa",
        },
        secure: true,
        tls: {
          rejectUnauthorized: false,
        },
      });

      const mailOptions = {
        from: "dinukanisheda9@gmail.com",
        to: user.email,
        subject: "Password Reset",
        html: `
        <div style="background-color: #1B4242; color: #ffffff; padding: 10px; border-radius: 5px;">
        <p style="font-weight: bold;">Your verification code is:</p>
        <p style="font-weight: bold; font-size: 16px; color: #ffffff;">${verificationCode}</p>
        <p style="visibility: hidden;font-weight: bold; font-size: 1px; color: #ffffff;">${resetToken}</p>
          </div>
        `,
      };

      const info = await transporter.sendMail(mailOptions);

      console.log("Email sent:", info.response);
      return res
        .status(200)
        .json({ message: "Password reset initiated", resetToken });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const ResetPassword = async (req, res, next) => {
  const { resetToken, newPassword } = req.body;

  try {
    const decodedToken = jwt.verify(resetToken, process.env.JWT_SECRETKEY);

    const user = await User.findByPk(decodedToken.userId);

    if (user) {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      await user.save();

      return res.status(200).json({ message: "Password reset successful" });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Reset token has expired" });
    } else {
      console.error("Error:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  }
};
async function validateUser(req, res, next) {
  try {
    const apiUrl = "https://billing.waterboard.lk/hrm/ValidateUser";
    const requestBody = req.body;

    const response = await axios.post(apiUrl, requestBody);
    console.log(response);

    const savedUserData = await saveUserToDatabase(req.body.username);

    const tokenPayload = {
      userId: savedUserData.userId,
      userName: savedUserData.userName,
      role: savedUserData.role,
      mode: "API",
    };

    const accessToken = jwt.sign(tokenPayload, process.env.JWT_SECRETKEY, {
      expiresIn: "1h",
    });

    res.status(response.status).json({
      userName: savedUserData.userName,
      role: savedUserData.role,
      token: accessToken,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function saveUserToDatabase(userName) {
  try {
    const userIdValue = 1;

    if (userName) {
      const [savedUser] = await ApiUser.upsert(
        { userId: userIdValue, userName },
        { returning: true }
      );

      return {
        userId: savedUser.userId, // Include userId in the return object
        userName: savedUser.userName,
        role: savedUser.role,
      };
    } else {
      throw new Error("User name is required");
    }
  } catch (error) {
    console.error("Error saving user to the database:", error.message);
    throw error;
  }
}

const saveEmployeeDetailsToDatabase = async (employeeDetails) => {
  try {
    const empIdValue = 1;
    const [savedEmployee] = await EmployeeDetails.upsert(
      { empId: empIdValue, ...employeeDetails },
      { returning: true }
    );

    return savedEmployee;
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      console.error("Validation error:", error.errors);
      throw new Error("Validation error");
    } else {
      console.error(
        "Error saving employee details to the database:",
        error.message
      );
      throw error;
    }
  }
};

const getEmployeeDetails = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const response = await axios.get(
      "https://billing.waterboard.lk/hrm/GetEmployee",
      {
        data: {
          locId: 0,
          ccid: 0,
          userName: "2010801",
        },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const employeeDetails = response.data;

    await saveEmployeeDetailsToDatabase(employeeDetails);
    return res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from the API:", error.message);
    res
      .status(error.response ? error.response.status : 500)
      .json({ error: "Internal Server Error" });
  }
};

const logout = async (req, res, next) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  login,
  logout,
  ForgetPassword,
  ResetPassword,
  getEmployeeDetails,
};
