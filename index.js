import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

app.post("/sign-up", (req, res) => {
	const { username, avatar } = req.body;

	users.push({ username, avatar });

	res.send("OK");
});

app.listen(5000, () => console.log("App running in port 5000"));
