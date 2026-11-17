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

// Читаем массив чисел, разделённых пробелами или запятыми.
function getArray(id) {
    let text = document.getElementById(id).value;
    return text.trim().split(/\s+/).map(Number);
}

// Задача 1
function task1(event) {
    event.preventDefault();
    let N = num("t1-n");
    let a = [];

    for (let i = 0; i < N; i++) a.push(2 * i + 1);

    show(1, a.join(" "));
}

// Задача 2
function task2(event) {
    event.preventDefault();
    let N = num("t2-n");
    let A = num("t2-a");
    let D = num("t2-d");
    let a = [];

    for (let i = 0; i < N; i++) {
        a.push(A);
        A *= D;
    }

    show(2, a.join(" "));
}

// Задача 3
function task3(event) {
    event.preventDefault();
    let N = num("t3-n");
    let A = num("t3-a");
    let B = num("t3-b");
    let a = [A, B];
    let sum = A + B;

    for (let i = 2; i < N; i++) {
        a.push(sum);
        sum += sum;
    }

    show(3, a.join(" "));
}

// Задача 4
function task4(event) {
    event.preventDefault();
    let a = getArray("t4-arr");
    if (!a) return show(4, "Введите массив чисел через пробел.");

    let result = [];
    let left = 0;
    let right = a.length - 1;

    while (left <= right) {
        result.push(a[left]);
        left++;
        if (left <= right) {
            result.push(a[right]);
            right--;
        }
    }

    show(4, result.join(" "));
}

// Задача 5
function task5(event) {
    event.preventDefault();
    let a = getArray("t5-arr");
    if (!a) return show(5, "Введите массив чисел через пробел.");

    let result = [];
    for (let i = 0; i < a.length; i += 2) result.push(a[i]);
    for (let i = a.length - 1; i >= 0; i--) {
        if (i % 2 === 1) result.push(a[i]);
    }

    show(5, result.join(" "));
}

// Задача 6
function task6(event) {
    event.preventDefault();
    let a = getArray("t6-arr");
    let K = num("t6-k");
    let L = num("t6-l");
    if (!a || K < 1 || L < K || L > a.length)
        return show(6, "Проверьте массив и номера K, L.");

    let sum = 0;
    for (let i = K - 1; i < L; i++) sum += a[i];

    show(6, `Среднее арифметическое = ${sum / (L - K + 1)}`);
}

// Задача 7
function task7(event) {
    event.preventDefault();
    let a = getArray("t7-arr");
    if (!a || a.length < 2 || a.some(x => !Number.isInteger(x)))
        return show(7, "Введите минимум два целых числа.");

    let d = a[1] - a[0];
    for (let i = 2; i < a.length; i++) {
        if (a[i] - a[i - 1] !== d) return show(7, "Разность = 0 (не прогрессия)");
    }

    show(7, `Разность = ${d}`);
}

// Задача 8
function task8(event) {
    event.preventDefault();
    let a = getArray("t8-arr");
    if (!a || a.length < 2) return show(8, "Нужно не меньше двух элементов.");

    let min = a[1];
    for (let i = 3; i < a.length; i += 2) {
        if (a[i] < min) min = a[i];
    }

    show(8, `Минимальный элемент = ${min}`);
}

// Задача 9
function task9(event) {
    event.preventDefault();
    let a = getArray("t9-arr");
    if (!a) return show(9, "Введите массив чисел через пробел.");

    let index = 0;
    for (let i = 0; i < a.length; i++) {
        if ((i === 0 || a[i] > a[i - 1]) &&
            (i === a.length - 1 || a[i] > a[i + 1])) {
            index = i + 1;
        }
    }

    show(9, `Номер последнего локального максимума = ${index}`);
}

// Задача 10
function task10(event) {
    event.preventDefault();
    let a = getArray("t10-arr");
    if (!a || a.some(x => !Number.isInteger(x)))
        return show(10, "Введите целые числа через пробел.");

    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j]) {
                return show(10, `Номера одинаковых элементов: ${i + 1} и ${j + 1}`);
            }
        }
    }

    show(10, "Одинаковые элементы не найдены.");
}
