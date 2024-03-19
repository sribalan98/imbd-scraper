import express from "express";
import IMDB from "./imdb.min.js";
import cors from "cors";

const PORT = 5000 || 6050 || 4020 || 4000;
const app = express();
app.use(express.json());
app.use(cors());

const imdb = new IMDB();

app.post("/getByID", async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).send({ error: "No id provided" });
  }

  try {
    const result = await imdb.get_by_id(id);
    res.send(JSON.stringify(result));
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
    const result = await imdb.get_by_url(url);
    res.send(JSON.stringify(result));
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "An error occurred" });
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
