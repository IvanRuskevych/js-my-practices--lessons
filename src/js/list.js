import { clearInput } from "./input"; 

const listDOM = document.querySelector("#list");
const checkItem = (node) => node.classList.toggle("checked");
const initStorageList = () => {
    try {
        const list = JSON.parse(localStorage.getItem("list"))
        if (list.elements.length > 0) {
            list.elements.forEach(element => {
                const item = addItem(element.text);
                if (element.checked) {
                    checkItem(item);
                }
            });
        }

    } catch (error) { return; }
};

const addItem = (text = "") => {
    if (!text) {
        return alert("You must print something");
    }

    const element = createItemElement(text);
    clearInput();
    listDOM.append(element);

    // const removeBtn = createItemRemoveBtn();
    // element.append(removeBtn)

    updateStorageList();

    return element;
};

const createItemElement = (text) => {
    const li = document.createElement("li");
    li.textContent = text;
    li.append(createItemRemoveBtn());
    return li;
};

const createItemRemoveBtn = () => {
    const span = document.createElement("span");
    span.textContent = "x";
    span.classList.add("close");
    span.addEventListener("click", onRemove);
    return span;
};

const onRemove = (evt) => {
    evt.currentTarget.parentNode.style.display = "none";
    updateStorageList();
};

const onCheck = (evt) => {
    if (evt.target.nodeName === "LI") {
        checkItem(evt.target);
        updateStorageList();
    }
};

const updateStorageList = () => {
    // find all nodes and update local storage with objects
    let elements = [...listDOM.children];
    console.log(listDOM.children);
    console.log(...listDOM.children);
    console.log([...listDOM.children]);
    elements = elements.filter(element => element.style.display !== "none").map(element => ({
        text: element.firstChild.textContent,
        checked: element.classList.contains("checked")
    }));
    const list = {
        elements
    };
    localStorage.setItem("list", JSON.stringify(list));
};

export { addItem, onCheck, onRemove, initStorageList, listDOM };