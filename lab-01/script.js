
// Читаем число из поля ввода.
function num(id) {
    return Number(document.getElementById(id).value);
}

// Показываем ответ прямо под кнопкой.
function show(n, text) {
    let output = document.getElementById("result" + n);
    output.textContent = text;
    output.classList.add("is-ready");
}

// Убираем длинные дробные части из результатов.
function fmt(value) {
    return Number(value.toFixed(6));
}

function task1(event) {
    event.preventDefault();
    let a = num("t1-a");
    let b = num("t1-b");
    if (a <= 0 || b <= 0) return show(1, "Стороны должны быть больше нуля.");

    let S = a * b;
    let P = 2 * (a + b);
    show(1, `Площадь S = ${fmt(S)}\nПериметр P = ${fmt(P)}`);
}

function task2(event) {
    event.preventDefault();
    let d = num("t2-d");
    if (d <= 0) return show(2, "Диаметр должен быть больше нуля.");

    let L = 3.14 * d;
    show(2, `Длина окружности L = ${fmt(L)}`);
}

function task3(event) {
    event.preventDefault();
    let a = num("t3-a");
    let b = num("t3-b");
    let result = (a + b) / 2;
    show(3, `Среднее арифметическое = ${fmt(result)}`);
}

function task4(event) {
    event.preventDefault();
    let a = num("t4-a");
    let b = num("t4-b");
    if (a === 0 || b === 0) return show(4, "Оба числа должны быть ненулевыми.");

    let a2 = a ** 2;
    let b2 = b ** 2;
    show(4, `Сумма = ${fmt(a2 + b2)}\nРазность = ${fmt(a2 - b2)}\nПроизведение = ${fmt(a2 * b2)}\nЧастное = ${fmt(a2 / b2)}`);
}

function task5(event) {
    event.preventDefault();
    let a = Math.abs(num("t5-a"));
    let b = Math.abs(num("t5-b"));
    if (a === 0 || b === 0) return show(5, "Оба числа должны быть ненулевыми.");

    show(5, `Сумма = ${fmt(a + b)}\nРазность = ${fmt(a - b)}\nПроизведение = ${fmt(a * b)}\nЧастное = ${fmt(a / b)}`);
}

function task6(event) {
    event.preventDefault();
    let x1 = num("t6-x1");
    let y1 = num("t6-y1");
    let x2 = num("t6-x2");
    let y2 = num("t6-y2");
    let d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    show(6, `Расстояние = ${fmt(d)}`);
}

function task7(event) {
    event.preventDefault();
    let A = num("t7-a");
    let B = num("t7-b");
    let C = num("t7-c");
    let AC = Math.abs(C - A);
    let BC = Math.abs(C - B);
    show(7, `AC = ${fmt(AC)}\nBC = ${fmt(BC)}\nСумма = ${fmt(AC + BC)}`);
}

function task8(event) {
    event.preventDefault();
    let A = num("t8-a");
    let B = num("t8-b");
    let C = num("t8-c");
    if (C < Math.min(A, B) || C > Math.max(A, B)) {
        return show(8, "Точка C должна находиться между A и B.");
    }
    let AC = Math.abs(C - A);
    let BC = Math.abs(C - B);
    show(8, `AC · BC = ${fmt(AC * BC)}`);
}

function task9(event) {
    event.preventDefault();
    let x1 = num("t9-x1");
    let y1 = num("t9-y1");
    let x2 = num("t9-x2");
    let y2 = num("t9-y2");
    let a = Math.abs(x2 - x1);
    let b = Math.abs(y2 - y1);
    let P = 2 * (a + b);
    let S = a * b;
    show(9, `Периметр P = ${fmt(P)}\nПлощадь S = ${fmt(S)}`);
}

function task10(event) {
    event.preventDefault();
    let x1 = num("t10-x1");
    let y1 = num("t10-y1");
    let x2 = num("t10-x2");
    let y2 = num("t10-y2");
    let x3 = num("t10-x3");
    let y3 = num("t10-y3");
    let a = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    let b = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2);
    let c = Math.sqrt((x1 - x3) ** 2 + (y1 - y3) ** 2);
    let P = a + b + c;
    let S = Math.abs((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1)) / 2;
    show(10, `Периметр P = ${fmt(P)}\nПлощадь S = ${fmt(S)}`);
}

function task11(event) {
    event.preventDefault();
    let x = num("t11-x");
    let y = 3 * x ** 6 - 6 * x ** 2 - 7;
    show(11, `y = ${fmt(y)}`);
}

function task12(event) {
    event.preventDefault();
    let x = num("t12-x");
    let t = x - 3;
    let y = 4 * t ** 6 - 7 * t ** 3 + 2;
    show(12, `y = ${fmt(y)}`);
}


