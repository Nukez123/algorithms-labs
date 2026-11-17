// Читаем число из поля ввода.
function num(id) {
    return Number(document.getElementById(id).value);
}
// Показываем ответ прямо под кнопкой
function show(n, text) {
    let result = document.getElementById("result" + n);
    result.textContent = text;
    result.classList.add("is-ready");
}
// Убираем длинные дробные части из результатов
function fmt(n) {
    return Number(n.toFixed(6));
}

// Задача 1
function factorial(n) {
    if (n <= 1) return 1n;
    return BigInt(n) * factorial(n - 1);
}

function task1(event) {
    event.preventDefault();

    let n = num("t1-n");

    if (!Number.isInteger(n) || n < 0 || n > 500)
        return show(1, "Введите целое число от 0 до 500.");

    show(1, `${n}! = ${factorial(n)}`);
}

// Задача 2
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function task2(event) {
    event.preventDefault();

    let n = num("t2-n");

    if (!Number.isInteger(n) || n < 0 || n > 35)
        return show(2, "Введите целое число от 0 до 35.");

    show(2, `F(${n}) = ${fibonacci(n)}`);
}

// Задача 3
function power(x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / power(x, -n);
    return x * power(x, n - 1);
}

function task3(event) {
    event.preventDefault();

    let x = num("t3-x");
    let n = num("t3-n");

    if (!Number.isInteger(n) || n < -1000 || n > 1000)
        return show(3, "Степень должна быть целым числом от -1000 до 1000.");

    if (x === 0 && n < 0)
        return show(3, "Нельзя возводить ноль в отрицательную степень.");

    show(3, `${x} в степени ${n} = ${power(x, n)}`);
}

// Задача 4
function isPalindrome(text) {
    if (text.length <= 1) return true;

    if (text[0] !== text[text.length - 1])
        return false;

    return isPalindrome(text.slice(1, -1));
}

function task4(event) {
    event.preventDefault();

    let text = document.getElementById("t4-text").value;
    let clean = text.toLowerCase().replace(/[^a-zа-яё0-9]/g, "");

    if (clean.length === 0)
        return show(4, "Введите строку с буквами или цифрами.");

    show(4, isPalindrome(clean) ? "Это палиндром." : "Это не палиндром.");
}

// Задача 5
function binarySearch(array, target, left, right) {
    if (left > right) return -1;

    let middle = Math.floor((left + right) / 2);

    if (array[middle] === target) return middle;

    if (array[middle] < target)
        return binarySearch(array, target, middle + 1, right);

    return binarySearch(array, target, left, middle - 1);
}

function task5(event) {
    event.preventDefault();

    let text = document.getElementById("t5-array").value.trim();
    let array = text.split(/[\s,;]+/).filter(Boolean).map(Number);
    let target = num("t5-target");

    if (array.length === 0 || array.some(x => !Number.isFinite(x)))
        return show(5, "Введите массив чисел через пробел или запятую.");

    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1])
            return show(5, "Массив должен быть отсортирован по возрастанию.");
    }

    let index = binarySearch(array, target, 0, array.length - 1);

    show(5, index === -1
        ? "Элемент не найден."
        : `Элемент найден. Позиция: ${index + 1}`);
}

// Задача 6
function reverseWords(words) {
    if (words.length === 1) return words[0];

    return words[words.length - 1] + " " +
        reverseWords(words.slice(0, -1));
}

function task6(event) {
    event.preventDefault();

    let text = document.getElementById("t6-text").value.trim();

    if (!text)
        return show(6, "Введите хотя бы одно слово.");

    let words = text.split(/\s+/);

    show(6, reverseWords(words));
}

// Задача 7
function primeSum(n) {
    if (n === 2 || n === 3) return String(n);

    return "2 + " + primeSum(n - 2);
}

function task7(event) {
    event.preventDefault();

    let n = num("t7-n");

    if (!Number.isInteger(n) || n < 2 || n > 1000)
        return show(7, "Введите целое число от 2 до 1000.");

    show(7, `${n} = ${primeSum(n)}`);
}

// Задача 8
function countDigits(n) {
    if (n < 10) return 1;

    return 1 + countDigits(Math.floor(n / 10));
}

function task8(event) {
    event.preventDefault();

    let n = num("t8-n");

    if (!Number.isSafeInteger(n))
        return show(8, "Введите целое число в безопасном диапазоне JavaScript.");

    show(8, `Количество цифр: ${countDigits(Math.abs(n))}`);
}

// Задача 9
function hanoi(n, from, to, spare, moves) {
    if (n === 0) return;

    hanoi(n - 1, from, spare, to, moves);

    moves.push(`Диск ${n}: ${from} → ${to}`);

    hanoi(n - 1, spare, to, from, moves);
}

function task9(event) {
    event.preventDefault();

    let n = num("t9-n");

    if (!Number.isInteger(n) || n < 1 || n > 8)
        return show(9, "Введите число дисков от 1 до 8.");

    let moves = [];

    hanoi(n, "A", "C", "B", moves);

    show(9, `Количество ходов: ${moves.length}\n${moves.join("\n")}`);
}
