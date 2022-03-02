const bodyParser = require("body-parser");
const express = require("express");
const app = express();
require("./models/dbConfig");
const postsRoutes = require("./routes/postsController");
const cors = require("cors");

// Middleware
// (Un middleware (ou intergiciel en français) est un logiciel qui agit comme une passerelle entre les autres applications,
// outils et bases de données pour offrir aux utilisateurs des services unifiés.
// Il est souvent décrit comme le ciment qui lie ensemble les différents appareils et plateformes logicielles. )

app.use(bodyParser.json());
app.use(cors()); // we can make exception (codepen) => app.use(cors({ origin: "https://cdpn.io" }))
app.use("/posts", postsRoutes);

app.listen(5500, () => console.log("Server started: 5500"));
