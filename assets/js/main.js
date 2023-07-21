// TODO:
// 1. criação da tarefa com o input e botão +, junto com os botões
// 2. check da tarefa risca a mesma
// 3. deletar apaga a tarefa

function todolist() {
    const section = document.querySelector('section');
    const newTask = document.querySelector('form');
    const tasksArea = section.querySelector('#tasks-list');


    newTask.addEventListener('submit', function(evento) {
        evento.preventDefault();
        const inputTask = evento.target.querySelector('#new-task');
        
        tasksArea.classList.add('ativo');

        const newTaskValue = (inputTask.value);
        taskCreated(newTaskValue);

        inputTask.value = '';
    });

    function taskCreated (newTask) {
        const list = tasksArea.querySelector('ul');

        const liContent = `
            <li>
                <span>${newTask}</span>
                <div id="btns-task">
                    <button id="check-task">
                        <img class="check-task" src="assets/imgs/check-icon.png" alt="check icon" width="20px">
                    </button> 
                    <button id="delete-task">
                        <img class="delete-task" src="assets/imgs/cancel-icon.png" alt="delete icon" width="20px">
                    </button>
                </div>
            </li>`;

        list.innerHTML += liContent;
    }

    tasksArea.addEventListener('click', function(e) {
        const elementoClicado = e.target;

        if (elementoClicado.classList.contains('check-task')) {
            const li = elementoClicado.closest('li');
            const taskText = li.querySelector('span');
            taskText.classList.toggle('riscado');
        } else if (elementoClicado.classList.contains('delete-task')) {
            const li = elementoClicado.parentElement.parentElement.parentElement;
            li.remove()
        }

        if(tasksArea.querySelector('ul').childElementCount === 0) {
            tasksArea.classList.remove('ativo');
        }
    });

}

todolist();