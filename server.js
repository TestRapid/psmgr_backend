import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// importing custom modules
import psmgr from "./routes/psmgr.js";

// declaring variables
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// defining routes
app.get("/", (req, res) => {
	res.json(`server started at http://localhost:${PORT}`);
});

app.use("/psmgr", psmgr);

// 404 route
app.use((req, res) => {
	res.sendStatus(404);
});

// listening to port
app.listen(PORT, () =>
	console.log(`server started at http://localhost:${PORT}`)
);
