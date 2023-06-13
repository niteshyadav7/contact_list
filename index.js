/**
 * ⁡⁢⁢⁢⁡⁢⁣⁡⁢⁣⁢​‌‌​‌‍‌‍ℕ𝕆𝕋𝔼​​⁡⁡: ⁡⁢⁢⁣𝕋𝕆 ℂℝ𝔼𝔸𝕋𝔼 𝕊𝔼ℝ𝕍𝔼ℝ 𝕌𝕊𝕀ℕ𝔾 𝔼𝕏ℙℝ𝔼𝕊𝕊⁡
 * ⁡⁢⁢⁢1.REQUIRE EXPRESS⁡
 * ⁡⁢⁢⁢2.LISTEN IT⁡
 */
const express = require("express");
const hostName = "http://localhost";
const port = 1234;

// ⁡⁢⁢⁢BY THIS WE SET OUR ⁡⁣⁢⁣𝕍𝕀𝔼𝕎⁡ STRUCTURE OF ⁡⁣⁢⁣𝕄𝕍ℂ⁡⁡⁡
const path = require("path");

// ⁡⁢⁢⁢𝗗𝗨𝗠𝗠𝗬 𝗗𝗔𝗧𝗔⁡⁡

var contact_list = [
  {
    name: "Tony-Stark",
    phone: "87568",
  },
  {
    name: "Bruce-Wayne",
    phone: "98452",
  },
  {
    name: "Captain-America",
    phone: "25456",
  },
];

const app = express();

app.listen(port, (err) => {
  if (err) {
    console.log("Error", err);
  }
  console.log(`express server running on ${hostName}:${port}`);
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"), "views");

// ⁡⁢⁢⁢THIS IS THE BODY PARSER => USE FOR ::⁡ ⁡⁣⁣⁢𝗣𝗢𝗦𝗧,𝗣𝗔𝗧𝗖𝗛,𝗣𝗨𝗧 𝗛𝗧𝗧𝗣 𝗥𝗘𝗤𝗨𝗘𝗦𝗧𝗦⁡
app.use(express.urlencoded());

app.get("/", (req, res) => {
  return res.render("contactPage", {
    title: "My Contact Page",
    contactList: contact_list,
  });
});

/**
 *⁡⁣⁣⁢ ℍ𝕆𝕎 𝕋𝕆 ℙ𝕆𝕊𝕋⁡
 * ⁡⁢⁢⁢1.FIRSTLY YOU HAVE TO ⁡⁣⁢⁢=>USE MIDDLEWARE ::BODY PARSER =>⁡ ⁡⁣⁢⁣APP.USE(EXPRESS.URLENDCODED())⁡
 * ⁡⁢⁢⁢2.THEN PUSH IT⁡
 */

app.post("/add-contact", (req, res) => {
  contact_list.push({
    name: req.body.name,
    phone: req.body.phone,
  });
  return res.redirect("back");
});

/**
 * ⁡⁢⁢⁡⁣⁢⁣ℍ𝕆𝕎 𝕋𝕆 𝔻𝔼𝕃𝔼𝕋𝔼 ℂ𝕆ℕ𝕋𝔸ℂ𝕋𝕊⁡⁡
 * ⁡⁢⁢⁢1.FIRSTLY FIND INDEX⁡
 * ⁡⁢⁢⁢2.THEN SPLICE IT⁡
 */

app.get("/delete-contact", (req, res) => {
  let phone = req.query.phone;
  let findIndex = contact_list.find((contact) => (contact.phone = phone));
  if (findIndex != -1) {
    contact_list.splice(findIndex, 1);
  }
  return res.redirect("back");
});
