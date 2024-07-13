import "dotenv/config";
import connectDB from "./db/db.js";

import app from "./app.js";

app.get("/", (req, res) => {
  res.send("<h1>This is home page 🏠🏠</h1>");
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("error in mongo connection", err);
  });
