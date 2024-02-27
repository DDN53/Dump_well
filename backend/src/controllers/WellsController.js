const Wells = require("../models/Wells");

const WellsController = {
  addWell: async (req, res) => {
    try {
      const data = req.body;
      if (!data.newWellNo) {
        return res.status(400).json({ error: "New Well Number is Missing!" });
      }
      const existingWell = await Wells.findOne({
        where: { newWellNo: data.newWellNo },
      });
      if (existingWell) {
        return res
          .status(400)
          .json({ error: "Well with the same newWellNo already exists!" });
      }
      const newWell = await Wells.create({ ...data });
      res
        .status(201)
        .json({ message: "Well added successfully", data: newWell });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to add well to the database" });
    }
  },

  viewallwells: async (req, res) => {
    try {
      const allWells = await Wells.findAll();
      res
        .status(200)
        .json({ message: "All wells retrieved successfully", data: allWells });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "Failed to retrieve wells from the database" });
    }
  },

  viewwell: async (req, res) => {
    try {
      const { newWellNo } = req.query;

      if (!newWellNo) {
        return res.status(400).json({ error: "Missing newWellNo parameter" });
      }

      const well = await Wells.findOne({ where: { newWellNo } });

      if (!well) {
        return res.status(404).json({ error: "Well not found" });
      }

      res.status(200).json({ data: well });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "Failed to retrieve well from the database" });
    }
  },

  removeWell: async (req, res) => {
    try {
      const { newWellNo } = req.body;

      if (!newWellNo) {
        return res.status(400).json({ error: "Missing newWellNo parameter" });
      }

      const well = await Wells.findOne({ where: { newWellNo } });

      if (!well) {
        return res.status(404).json({ error: "Well not found" });
      }

      await Wells.destroy({ where: { newWellNo } });

      res.status(200).json({ message: "Well removed successfully" });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ error: "Failed to remove well from the database" });
    }
  },

  editWell: async (req, res) => {
    try {
      const data = req.body;
      const { wellId, newWellNo, ...updatedData } = data;

      // Check if the provided wellId exists
      const existingWell = await Wells.findOne({
        where: { newWellNo: wellId },
      });
      if (!existingWell) {
        return res.status(404).json({ error: "Well not found" });
      }

      // Check if the newWellNo already exists
      if (newWellNo !== wellId) {
        const wellExists = await Wells.findOne({ where: { newWellNo } });
        if (wellExists) {
          return res
            .status(400)
            .json({ error: "Well with the same newWellNo already exists!" });
        }
      }

      // Update the well data
      await Wells.update(updatedData, { where: { newWellNo: wellId } });

      res.status(200).json({ message: "Well updated successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to update well in the database" });
    }
  },
};
module.exports = WellsController;
