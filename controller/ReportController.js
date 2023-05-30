const express = require("express");
const router = express.Router();
const reportService = require("../services/ReportService");

router.get("/", (req, res) => {
  res.send("welcome to reporting service");
});

router.put("/updateClickCount", reportService.updateClickCount);
router.post("/getReportingData", reportService.getReportingData);

module.exports = router;
