const { Router } = require("express");
const router = Router();

const { auth } = require("../middleware/authMiddleware");
const {
  permissionsData,
  generateToken,
} = require("../controllers/permissionController");

const permissionController = require("../controllers/permissionController");

const { checkToken } = require("../middleware/auth");

const WellsController = require("../controllers/WellsController");

const usersController = require("../controllers/userController");

router.post("/addwell", async (req, res) => {
  WellsController.addWell(req, res);
});
router.post("/editwell", async (req, res) => {
  WellsController.editWell(req, res);
});

router.get("/viewallwells", async (req, res) => {
  WellsController.viewallwells(req, res);
});

router.get("/viewwell", async (req, res) => {
  WellsController.viewwell(req, res);
});

router.post("/removewell", async (req, res) => {
  WellsController.removeWell(req, res);
});

router.get("/auth", checkToken, async (req, res) => {
  res.render("home");
});

router.get("/permissions/authnew", auth, async (req, res) => {
  const permissions = permissionController.permission(
    permissionsData[req.userRole]
  );
  res.send({ permissions });
});
router.get("/profile", auth, async (req, res) => {
  usersController.getRegisteredUserDetails(req, res);
});

router.post("/edituser", async (req, res) => {
  usersController.edituser(req, res);
});

router.get("/viewallusers", async (req, res) => {
  usersController.viewallusers(req, res);
});

module.exports = router;
