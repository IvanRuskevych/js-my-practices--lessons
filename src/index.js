import "./js/input"


import { addItem, onCheck, listDOM, initStorageList } from "./js/list";
import { inputRef } from "./js/input";

initStorageList();
document.querySelector(".add-btn").addEventListener("click", () => addItem(inputRef.value));
listDOM.addEventListener("click", onCheck)