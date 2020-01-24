const numbersMatrix = [
  [2, 4, 4],
  [5, 6, 4, 3, 2, 2, 2],
  [2, 2, 2, 8, 9]
];

// Функция для расчета суммы, основанная на разрядах чисел
function calc_digits(matrix) {
  // Суммируем разряды во всех данных числах, сначала не обращая внимания
  // на выход за допустимое значение(1..9 в десятичной системе) 
  const summed = numbersMatrix.reduce((prevRow, currentRow) => {

    // Так как расчеты производим в матричном виде, учитываем, что предыдущее число может быть
    // больше, чем текущее. Заполняем недостоящие элементы текущей строки нулями.
    // они будут болванками, в которые впоследствие встанут отсутствующие в данной строке разряды
    if (currentRow.length < prevRow.length) currentRow.push(...blancElementsBasedOnDifference(prevRow.length - currentRow.length))
    for (let i = 0; i < currentRow.length; i++) currentRow[i] += (prevRow[i] || 0)
    return currentRow;
  }, [0]);

  // На примере, если в итоге у нас получилось 12 единиц, получившийся десяток переносим на разряд выше
  // оставляем только единицы (т.е 2). С другими разрядами аналогично.
  summed.forEach((digit, index, summed) => {
    if (digit >= 10) {
      summed[index + 1] += Number(digit.toString()[0]);
      summed[index] = Number(digit.toString()[1]);
    }
  });

  return Number(summed.reverse().toString().replace(/,/g, ""));
}

function blancElementsBasedOnDifference(number) {
	let array = []
	for(let i = 0; i < number; i++) array.push(0)
	return array
}

console.log(calc_digits(numbersMatrix))
