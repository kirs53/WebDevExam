// Логика веб-работника (Web Worker)

// Функция для генерации случайного числа от 1 до 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Функция для генерации массива случайных чисел и вычисления среднего
function generateRandomNumbersAndCalculateAverage(totalNumbers) {
    let sum = 0;
    const numbers = Array.from({ length: totalNumbers }, () => generateRandomNumber());
    
    numbers.forEach(number => {
        sum += number;
    });

    const average = sum / totalNumbers;

    // Отправляем результат обратно в основной поток
    postMessage(average);
}

// Слушаем сообщения от основного потока
onmessage = function(event) {
    const totalNumbers = event.data;
    generateRandomNumbersAndCalculateAverage(totalNumbers);
};
