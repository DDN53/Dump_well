const Users = require("../models/ApiUser");

const usersController = {
  viewallusers: async (req, res) => {
    try {
      const allUsers = await Users.findAll();
      res.status(200).json({
        message: "All Api users retrieved sucessfully",
        data: allUsers,
      });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "Failed to retrieve wells from the database" });
    }
  },

  edituser: async (req, res) => {
    try {
      const { userId, newRole } = req.body;

      const userToUpdate = await Users.findByPk(userId);
      if (!userToUpdate) {
        return res.status(404).json({ error: "User not found" });
      }

      userToUpdate.role = newRole;
      await userToUpdate.save();
      res.status(200).json({
        message: "User role updated successfully",
        data: userToUpdate,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to update user role" });
    }
  },
};
module.exports = usersController;
