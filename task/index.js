import app from "./app.js";
import connectDB from "./db/db.js";

const PORT = 6000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is listen on port", PORT);
    });
  })
  .catch((err) => {
    console.log("Error in mongodb connection index", err);
  });
