
// Шаги для визуализации сортировки
let steps = [];
let stepIndex = 0;

function task1(event) {
    event.preventDefault();

    let text = document.getElementById("t1-array").value.trim();
    let a = text.split(/[\s,;]+/).map(Number);
    let result = document.getElementById("result1");

    if (!text || a.some(x => !Number.isFinite(x))) {
        result.textContent = "Введите числа через пробел.";
        result.classList.remove("is-ready");
        return;
    }

    steps = [{
        numbers: [...a],
        position: -1,
        sorted: 1,
        message: "Исходный массив"
    }];

    // Сортировка вставками
    for (let i = 1; i < a.length; i++) {
        let key = a[i];
        let j = i - 1;

        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            j--;
        }

        a[j + 1] = key;

        steps.push({
            numbers: [...a],
            position: j + 1,
            sorted: i + 1,
            message: `Вставили ${key} на позицию ${j + 2}`
        });
    }

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

        let height = max === min
            ? 90
            : 35 + (value - min) / (max - min) * 105;

        let type = i === step.position
            ? "bar--active"
            : i < step.sorted
                ? "bar--sorted"
                : "";

        html += `<div class="bar ${type}">
                     <span class="bar__number">${value}</span>
                     <div class="bar__column" style="height: ${height}px"></div>
                 </div>`;
    }

    document.getElementById("bars").innerHTML = html;

    document.getElementById("step-info").textContent =
        `Шаг ${stepIndex} из ${steps.length - 1}. ${step.message}`;

    document.getElementById("next-step").disabled =
        stepIndex === steps.length - 1;
}
