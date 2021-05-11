const EventEmitter = require("events"); // Creamos un Event Emitter

class Logger extends EventEmitter {
  // Podemos crear un logger propio
  execute(cb) {
    // Método execute recibe un callback
    console.log("Before");
    this.emit("start"); // Emitimos un Evento
    cb(); // jecutamos nuestro callback
    this.emit("finish"); // Emitimos otro evento
    console.log("Afther");
  }
}

const logger = new Logger();

logger.on("start", () => console.log("STARTING")); // Cada vez que ocurra algún evento, hagá algo
logger.on("start", () => console.log("STARTING two"));
logger.on("finish", () => console.log("Finishing")); // Podemos Suscribirnos al evento multiples veces sin niguna restricción
logger.on("finish", () => console.log("It's Done"));
// logger.execute(() => console.log("Hello World"));

/*
Algo muy importante es que si ejecutamos código asincrono, como un setTimeout,
el orden no va ha permanecer, porque como es código asincrono precisamente se va 
ha ejecutar despues de todas las emisiones, en ese caso la manera de controlarlo es
usando callbacks, si lo ejecutamos veremos que nuestro hello world se ejecuta despues,
porque queda de manera asincrona.
*/
logger.execute(() => setTimeout(() => console.log("Hello World"), 2000));
