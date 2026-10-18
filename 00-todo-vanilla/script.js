// 1. L'état : la seule source de vérité
let todos = [];
let filter = "all";
let nextId = 1;

const formElement = document.querySelector("#add-form");
const inputElement = document.querySelector("#new-todo");
const listElement = document.querySelector("#list");
const remainingElement = document.querySelector("#remaining");
const filterButtons = document.querySelectorAll("#filters button");

// 2. L'affichage : reconstruit TOUT à partir de l'état
function list() {
    if (filter === "done") {
        return todos.filter(todo => todo.done);
    }
    if (filter === "todo") {
        return todos.filter(todo => !todo.done);
    }
    return todos;
}

function render() {
    listElement.innerHTML = "";

    for (const todo of list()) {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.done;
        checkbox.addEventListener("change", () => toggle(todo.id));

        const text = document.createElement("span");
        text.textContent = todo.text;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";
        deleteButton.addEventListener("click", () => remove(todo.id));

        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(deleteButton);
        listElement.appendChild(li);
    }

    remainingElement.textContent = todos.filter(todo => !todo.done).length;

    for (const button of filterButtons) {
        if (button.dataset.filter === filter) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    }
}

// 3. Les actions : modifient l'état, puis appellent render()
function add(text) {
    const cleanText = text.trim();

    if (cleanText === "") {
        return;
    }

    todos.push({
        id: nextId,
        text: cleanText,
        done: false
    });
    nextId++;
    render();
}

function remove(id) {
    todos = todos.filter(todo => todo.id !== id);
    render();
}

function toggle(id) {
    const todo = todos.find(todo => todo.id === id);

    if (todo) {
        todo.done = !todo.done;
    }
    render();
}

function setFilter(newFilter) {
    filter = newFilter;
    render();
}

// Les écouteurs des éléments fixes de la page, ajoutés une seule fois
formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    add(inputElement.value);
    inputElement.value = "";
});

for (const button of filterButtons) {
    button.addEventListener("click", () => setFilter(button.dataset.filter));
}

render();