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

	res.send("OK");
});

app.post("/tweets", (req, res) => {
	const { tweet } = req.body;
	const { user } = req.headers;

	if (!user || !tweet) {
		res.status(400).send("Todos os campos são obrigatórios!");
		return;
	}

	tweets.push({ username: user, tweet });

	res.status(201).send("OK");
});

app.get("/tweets", (req, res) => {
	const { page } = req.query;

	if(page <=0) {
		res.status(400).send("Informe uma página válida!");
		return;
	}

	let tweetsWithAvatar = tweets.slice(((page - 1) * 10), page * 10);

	if (users.length !== 0) {
		tweetsWithAvatar = tweetsWithAvatar.map((tweet) => {
			const user = users.find((user) => user.username === tweet.username);
			return { ...tweet, avatar: user.avatar };
		});
	}

	res.send(tweetsWithAvatar);
});

app.get("/tweets/:user", (req, res) => {
	const { user } = req.params;

	const tweetsFromUser = tweets.filter((tweet) => tweet.username === user)

	const tweetsWithAvatar = tweetsFromUser.map((tweet) => {
			const userAvatar = users.find((user) => user.username === tweet.username);
			return { ...tweet, avatar: userAvatar.avatar };
	});

	res.send(tweetsWithAvatar)
});

app.listen(5000, () => console.log("App running in port 5000"));
