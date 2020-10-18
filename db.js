const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://duocode:testtesttest@cluster0.ktk4x.mongodb.net/duocode?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Mongodb connected");
  } catch (error) {
    throw new Error("Not connected to mongodb");
  }
};
