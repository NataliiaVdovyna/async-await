async function fetchUsers() {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    return result.json();
}

async function renderList() {
    const users = await fetchUsers();
    const ul = document.querySelector('.users-lists');
    for(const user of users) {
        const li = document.createElement('li');
        li.className = 'users-list-item';
        li.innerHTML = user.name;
        ul.appendChild(li);
    }
}

function filterUsers(event){
    const userListItems = document.getElementsByClassName('users-list-item');
//якщо поле ми нажимаємо shift і всі інші клавіші цикл рахує їх, нам треба перервати це

    if(event.target.value === 0) {
        [...document.getElementsByClassName('hidden')].forEach((item) => {
        console.log('hidden');
        item.classList.remove('hidden');
        });
        return;
    }
    for (const user of userListItems) {
        console.log(1);
        if(!user.innerHTML.startsWith(event.target.value)) {
            user.classList.add('hidden');
        } else {
            user.classList.remove('hidden');
        }
    }

}


renderList()

const Input = document.querySelector('input');
Input.addEventListener('keyup', filterUsers);

