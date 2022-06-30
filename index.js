const wrapper = document.querySelector('.wrapper');

const list = document.getElementById('tasks');

const btnAdd = document.getElementById('btnAdd');

const btnDel = document.getElementById('btnDel');

const task = document.getElementById('task');


btnAdd.addEventListener('click', (e) => {
    if(task.value.length == 0) return;
    const item = document.createElement('li');
    item.append(addEditBtn())
    item.append(addDate())
    item.append(addChekbox())
    item.append(addText())
    list.append(item);
    task.value = '';
})

function addEditBtn() {
    const buttonEdit = document.createElement('label');
    buttonEdit.classList.add('buttonEdit');
    buttonEdit.innerHTML = '<input type="checkbox" class="checkBtn"><span class="spanBtn"><i class="fa-solid fa-pencil"></i></span>';
    const checkBtn = buttonEdit.querySelector('.checkBtn');
    editFun(checkBtn)
    return buttonEdit;
}

function editFun(checkBtn) {
    checkBtn.addEventListener('change', function(){
        const list = checkBtn.parentNode.parentElement;
        const text = list.querySelector('.text');
        if (this.checked) {
            text.contentEditable = 'true';
        } else {
            text.contentEditable = 'false';
        }
    })
    return checkBtn;
}

function addDate() {
    const textDate = document.createElement('p');
    textDate.classList.add('textDate');
    textDate.innerText = new Date().toLocaleString().slice(0, -3);
    return textDate
}

function addChekbox() {
    const checkCustom = document.createElement('label');
    checkCustom.classList.add('checkCustom')
    const checkSpan = document.createElement('span');
    checkSpan.classList.add('checkbox')
    const check = document.createElement('input');
    check.type = 'checkbox'
    check.classList.add('check')
    checkCustom.append(check)
    checkCustom.append(checkSpan)
    return checkCustom
}

function addText() {
    const text = document.createElement('p');
    text.classList.add('text')
    text.innerText = task.value;
    addCrossOut(text)
    return text
}

function addCrossOut(text) {
    text.addEventListener('dblclick', function (){
        this.classList.add('crossOut')
    })
    text.addEventListener('click', function(){
        this.classList.remove('crossOut')
    })
    return text
}

btnDel.addEventListener('click', (e) => {
    const deleted = document.querySelectorAll(".check[type='checkbox']:checked");
    deleted.forEach( el => el.parentNode.parentElement.remove())
})
