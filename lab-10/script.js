
function task1(event) {
    event.preventDefault();

    let text = document.getElementById("t1-array").value.trim();
    let a = text.split(/[\s,;]+/).map(Number);
    let target = Number(document.getElementById("t1-target").value);
    let result = document.getElementById("result1");
    let steps = document.getElementById("steps");

    if (!text || a.some(x => !Number.isFinite(x))) {
        result.textContent = "Введите числа через пробел.";
        steps.textContent = "Исправь ввод и повтори поиск.";
        result.classList.remove("is-ready");
        steps.classList.remove("is-ready");
        return;
    }

    for (let i = 1; i < a.length; i++) {
        if (a[i] < a[i - 1]) {
            result.textContent = "Массив должен быть отсортирован по возрастанию.";
            steps.textContent = "Исправь порядок чисел и повтори поиск.";
            result.classList.remove("is-ready");
            steps.classList.remove("is-ready");
            return;
        }
    }

    let left = 0;
    let right = a.length - 1;
    let position = -1;
    let history = "";
    let step = 1;

    // Бинарный поиск
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        history += `Шаг ${step}: проверяем ${a[middle]} (позиция ${middle + 1}).\n`;

        if (a[middle] === target) {
            position = middle + 1;
            history += "Число найдено!\n";
            break;
        }

        if (a[middle] < target) {
            left = middle + 1;
            history += "Ищем в правой половине.\n\n";
        } else {
            right = middle - 1;
            history += "Ищем в левой половине.\n\n";
        }
        step++;
    }

    if (position === -1) history += "Поиск завершён: такого числа нет.";

    result.textContent = position === -1
        ? "Число не найдено."
        : `Число ${target} найдено. Позиция: ${position}`;

    steps.textContent = history;
    result.classList.add("is-ready");
    steps.classList.add("is-ready");
}
