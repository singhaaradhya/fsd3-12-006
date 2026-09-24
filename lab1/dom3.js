import { EventEmitter } from "events";

const button = new EventEmitter();

button.on("click", (uname) =>{
  console.log(`button clicked by ${uname}`);
});

button.emit("click", "Aaradhya");
button.emit("click", "TAP ROAD");
button.emit("click", "madhaneaaaa");
button.emit("click");
console.log()