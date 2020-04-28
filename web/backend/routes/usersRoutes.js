const express = require("express");
const router = express.Router();
const passport = require("passport");

module.exports = userService => {
  router.get("/", (req, res) => {
    userService
      .getAllUsers()
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/walmart", (req, res) => {
    userService
      .getWalmartAddress()
      .then(data => {
        console.log("data is", data);
        const walmartAddress = data.rows;
        res.json({ walmartAddress });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/tausif", (req, res) => {
    userService
      .getUserReservations()
      .then(data => {
        const userData = data.rows;
        res.json({ userData });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/saveon", (req, res) => {
    userService
      .getStoreReservations()
      .then(data => {
        const userData = data.rows;
        res.json({ userData });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  router.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  router.get("/auth/logout", (req, res) => {
    req.logOut();
    res.redirect("/");
  });

  router.get("/auth/current_user", (req, res) => {
    res.send(req.user);
  });

  return router;
};
