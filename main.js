import express, { json, urlencoded } from "express";
import IMDB from "./imdb.min.js";
import cors from "cors";

const PORT = 4000 || 3600 || 7000 || 4080;
const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

const imdb = new IMDB();

app.post("/getByID", async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).send({ error: "No id provided" });
  }

  try {
    const response = await imdb.get_by_id(id);
    const result = JSON.stringify(response);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "An error occurred" });
  }
});

app.post("/getByURL", async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).send({ error: "No id provided" });
  }
  try {
    const response = await imdb.get_by_url(url);
    const result = JSON.stringify(response);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "An error occurred" });
  }
});
app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
