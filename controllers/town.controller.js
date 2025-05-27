const Town = require("../models/town.model");

const addTown = async (req, res) => {
  try {
    const {
      name,
      area,
      address,
      city,
      phases,
    } = req.body;

    const locationMap = req.files?.locationMap?.[0]?.path || null;
    const nocRegistry = req.files["nocRegistry"]?.[0]?.path || "";
    const documents = req.files["documents"]?.map(file => file.path) || [];

    const parsedPhases = phases ? JSON.parse(phases) : [];

    parsedPhases.forEach((phase, index) => {
      phase.images = req.files[`phaseImages${index}`]?.map(f => f.path) || [];
      phase.video = req.files[`phaseVideo${index}`]?.[0]?.path || "";
    });

    const newTown = new Town({
      name,
      area,
      address,
      city,
      locationMap,
      nocRegistry,
      documents,
      phases: parsedPhases,
    });

    await newTown.save();
    res.status(201).json({ message: "Town added", town: newTown });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("err", err);
  }
};

module.exports = {
  addTown,
};
