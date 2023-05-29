const { updateClicks, getAllNews } = require("../repository/News.repoistory");
const updateClickCount = async (res, req, next) => {
  const { _id } = req.body;
  try {
    await updateClicks({ _id });
    res.json({ message: "Updated Click count" }).status(200);
    next();
  } catch (err) {
    console.log("Error message:", error.message);
  }
};

const getReportingData = async (req, res, next) => {
  try {
    const { page } = req.body;
    let skip = (page - 1) * 20;
    let limit = 20;
    const newsData = await getAllNews({ skip, limit });
    res.status(200).json({ data: newsData });
    next();
  } catch (error) {
    console.log("Error message:", error.message);
  }
};

module.exports = { updateClickCount, getReportingData };
