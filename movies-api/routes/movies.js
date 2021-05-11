const { Router } = require("express");
const express = require("express");
const MoviesServices = require("../services/movies");

function moviesApi(app) {
  const router = express.Router();
  app.use("/api/movies", router);

  const moviesServices = new MoviesServices();

  router.get("/", async function (req, res, next) {
    const { tags } = req.query;

    try {
      const movies = await moviesServices.getMovies({ tags });
      res.status(200).json({
        data: movies,
        message: "movies listed",
      });
    } catch (error) {
      next(error);
    }
  });

  router.get("/:moviId", async function (req, res, next) {
    const { moviId } = req.params;
    try {
      const movies = await moviesServices.getMovie({ moviId });
      res.status(201).json({
        data: movies,
        message: "movies",
      });
    } catch (error) {
      next(error);
    }
  });

  router.post("/", async function (req, res, next) {
    const { body: movie } = req;
    try {
      const createMovieId = await moviesServices.createMovie({ movie });
      res.status(200).json({
        data: createMovieId,
        message: "Movies Created",
      });
    } catch (error) {
      next(error);
    }
  });

  router.put("/:moviId", async function (req, res, next) {
    const { moviId } = req.params;
    const { body: movie } = req;
    try {
      const updateMoviesid = await moviesServices.updateMovie({
        moviId,
        movie,
      });
      res.status(200).json({
        data: updateMoviesid,
        message: "movies update",
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete("/:moviId", async function (req, res, next) {
    const { moviId } = req.params;

    try {
      const deleteMovie = await moviesServices.deleteMovie({ moviId });
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
