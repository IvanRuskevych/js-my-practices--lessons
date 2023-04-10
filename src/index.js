import "./js/timer" 

import Timer from "./js/timer";

const timer = new Timer(new Date("2024-01-01 00:00:00"), document.querySelector("#timer"));

document.querySelector("#start").addEventListener("click", () => { timer.start() });
document.querySelector("#stop").addEventListener("click", () => { timer.stop() });
