const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')

document.addEventListener('scroll', function() {
    let value = window.scrollY
    title.style.marginTop = value * 1.1 + 'px'

    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'
})

let tasks = [];

const addTask = async (task) => {
    tasks.push(task);
};

const renderTasks = () => {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        todoList.appendChild(li);

        li.addEventListener('click', async () => {
            const newTask = prompt('Введите новый текст:');
            if (newTask) {
                await editTask(index, newTask);
                renderTasks();
            }
        });

        li.addEventListener('contextmenu', async (e) => {
            e.preventDefault();
            const confirmation = confirm('Точно удалить задачу?');
            if (confirmation) {
                await deleteTask(index);
                renderTasks();
            }
        });
    });
};

const editTask = async (index, newTask) => {
    tasks[index] = newTask;
};

const deleteTask = async (index) => {
    tasks.splice(index, 1);
};

document.getElementById('addTodoBtn').addEventListener('click', async () => {
    const todoInput = document.getElementById('todoInput');
    const task = todoInput.value.trim();
    if (task) {
        await addTask(task);
        renderTasks();
        todoInput.value = '';
    }
});
