const amqp = require("amqplib");
const { updateClickCount } = require("./services/ReportService");

const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error("Mongo Uri is not set.");
    }
    const conn = await mongoose.connect(uri);
    console.log(`Connected to mongo db ${conn.connection.host}`);
  } catch (err) {
    console.log("Error connection with DB.", err.message);
  }
};

let channel;

async function rabbitMqConnect() {
  const connectionUrl = process.env.AMQP_SERVER;
  const connection = await amqp.connect(connectionUrl);
  channel = await connection.createChannel();
  await channel.assertQueue("REPORT");
  console.log("Connected To RabbitMQ");
}

async function initalServicesConnection() {
  await rabbitMqConnect();
}

module.exports = { initalServicesConnection, channel, dbConnect };
