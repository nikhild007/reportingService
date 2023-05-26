const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const { initalServicesConnection } = require("./utils");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });
app.use(express.json());
app.use(require("./controller/ReportController"));

app.listen(PORT, () => {
  setTimeout(async () => {
    await initalServicesConnection();
  }, 5000);
  console.log(`Server Running at port ${PORT}`);
});
