// worker.js

// Функция для генерации случайных чисел
function generateRandomNumbers(count, max) {
  const numbers = [];
  for (let i = 0; i < count; i++) {
      numbers.push(Math.floor(Math.random() * max) + 1);
  }
  return numbers;
}

// Функция для вычисления среднего значения
function calculateAverage(numbers) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}

// Получаем сообщение от основного потока
self.onmessage = function(event) {
  const count = event.data;
  const numbers = generateRandomNumbers(count, 100); // Генерируем случайные числа от 1 до 100
  const average = calculateAverage(numbers); // Вычисляем среднее значение
  self.postMessage(average); // Отправляем результат обратно основному потоку
};
