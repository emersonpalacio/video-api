// metraigo mi archivo de configuracion, me traigo la constante config
const { config } = require("../../config");
const boom = require("@hapi/boom");
//funcion de ayuda, para saber si estoy en modo de desarrollo(dev)
function witchErrorStack(error, stack) {
  if (config.dev) {
    return { ...error, stack };
  }

  return error;
}

//middleware
function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

function wrapError(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }
  next(err);
}

//middleware: para dar manejo el error
function errorHandler(err, req, res, next) {
  const {
    putput: { statusCode, payload },
  } = err;
  res.status(statusCode);
  res.json(witchErrorStack(payload, err.stack));
}

module.exports = {
  logErrors,
  errorHandler,
  wrapError,
};
