const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')

document.addEventListener('scroll', function() {
    let value = window.scrollY
    // console.log(value)
    title.style.marginTop = value * 1.1 + 'px'

    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'
})

// Основной JavaScript файл

// Слушаем клик по кнопке
document.getElementById('generate').addEventListener('click', function() {
    const totalNumbers = 10000000; // 10 миллионов чисел

    // Создаем и запускаем веб-работника
    const worker = new Worker('worker.js');
    
    // Передаем количество чисел в веб-работника для обработки
    worker.postMessage(totalNumbers);

    // Получаем результат от веб-работника
    worker.onmessage = function(event) {
        const outputDiv = document.getElementById('output');
        outputDiv.textContent = 'Срдний показатель сгенерированного массива: ' + event.data;
    };
});

