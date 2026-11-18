
// Очередь — обычный массив чисел
let queue = [];

function show(text) {
    let result = document.getElementById("result1");
    result.textContent = text;
    result.classList.add("is-ready");
}

// Показываем элементы очереди на странице
function renderQueue() {
    let view = document.getElementById("queue-values");

    view.innerHTML = queue.length
        ? queue.map(number => `<span class="queue-value">${number}</span>`).join("")
        : '<p class="queue-empty">Очередь пуста. Добавь первое число.</p>';

    document.getElementById("queue-count").textContent =
        `Элементов: ${queue.length}`;
}

// 1. Добавляем число в конец
function addNumber(event) {
    event.preventDefault();

    let input = document.getElementById("queue-input");
    let number = Number(input.value);

    if (!input.value.trim() || !Number.isFinite(number))
        return show("Введите корректное число.");

    queue.push(number);
    show(`Добавлено число: ${number}`);

    input.value = "";
    renderQueue();
}

// 2. Извлекаем первое число
function removeNumber() {
    if (queue.length === 0) return show("Очередь пуста!");

    let number = queue.shift();
    show(`Извлечено число: ${number}`);

    renderQueue();
}

// 3. Показываем очередь
function showQueue() {
    show(queue.length
        ? `Очередь: ${queue.join(" → ")}`
        : "Очередь пуста!");
}

// 4. Считаем сумму
function sumQueue() {
    if (queue.length === 0) return show("Очередь пуста!");

    let sum = 0;
    for (let number of queue) sum += number;

    show(`Сумма элементов: ${sum}`);
}

// 5. Находим среднее
function averageQueue() {
    if (queue.length === 0) return show("Очередь пуста!");

    let sum = 0;
    for (let number of queue) sum += number;

    show(`Среднее значение: ${(sum / queue.length).toFixed(2)}`);
}

// 6. Находим минимум
function minQueue() {
    if (queue.length === 0) return show("Очередь пуста!");

    show(`Минимальный элемент: ${Math.min(...queue)}`);
}

// 7. Находим максимум
function maxQueue() {
    if (queue.length === 0) return show("Очередь пуста!");

    show(`Максимальный элемент: ${Math.max(...queue)}`);
}
