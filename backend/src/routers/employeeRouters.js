const { Router } = require("express");
const authController = require("../controllers/authController");

const router = Router();
router.post("/register", authController.registerUser);
router.post("/login", authController.login);
router.get("/getemployee", authController.getEmployeeDetails);
router.post("/logout", authController.logout);
router.post("/ForgetPassword", authController.ForgetPassword);
router.post("/ResetPassword", authController.ResetPassword);

module.exports = router;
