console.log("Module 08-016 To-Do")

const inputRef = document.querySelector("#addItem")

const clearInput = () => {
    inputRef.value = "";
}
export {inputRef, clearInput}