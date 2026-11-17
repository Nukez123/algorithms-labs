
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

// Превращаем введённый текст в матрицу.
function getMatrix(id) {
    let text = document.getElementById(id).value.trim();
    if (!text) return null;

    let a = text.split("\n").map(row => row.trim()).filter(Boolean)
        .map(row => row.split(/\s+/).map(Number));

    if (a.some(row => row.length !== a[0].length || row.some(x => !Number.isFinite(x))))
        return null;

    return a;
}

// Выводим матрицу построчно.
function matrixText(a) {
    return a.map(row => row.join(" ")).join("\n");
}

// Задача 1
function task1(event) {
    event.preventDefault();
    let a = getMatrix("t1-matrix");

    if (!a || a.length !== a[0].length || a.length % 2 === 0)
        return show(1, "Нужна квадратная матрица нечётного размера.");

    let n = a.length;
    let result = [];

    for (let layer = 0; layer < Math.ceil(n / 2); layer++) {
        let last = n - 1 - layer;

        for (let i = layer; i <= last; i++)
            result.push(a[i][layer]);

        for (let j = layer + 1; j <= last; j++)
            result.push(a[last][j]);

        if (last > layer) {
            for (let i = last - 1; i >= layer; i--)
                result.push(a[i][last]);

            for (let j = last - 1; j > layer; j--)
                result.push(a[layer][j]);
        }
    }

    show(1, result.join(" "));
}

// Задача 2
function task2(event) {
    event.preventDefault();
    let a = getMatrix("t2-matrix");
    let K = num("t2-k");

    if (!a || !Number.isInteger(K) || K < 1 || K > a.length)
        return show(2, "Проверьте матрицу и номер строки K.");

    let sum = 0;
    let product = 1;

    for (let x of a[K - 1]) {
        sum += x;
        product *= x;
    }

    show(2, `Сумма = ${sum}\nПроизведение = ${product}`);
}

// Задача 3
function task3(event) {
    event.preventDefault();
    let a = getMatrix("t3-matrix");
    if (!a) return show(3, "Введите правильную матрицу.");

    let products = Array(a[0].length).fill(1);

    for (let row of a) {
        for (let j = 0; j < row.length; j++) {
            products[j] *= row[j];
        }
    }

    let min = Math.min(...products);

    show(3, `Номер столбца = ${products.indexOf(min) + 1}\nПроизведение = ${min}`);
}

// Задача 4
function task4(event) {
    event.preventDefault();
    let a = getMatrix("t4-matrix");
    if (!a) return show(4, "Введите правильную матрицу.");

    let result = [];

    for (let j = 0; j < a[0].length; j++) {
        let sum = 0;

        for (let i = 0; i < a.length; i++)
            sum += a[i][j];

        let average = sum / a.length;
        let count = 0;

        for (let i = 0; i < a.length; i++) {
            if (a[i][j] > average) count++;
        }

        result.push(`Столбец ${j + 1}: ${count}`);
    }

    show(4, result.join("\n"));
}

// Задача 5
function task5(event) {
    event.preventDefault();
    let a = getMatrix("t5-matrix");

    if (!a || a.some(row => row.some(x => !Number.isInteger(x))))
        return show(5, "Введите целочисленную матрицу.");

    let number = 0;

    for (let j = 0; j < a[0].length; j++) {
        if (a.every(row => row[j] % 2 !== 0)) {
            number = j + 1;
            break;
        }
    }

    show(5, `Номер столбца = ${number}`);
}

// Задача 6
function task6(event) {
    event.preventDefault();
    let a = getMatrix("t6-matrix");
    if (!a) return show(6, "Введите правильную матрицу.");

    for (let row of a) {
        let min = row.indexOf(Math.min(...row));
        let max = row.indexOf(Math.max(...row));

        [row[min], row[max]] = [row[max], row[min]];
    }

    show(6, matrixText(a));
}

// Задача 7
function task7(event) {
    event.preventDefault();
    let a = getMatrix("t7-matrix");
    if (!a) return show(7, "Введите правильную матрицу.");

    let min = a[0][0];
    let max = a[0][0];
    let minCol = 0;
    let maxCol = 0;

    for (let row of a) {
        for (let j = 0; j < row.length; j++) {
            if (row[j] < min) {
                min = row[j];
                minCol = j;
            }

            if (row[j] > max) {
                max = row[j];
                maxCol = j;
            }
        }
    }

    for (let row of a) {
        [row[minCol], row[maxCol]] = [row[maxCol], row[minCol]];
    }

    show(7, matrixText(a));
}

// Задача 8
function task8(event) {
    event.preventDefault();
    let a = getMatrix("t8-matrix");

    if (!a || a.length % 2 !== 0 || a[0].length % 2 !== 0)
        return show(8, "Количество строк и столбцов должно быть чётным.");

    let M = a.length / 2;
    let N = a[0].length / 2;

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            [a[i][j], a[i + M][j + N]] =
                [a[i + M][j + N], a[i][j]];
        }
    }

    show(8, matrixText(a));
}

// Задача 9
function task9(event) {
    event.preventDefault();
    let a = getMatrix("t9-matrix");
    if (!a) return show(9, "Введите правильную матрицу.");

    a.sort((row1, row2) => row1[0] - row2[0]);

    show(9, matrixText(a));
}

// Задача 10
function task10(event) {
    event.preventDefault();
    let a = getMatrix("t10-matrix");

    if (!a || a.length !== a[0].length)
        return show(10, "Нужна квадратная матрица.");

    let n = a.length;
    let sums = [];

    for (let start = n - 1; start >= 0; start--) {
        let sum = 0;

        for (let i = 0; i < n - start; i++) {
            sum += a[i][start + i];
        }

        sums.push(sum);
    }

    for (let start = 1; start < n; start++) {
        let sum = 0;

        for (let i = 0; i < n - start; i++) {
            sum += a[start + i][i];
        }

        sums.push(sum);
    }

    show(10, sums.join(" "));
}
