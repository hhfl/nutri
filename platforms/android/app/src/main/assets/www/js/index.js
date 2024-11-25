function calcularTMB() {
    const sexo = document.getElementById('sexo').value;
    const idade = parseFloat(document.getElementById('idade').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const atividade = document.getElementById('atividade').value;
    const resultado = document.getElementById('resultado');

    if (isNaN(idade) || isNaN(peso) || isNaN(altura)) {
        resultado.textContent = 'Por favor, preencha todos os campos corretamente.';
        return;
    }

    let tmb;

    if (sexo === 'masculino') {
        tmb = atividade * (88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade));
    } else if (sexo === 'feminino') {
        tmb = atividade * (447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade));
    } else {
        resultado.textContent = 'Selecione um sexo válido.';
        return;
    }

    resultado.textContent = `Sua TMB é de ${tmb.toFixed(2)} calorias/dia.`;
}


function toggleTaskList() {
    const taskList = document.getElementById('task-list');
    const toggleIcon = document.getElementById('toggle-icon');
    if (taskList.style.display === 'none' || taskList.style.display === '') {
        taskList.style.display = 'block';
        toggleIcon.textContent = '➖';
    } else {
        taskList.style.display = 'none';
        toggleIcon.textContent = '➕';
    }
}

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    const tasks = document.getElementById('tasks');
    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
        <span onclick="toggleComplete(this)">${taskValue}</span>
        <button onclick="removeTask(this)">Remover</button>
    `;
    tasks.appendChild(taskItem);

    taskInput.value = '';
}

function toggleComplete(taskElement) {
    taskElement.parentElement.classList.toggle('completed');
}

function removeTask(buttonElement) {
    buttonElement.parentElement.remove();
}


function submitFeedback(feedback) {
    // Exibe uma mensagem de agradecimento
    const thankYouMessage = document.getElementById('thank-you');
    thankYouMessage.style.display = 'block';

    // Opcional: Logar ou salvar o feedback (pode ser integrado com backend)
    console.log('Feedback recebido:', feedback);

    // Após 2 segundos, redireciona ou fecha a mensagem
    setTimeout(() => {
        thankYouMessage.style.display = 'none';
    }, 2000);
}

function contato(tipo) {
    if (tipo === 'email') {
        alert('Enviando e-mail para: marcos.andrade@nutri.com');
    } else if (tipo === 'telefone') {
        alert('Ligando para: (11) 98765-4321');
    }
}



function adicionarEvento(event) {
    event.preventDefault(); // Evita o recarregamento da página
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;
    const descricao = document.getElementById('descricao').value;

    if (!data || !hora || !descricao) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const agendaList = document.getElementById('agenda-list');
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <span>${data} às ${hora}: ${descricao}</span>
        <button onclick="removerEvento(this)">Remover</button>
    `;

    agendaList.appendChild(listItem);

    // Limpa os campos do formulário
    document.getElementById('data').value = '';
    document.getElementById('hora').value = '';
    document.getElementById('descricao').value = '';
}

function removerEvento(button) {
    const listItem = button.parentElement;
    listItem.remove();
}