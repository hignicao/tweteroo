import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
	const { username, avatar } = req.body;

	if (!username || !avatar) {
		res.status(400).send("Todos os campos são obrigatórios!");
		return;
	}

	users.push({ username, avatar });

	res.status(201).send("OK");
});

app.post("/tweets", (req, res) => {
	const { username, tweet } = req.body;

	if (!username || !tweet) {
		res.status(400).send("Todos os campos são obrigatórios!");
		return;
	}

	tweets.push({ username, tweet });

	res.status(201).send("OK");
});

app.get("/tweets", (req, res) => {
	let tweetsWithAvatar = tweets.slice(-10);

	if (users.length !== 0) {
		tweetsWithAvatar = tweetsWithAvatar.map((tweet) => {
			const user = users.find((user) => user.username === tweet.username);
			return { ...tweet, avatar: user.avatar };
		});
	}

	res.send(tweetsWithAvatar);
});

app.listen(5000, () => console.log("App running in port 5000"));
