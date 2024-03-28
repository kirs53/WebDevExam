function generateRandomNumbers(count, max) {
  const numbers = [];
  for (let i = 0; i < count; i++) {
      numbers.push(Math.floor(Math.random() * max) + 1);
  }
  return numbers;
}

function Average(numbers) {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}

self.onmessage = function(event) {
  const count = event.data;
  const numbers = generateRandomNumbers(count, 100); 
  const average = Average(numbers); 
  self.postMessage(average); 
};
