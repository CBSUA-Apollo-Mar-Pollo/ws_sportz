import express from "express";
import { matchRouter } from "./routes/matches.js";

const app = express();
const PORT = 8000;

// Use JSON middleware
app.use(express.json());

// Root GET route
app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

app.use("/matches", matchRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
