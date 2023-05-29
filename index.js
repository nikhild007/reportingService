const express = require("express");
const app = express();
const { initalServicesConnection, dbConnect } = require("./utils");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(require("./controller/ReportController"));

app.listen(PORT, () => {
  setTimeout(async () => {
    dbConnect();
    await initalServicesConnection();
  }, 5000);
  console.log(`Server Running at port ${PORT}`);
});
