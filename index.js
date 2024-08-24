import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

const yourBearerToken = "64e91640-f6a9-47a4-a12b-e15a5f2e1c95";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

// get button code{}
app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

//post button code{}
app.post("/post-secret", async (req, res) => {
  try {
    const result = await axios.post(API_URL + "/secrets", req.body, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }

});

//put button code{}
app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  try{
    const result = await axios.put(API_URL + "/secrets/" + searchId , req.body , config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  }catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

//patch button code{}
app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  try{
    const result = await axios.patch(API_URL + "/secrets/" + searchId , req.body , config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  }catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

//delete button code{}

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  try{
    const result = await axios.delete(API_URL + "/secrets/" + searchId , config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  }catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
