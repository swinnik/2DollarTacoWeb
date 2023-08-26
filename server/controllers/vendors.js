const axios = require("axios");
const models = require("../models");

module.exports = {
  get: (req, res) => {
    models.vendors
      .getAllVendors(req, res)
      .then((dbRes) => {
        res.status(200).send(dbRes.rows);
      })
      .catch((err) => {
        console.log("error in CONTROLLER GETALL", err);
      });
  },

  post: (req, res) => {
    try {
      console.log("Inside the POST controller"); // Add console.log statement
      const { name, longitude, latitude, protein, price } = req.body;

      // Perform necessary operations, such as saving the data to the database
      const result = models.vendors;
      models.vendors
        .createVendor({
          name,
          longitude,
          latitude,
          protein,
          price,
        })
        .then(() => console.log("Data saved successfully:", result))
        .then(() => res.sendStatus(201));
    } catch (error) {
      console.error("Error in POST controller:", error);
      res.sendStatus(500);
    }
  },
};
