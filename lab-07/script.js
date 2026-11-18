
// Сохраняем шаги сортировки для визуализации
let steps = [];
let stepIndex = 0;

function task1(event) {
    event.preventDefault();

    let text = document.getElementById("t1-array").value.trim();
    let a = text.split(/[\s,;]+/).map(Number);
    let result = document.getElementById("result1");

    if (!text || a.some(x => !Number.isFinite(x))) {
        result.textContent = "Введите числа через пробел.";
        return;
    }

    steps = [{ numbers: [...a], pair: -1, message: "Исходный массив" }];

    // Пузырьковая сортировка: сравниваем соседние элементы
    for (let i = 0; i < a.length - 1; i++) {
        let swapped = false;

        for (let j = 0; j < a.length - i - 1; j++) {
            let left = a[j];
            let right = a[j + 1];
            let message;

            if (left > right) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                swapped = true;
                message = `${left} > ${right}: меняем местами`;
            } else {
                message = `${left} ≤ ${right}: не меняем`;
            }

            steps.push({
                numbers: [...a],
                pair: j,
                message: `Проход ${i + 1}. ${message}`
            });
        }

        if (!swapped) break;
    }

    steps.push({ numbers: [...a], pair: -1, message: "Сортировка завершена!" });
    stepIndex = 0;

    result.textContent = `Отсортированный массив: ${a.join(" ")}`;
    result.classList.add("is-ready");
    renderStep();
}

function nextStep() {
    if (stepIndex < steps.length - 1) {
        stepIndex++;
        renderStep();
    }
}

function renderStep() {
    let step = steps[stepIndex];
    let min = Math.min(...step.numbers);
    let max = Math.max(...step.numbers);
    let html = "";

    for (let i = 0; i < step.numbers.length; i++) {
        let value = step.numbers[i];
        let height = max === min ? 90 : 35 + (value - min) / (max - min) * 105;
        let active = i === step.pair || i === step.pair + 1;

        html += `<div class="bar ${active ? "bar--active" : ""}">
                     <span class="bar__number">${value}</span>
                     <div class="bar__column" style="height: ${height}px"></div>
                 </div>`;
    }

    document.getElementById("bars").innerHTML = html;
    document.getElementById("step-info").textContent =
        `Шаг ${stepIndex} из ${steps.length - 1}. ${step.message}`;
    document.getElementById("next-step").disabled = stepIndex === steps.length - 1;
}
