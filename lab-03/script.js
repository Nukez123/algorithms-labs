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
function task1(event) {
    event.preventDefault();
    let price = num("t1-price");
    if (price < 0) return show(1, "Цена не может быть отрицательной.");

    let result = "";
    for (let i = 1; i <= 10; i++) {
        let weight = i / 10;
        result += `${weight.toFixed(1)} кг — ${fmt(price * weight)} руб.\n`;
    }
    show(1, result);
}

// Задача 2
function task2(event) {
    event.preventDefault();
    let N = num("t2-n");
    let product = 1;

    for (let i = 1; i <= N; i++) {
        product *= 1 + i / 10;
    }
    show(2, `Произведение = ${fmt(product)}`);
}

// Задача 3
function task3(event) {
    event.preventDefault();
    let N = num("t3-n");
    let sum = 0;
    let result = "";

    for (let i = 1; i <= N; i++) {
        sum += 2 * i - 1;
        result += `После ${i}-го слагаемого: ${sum}\n`;
    }
    show(3, result);
}

// Задача 4
function task4(event) {
    event.preventDefault();
    let A = num("t4-a");
    let N = num("t4-n");
    let sum = 1;
    let power = 1;

    for (let i = 1; i <= N; i++) {
        power *= A;
        sum += power;
    }
    show(4, `Сумма = ${fmt(sum)}`);
}

// Задача 5
function task5(event) {
    event.preventDefault();
    let A = num("t5-a");
    let N = num("t5-n");
    let sum = 1;
    let power = 1;

    for (let i = 1; i <= N; i++) {
        power *= -A;
        sum += power;
    }
    show(5, `Результат = ${fmt(sum)}`);
}

// Задача 6
function task6(event) {
    event.preventDefault();
    let A = num("t6-a");
    let B = num("t6-b");
    if (A <= 0 || B <= A) return show(6, "Нужны целые числа: 0 < A < B.");

    let result = "";
    for (let i = A; i <= B; i++) {
        for (let j = 0; j < i; j++) {
            result += i + " ";
        }
        result += "\n";
    }
    show(6, result);
}

// Задача 7
function task7(event) {
    event.preventDefault();
    let A = num("t7-a");
    let B = num("t7-b");
    if (B <= 0 || A <= B) return show(7, "Нужно, чтобы A > B > 0.");

    while (A >= B) {
        A = Number((A - B).toPrecision(14));
    }
    show(7, `Незанятая часть = ${fmt(A)}`);
}

// Задача 8
function task8(event) {
    event.preventDefault();
    let N = num("t8-n");
    let K = 0;
    let sum = 0;

    while (sum < N) {
        K++;
        sum += K;
    }
    show(8, `K = ${K}\nСумма = ${sum}`);
}

// Задача 9
function task9(event) {
    event.preventDefault();
    let P = num("t9-p");
    if (P <= 0 || P >= 25) return show(9, "Процент должен быть больше 0 и меньше 25.");

    let S = 1000;
    let K = 0;
    while (S <= 1100) {
        S += S * P / 100;
        K++;
    }
    show(9, `Количество месяцев K = ${K}\nРазмер вклада S = ${fmt(S)} руб.`);
}

// Задача 10
function task10(event) {
    event.preventDefault();
    let A = num("t10-a");
    let B = num("t10-b");
    if (A <= 0 || B <= 0) return show(10, "Числа должны быть положительными.");

    while (B !== 0) {
        let rest = A % B;
        A = B;
        B = rest;
    }
    show(10, `НОД = ${A}`);
}
