const router = require("express").Router();
const { get, post } = require("../controllers/vendors.js");

router.get("/", (req, res) => {
  console.log("GET request in ROUTER to /vendors");
  get(req, res);
});

router.post("/", (req, res) => {
  console.log("POST request in  ROUTER to /vendors");
  post(req, res);
});
module.exports = router;
