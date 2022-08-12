const path = require("path");

const express = require("express");
const app = express();

const sendEmail = require("./utils/sendEmail");

app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("contact");
});


app.post("/sendemail", (req, res) => {
  const { email } = req.body;

  const from = "vutuanm472@gmail.com";
  const to = "vutuanm01@gmail.com";

  const subject = "New Contact Request";

  const output = `
    <p>Welcome to our community!!!</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Email: ${email}</li>
    </ul>
  `;

  sendEmail(to, from, subject, output);

});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));