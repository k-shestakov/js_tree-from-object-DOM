"use strict";
const food = {
    Drink: {
        Wine: {},
        Schnaps: {}
    },
    Fruit: {
        Red: {
            Cherry: {},
            Strawberry: {}
        },
        Yellow: {
            Banana: {},
            Pineapple: {}
        }
    }
};
const tree = document.querySelector("#tree");
function createTree(element, data) {
    const list = document.createElement("ul");
    for(const key in data){
        const item = document.createElement("li");
        item.textContent = key;
        list.append(item);
        element.append(list);
        createTree(item, data[key]);
    }
}
createTree(tree, food);

//# sourceMappingURL=index.f75de5e1.js.map
