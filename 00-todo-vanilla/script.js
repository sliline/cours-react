// 1. L'état : la seule source de vérité
let todos = [];
let filter = "all";
let nextId = 1;

// 2. L'affichage : reconstruit TOUT à partir de l'état
function render() {
    // vide la <ul>, puis recrée un <li> pour chaque tâche visible
    // met à jour le compteur et le bouton de filtre actif
}

// 3. Les actions : modifient l'état, puis appellent render()
function add(text) {
    todos.push({
        id: nextId,
        text: text,
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