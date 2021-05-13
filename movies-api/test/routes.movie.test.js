const assert = require("assert");
const proxyquire = require("proxyquire");

const { moviesMock, MoviesServiceMock } = require("../utils/mocks/movies.js");
const testserver = require("../utils/testServer");

describe("routes - movies", function () {
  const route = proxyquire("../routes/movies", {
    "../services/movies": MoviesServiceMock,
  });
  const request = testserver(route);
  describe("GET /movies", function () {
    it("sholud response with status 200", function (done) {
      request.get("/api/movies").expect(200, done);
    });
    it("should respond with the list of movies", function (done) {
      request.get("/api/movies").end((err, res) => {
        assert.deepEqual(res.body, {
          data: moviesMock,
          message: "movies listed",
        });
        done();
      });
    });
  });
});
