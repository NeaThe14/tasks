// Задача - найти самую длинную подстроку без повторяющихся символов
const example_string = "zxcvbnm,asdfgheiwuqowemscxzmfkljdo2l23";
// Разделяем исходную строку на отдельные символы для итерации
const char_array = example_string.split("");

const result = calc_longest_substring(char_array, example_string);
console.log("The longest substring(s):", result);

// Функция для расчета самой длинной подстроки(строк)
function calc_longest_substring(charArray, str) {
	// Массив всех найденных подстрок без дупликатов
	const substringArray = [];
	// Кэшер для текущей подстроки, запоминает
	// все текущие символы в рамках одной подстроки
	let cacher = [];
	// По нахождению подстроки без дупликатов, пушим ее
	// в массив и запоминаем место старта новой рассматриваемой
	// подстроки
	let currentIndex = 0;
	charArray.forEach((currentChar, index) => {
		// Если текущий обрабатываемый символ находится в кэше,
		// значит это конец текущей подстроки. Пушим ее в массив,
		// запоминая индекс начала новой подстроки
		if (cacher.find(cachedChar => cachedChar === currentChar)) {
			substringArray.push(str.substring(currentIndex, index));
			currentIndex = index;
		}
		cacher.push(currentChar);
	})

	// Сортируем итоговой массив подстрок по длине, возвращаем самую длинную
	// из них(или несколько, если у них одинаковая длина. Ориентируемся на самую
	// большую подстроку(после сортировки она - первая)
	return substringArray.sort((a, b) => b.length - a.length)
		.filter(substr => substr.length === substringArray[0].length)
}
