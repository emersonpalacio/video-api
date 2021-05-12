// metraigo mi archivo de configuracion, me traigo la constante config
const { config } = require("../../config");

//funcion de ayuda, para saber si estoy en modo de desarrollo(dev)
function witchErrorStack(error, stack) {
  if (config.dev) {
    return { error, stack };
  }

  return error;
}

//middleware
function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

//middleware: para dar manejo el error
function errorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.json(witchErrorStack(err.message, err.stack));
}

module.exports = {
  logErrors,
  errorHandler,
};
