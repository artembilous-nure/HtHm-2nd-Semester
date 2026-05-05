/* =======================================================
   ЛАБОРАТОРНА РОБОТА №3 - БЛОК 1
======================================================= */

// Завдання 1: Функція, яка виводить текст з різним розміром шрифту
function changeFontSize(elementId, size) {
    let element = document.getElementById(elementId); 
    if (element) { 
        element.style.fontSize = size; 
    }
}

// Завдання 2: Стрибаюча картинка кожну секунду (через setInterval)
let jumpingImg = document.getElementById('jumping-img');
if (jumpingImg) {
    setInterval(function() { 
        let windowWidth = window.innerWidth - 60; 
        let windowHeight = window.innerHeight - 60; 
        
        let randomLeft = Math.floor(Math.random() * windowWidth); 
        let randomTop = Math.floor(Math.random() * windowHeight);
        
        jumpingImg.style.left = randomLeft + 'px'; 
        jumpingImg.style.top = randomTop + 'px';
    }, 1000); 
}

// Завдання 3: Знайти всі <p> і змінити їх розмір на 15px
function changeAllParagraphs() {
    let paragraphs = document.getElementsByTagName('p');
    for(let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].setAttribute('style', 'font-size: 15px;');
    }
}

// Завдання 4: Текстовий годинник 
let clockElement = document.getElementById('text-clock');
if (clockElement) {
    setInterval(function() {
        let now = new Date(); // 
        clockElement.innerHTML = now.toLocaleTimeString(); 
    }, 1000);
}

// Завдання 5: Ефект поступового витирання 
function wipeOutEffect() {
    let block = document.getElementById('wipe-block');
    if (!block) return;
    
    let currentHeight = 100; 
    let currentOpacity = 1;
    
    let wipeTimer = setInterval(function() {
        currentHeight -= 2; 
        currentOpacity -= 0.02;
        if (currentHeight <= 0) {
            currentHeight = 0;
            currentOpacity = 0;
            clearInterval(wipeTimer); 
            block.style.display = 'none'; 
        }
        block.style.height = currentHeight + 'px'; 
        block.style.opacity = currentOpacity;
    }, 30); 
}

/* =======================================================
   ЛАБОРАТОРНА РОБОТА №3 - БЛОК 2 
======================================================= */

// Завдання 3: Зміна кольору квадрата зі списку
function changeSquareColor() {
    let selectedColor = document.getElementById('color-select').value;
    document.getElementById('color-square').style.backgroundColor = selectedColor;
}

// Завдання 4: Координати миші та код клавіші
document.addEventListener('mousemove', function(event) { 
    let mouseX = document.getElementById('mouse-x'); 
    let mouseY = document.getElementById('mouse-y');
    if(mouseX && mouseY) { 
        // event.clientX та event.clientY - це координати курсору
        mouseX.textContent = event.clientX;
        mouseY.textContent = event.clientY;
    }
});

document.addEventListener('keydown', function(event) {
    let keyCodeSpan = document.getElementById('key-code');
    if(keyCodeSpan) {
        // event.key - сама клавіша (напр. 'a'), event.keyCode - її числовий код
        keyCodeSpan.textContent = event.key + " (Код: " + event.keyCode + ")";
    }
});

// Завдання 2: Міняємо колонки таблиці місцями
function swapTableColumnsDynamic() {
    let input1 = parseInt(document.getElementById('col1-input').value);
    let input2 = parseInt(document.getElementById('col2-input').value);
    let table = document.getElementById('swap-table');
    
    if (!table) return;

    let maxCols = table.rows[0].cells.length; 

    if (input1 === input2) {
        alert("Ви обрали однакові колонки. Міняти нічого!");
        return;
    }

    let col1Index = input1 - 1;
    let col2Index = input2 - 1;

    // Перебираємо всі рядки таблиці і міняємо вміст комірок
    let rows = table.rows;
    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].cells;
        if (cells.length > Math.max(col1Index, col2Index)) {
            let temp = cells[col1Index].innerHTML;
            cells[col1Index].innerHTML = cells[col2Index].innerHTML;
            cells[col2Index].innerHTML = temp;
        }
    }
}

// Завдання 10: Заборона перегляду HTML коду сторінки
// Блокуємо клік правою кнопкою (контекстне меню)
document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Зупиняє стандартну поведінку браузера
    alert('Клік правою кнопкою миші заборонено!');
});

// Блокуємо комбінації клавіш: F12 (123) та Ctrl+U (85)
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 123) {
        event.preventDefault();
        alert('Інструменти розробника (F12) заблоковано!');
    }
    // Якщо натиснуто Ctrl (або Cmd на Mac) + U
    if ((event.ctrlKey || event.metaKey) && event.keyCode === 85) {
        event.preventDefault();
        alert('Перегляд вихідного коду (Ctrl+U) заблоковано!');
    }
});

/* =======================================================
ЛАБОРАТОРНА РОБОТА №3 - БЛОК 3 
======================================================= */

// Завдання 4: Знайти всі номери кредитних карток у тексті
function findCreditCards(){
    let text = document.getElementById('credit-text').textContent;
    let regex = /\d{4}-\d{4}-\d{4}-\d{4}/g; 
    let result = text.match(regex);
    let resultSpan = document.getElementById('credit-result');
    if(result && result.length > 0) {
        resultSpan.textContent = result.join(' та ');
    } else {
        resultSpan.textContent = "Номери карток не знайдено";
        resultSpan.style.color = 'red';
    }
}

// Завдання 5: Вивести реферер та user-agent
function showBrowserInfo() {
    let referrerText = document.getElementById('referrer-text');
    let userAgentText = document.getElementById('user-agent-text');

    let referrer = document.referrer;
    if (referrer === "") {
        referrerText.textContent = "Не вказано";
    }else{
    referrerText.textContent = referrer;
    }
    userAgentText.textContent = navigator.userAgent;
}