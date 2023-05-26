const express = require("express");
const route = express.Router();
const reportService = require("../services/ReportService");

route.get("/", (req, res) => {
  res.send("hello world");
});

route.put("/updateClickCount", reportService.updateClickCount);
route.get("/getReportingData", reportService.getReportingData);

module.exports = route;
