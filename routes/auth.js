const express = require("express");
const userModule = require("../models/user");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("login", { err: req.session.err, ...req.nav });
  req.session.err = undefined;
});
router.post("/", (req, res) => {
  let { username, password } = req.body;
  if (!username || !password) {
    req.session.err = "username or password missing";
    res.redirect("/auth");
    return;
  }
  let user = userModule.find(username);
  if (user.length == 0) {
    req.session.err = "username or password incorrect";
    res.redirect("/auth");
  } else {
    if (user[0].password == password) {
      req.session.name = user[0].name;
      res.redirect("/");
    } else {
      req.session.err = "username or password incorrect";
      res.redirect("/auth");
    }
  }
});
router.get("/logout", (req, res) => {
  req.session.name = undefined;
  res.redirect("/");
});
module.exports = router;
