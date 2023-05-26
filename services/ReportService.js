const { channel } = require("../utils");
const { NewsFeed } = require("schemas-npm-package");

const updateClickCount = async (res, req, next) => {
  const { _id } = req.body;
  try {
    await NewsFeed.findByIdAndUpdate({ _id }, { $inc: { clickCount: 1 } });
    return res.json({ message: "Updated Click count" }).status(200);
  } catch (err) {
    console.log("Error message:", error.message);
  }
};

const getReportingData = async () => {
  //to be done
};

module.exports = { updateClickCount, getReportingData };
