const { Router } = require("express");
const express = require("express");
const { moviesMock } = require("../utils/mocks/movies");

function moviesApi(app) {
  const router = express.Router();
  app.use("/api/movies", router);

  router.get("/", async function (req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMock);
      res.status(200).json({
        data: movies,
        message: "movies listed",
      });
    } catch (error) {
      next(error);
    }
  });

  router.get("/:moviId", async function (req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMock[0]);
      res.status(201).json({
        data: movies,
        message: "movies",
      });
    } catch (error) {
      next(error);
    }
  });

  router.post("/", async function (req, res, next) {
    try {
      const createMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({
        data: createMovieId,
        message: "Movies Created",
      });
    } catch (error) {
      next(error);
    }
  });

  router.put("/:moviId", async function (req, res, next) {
    try {
      const updateMoviesid = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({
        data: updateMoviesid,
        message: "movies update",
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete("/:moviId", async function (req, res, next) {
    try {
      const deleteMovie = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({
        data: deleteMovie,
        message: "delete movie ",
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = moviesApi;
