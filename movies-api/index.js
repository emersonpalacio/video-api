const express = require("express");
const app = express();

const { config } = require("./config/index"); //son nuestras variables de entorno
const moviesApi = require("./routes/movies.js"); // son nuestras rutas

//agregamos los middleware
const {
  logErrors,
  errorHandler,
  wrapError,
} = require("./utils/middleware/errorHandles");

// body parser
app.use(express.json()); // para sertificar que todo este en json.
const notFoundHandler = require("./utils/middleware/notFoundHandler");

moviesApi(app);
app.use(notFoundHandler); //capptura error 404

//los middleware deben ir siempre al final de las rutas.
app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
