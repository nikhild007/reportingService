const { NewsFeed } = require("schemas-npm-package");

const updateClicks = async ({ _id }) => {
  return await NewsFeed.findByIdAndUpdate({ _id }, { $inc: { clickCount: 1 } });
};

const getAllNews = async ({ skip, limit }) => {
  return await NewsFeed.find({})
    .sort({ publishedAt: -1 })
    .skip(skip)
    .limit(limit)
    .populate("agencyId", "logo name")
    .populate("categoryId", "title");
};
module.exports = { updateClicks, getAllNews };
