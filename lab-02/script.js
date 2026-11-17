
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
    let A = num("t1-A");
    let B = num("t1-B");

    if (A === B) {
        A = 0;
        B = 0;
    } else {
        let max = Math.max(A, B);
        A = max;
        B = max;
    }

    show(1, `A = ${A}\nB = ${B}`);
}

// Задача 2
function task2(event) {
    event.preventDefault();
    let a = num("t2-a");
    let b = num("t2-b");
    let c = num("t2-c");

    let sum = a + b + c - Math.min(a, b, c);
    show(2, `Сумма двух наибольших = ${fmt(sum)}`);
}

// Задача 3
function task3(event) {
    event.preventDefault();
    let ax = num("t3-ax");
    let ay = num("t3-ay");
    let bx = num("t3-bx");
    let by = num("t3-by");
    let cx = num("t3-cx");
    let cy = num("t3-cy");

    let AB = Math.sqrt((bx - ax) ** 2 + (by - ay) ** 2);
    let AC = Math.sqrt((cx - ax) ** 2 + (cy - ay) ** 2);

    if (AB <= AC) {
        show(3, `Ближе точка B (${bx}, ${by})\nРасстояние = ${fmt(AB)}`);
    } else {
        show(3, `Ближе точка C (${cx}, ${cy})\nРасстояние = ${fmt(AC)}`);
    }
}

// Задача 4
function task4(event) {
    event.preventDefault();
    let x = num("t4-x");
    let y = num("t4-y");

    if (x === 0 || y === 0) {
        return show(4, "Точка не должна лежать на осях координат.");
    }

    let quarter;
    if (x > 0 && y > 0) quarter = 1;
    else if (x < 0 && y > 0) quarter = 2;
    else if (x < 0 && y < 0) quarter = 3;
    else quarter = 4;

    show(4, `Координатная четверть: ${quarter}`);
}

// Задача 5
function task5(event) {
    event.preventDefault();
    let n = num("t5-n");

    if (n === 0) return show(5, "нулевое число");

    let sign = n > 0 ? "положительное" : "отрицательное";
    let even = n % 2 === 0 ? "четное" : "нечетное";
    show(5, `${sign} ${even} число`);
}

// Задача 6
function task6(event) {
    event.preventDefault();
    let n = num("t6-n");
    if (n < 1 || n > 999) return show(6, "Введите число от 1 до 999.");

    let even = n % 2 === 0 ? "четное" : "нечетное";
    let digits = n < 10 ? "однозначное" : n < 100 ? "двузначное" : "трехзначное";
    show(6, `${even} ${digits} число`);
}

// Задача 7
function task7(event) {
    event.preventDefault();
    let day = num("t7-day");
    let month = num("t7-month");

    if (day < 1 || day > 31 || month < 1 || month > 12) {
        return show(7, "День должен быть от 1 до 31, месяц — от 1 до 12.");
    }

    let days = [
        "первое", "второе", "третье", "четвертое", "пятое", "шестое", "седьмое",
        "восьмое", "девятое", "десятое", "одиннадцатое", "двенадцатое",
        "тринадцатое", "четырнадцатое", "пятнадцатое", "шестнадцатое",
        "семнадцатое", "восемнадцатое", "девятнадцатое", "двадцатое",
        "двадцать первое", "двадцать второе", "двадцать третье",
        "двадцать четвертое", "двадцать пятое", "двадцать шестое",
        "двадцать седьмое", "двадцать восьмое", "двадцать девятое",
        "тридцатое", "тридцать первое"
    ];
    let months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    show(7, `${days[day - 1]} ${months[month - 1]}`);
}

// Число словами (для задач 8 и 9)
function numberWords(n) {
    let ones = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
    let teens = ["десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
    let tens = ["", "", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
    let hundreds = ["", "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];

    let words = [hundreds[Math.floor(n / 100)]];
    let rest = n % 100;

    if (rest >= 10 && rest <= 19) {
        words.push(teens[rest - 10]);
    } else {
        words.push(tens[Math.floor(rest / 10)]);
        words.push(ones[rest % 10]);
    }

    return words.filter(Boolean).join(" ");
}

// Задача 8
function task8(event) {
    event.preventDefault();
    let n = num("t8-n");
    if (n < 10 || n > 40) return show(8, "Введите число от 10 до 40.");

    let words = numberWords(n);
    if (n === 21 || n === 31) words = words.replace("один", "одно");

    let name;
    if (n % 10 === 1 && n !== 11) name = "учебное задание";
    else if (n % 10 >= 2 && n % 10 <= 4 && (n < 12 || n > 14)) name = "учебных задания";
    else name = "учебных заданий";

    show(8, `${words} ${name}`);
}

// Задача 9
function task9(event) {
    event.preventDefault();
    let n = num("t9-n");
    if (n < 100 || n > 999) return show(9, "Введите число от 100 до 999.");

    show(9, numberWords(n));
}

// Задача 10
function task10(event) {
    event.preventDefault();
    let year = num("t10-year");
    if (year < 1) return show(10, "Введите положительный номер года.");

    let animals = [
        "крысы", "коровы", "тигра", "зайца", "дракона", "змеи",
        "лошади", "овцы", "обезьяны", "курицы", "собаки", "свиньи"
    ];
    let colors = ["зелен", "красн", "желт", "бел", "черн"];

    let offset = ((year - 1984) % 60 + 60) % 60;
    let animal = offset % 12;
    let color = Math.floor(offset / 12);
    let ending = (animal === 2 || animal === 3 || animal === 4) ? "ого" : "ой";

    show(10, `год ${colors[color] + ending} ${animals[animal]}`);
}
