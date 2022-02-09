const getItems = document.getElementById(`Items`);
const getForm = document.getElementById(`form`);
const getList = document.getElementById(`list`);
const addBtn = document.getElementById(`Add Item`);
const clearBtn = document.getElementById(`Clear all`);


let itemsArray = localStorage.getItem(`Items`) ? JSON.parse(localStorage.getItem(`Items`)) : [] ;

localStorage.setItem(`Items`, JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem(`Items`));

const liMaker = (text) => {
    const li = document.createElement(`li`);
    li.textContent = text;
    getList.appendChild(li);

}

getForm.addEventListener(`submit`, function (e) {
    e.preventDefault();

    itemsArray.push(getItems.value);
    localStorage.setItem(`Items`, JSON.stringify(itemsArray));
    liMaker(getItems.value);
    getItems.value="";

});

addBtn.addEventListener(`click`, function () {

    itemsArray.push(getItems.value);
    localStorage.setItem(`Items`, JSON.stringify(itemsArray));
    liMaker(getItems.value);
    getItems.value="";
});

clearBtn.addEventListener(`click`, function () {
    localStorage.clear();
    while (getList.firstChild) {
        getList.removeChild(getList.firstChild);
    }
    itemsArray = [];
});

data.forEach(item => {
    liMaker(item);
});