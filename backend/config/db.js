import mongoose from "mongoose";

const db = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Connection successfull"))
    .catch((error) => console.log("MongoDB Connection Failed", error));
};

export default db;
