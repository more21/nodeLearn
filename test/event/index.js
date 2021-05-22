const EventEmitter = require("events");

const event = new EventEmitter();

// event.on("sayMyName", () => {
//     console.log("Hello Emit Yes");
// });

// event.on("sayMyName", () => {
//     console.warn("s Hello Emit Yes");
// });

event.on("sayMyName", (sc, msg) => {
    console.log(`This is Status ${sc} and message is ${msg}`);
});

event.emit("sayMyName",200,"Done");

