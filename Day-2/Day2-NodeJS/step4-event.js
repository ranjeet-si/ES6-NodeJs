const EventEmitter = require("node:events").EventEmitter;

let si = new EventEmitter();

si.addListener("cricket", function(evt){
    console.log("cricket event happend", evt);
})

si.emit("cricket", "cricket is sport");