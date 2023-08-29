const EventEmitter = require("node:events").EventEmitter;


let si = new EventEmitter();
let count = 0;

let cricketHandler = function (evt) {
  console.log("cricket event happend", evt);
};
si.addListener("cricket", cricketHandler);

let interval = setInterval(function () {
  count++;
  console.log("interval triggered", count);
  if (count <= 5) {
    si.emit("cricket", "cricket is sport");
  } else {
    si.emit("cricket", "cricket is sport");
    clearInterval(interval);
  }
}, 1000);
si.addListener("cricket", function (evt) {
  console.log("cricket event happend", evt);
});
