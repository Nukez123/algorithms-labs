
// Добавляем число в бинарное дерево поиска
function insert(root, value) {
    if (root === null) return { value: value, left: null, right: null };

    if (value < root.value) {
        root.left = insert(root.left, value);
    } else {
        root.right = insert(root.right, value);
    }
    return root;
}

// Симметричный обход: левое поддерево, корень, правое
function inorder(root, result) {
    if (root === null) return;
    inorder(root.left, result);
    result.push(root.value);
    inorder(root.right, result);
}

// Прямой обход: корень, левое поддерево, правое
function preorder(root, result) {
    if (root === null) return;
    result.push(root.value);
    preorder(root.left, result);
    preorder(root.right, result);
}

// Обратный обход: левое поддерево, правое, корень
function postorder(root, result) {
    if (root === null) return;
    postorder(root.left, result);
    postorder(root.right, result);
    result.push(root.value);
}

// Поуровневый обход: используем очередь
function levelOrder(root) {
    let queue = [root];
    let levels = [];

    while (queue.length > 0) {
        let size = queue.length;
        let level = [];

        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.value);
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
        levels.push(level);
    }
    return levels;
}

function task1(event) {
    event.preventDefault();

    let text = document.getElementById("t1-array").value.trim();
    let numbers = text.split(/[\s,;]+/).map(Number);
    let result = document.getElementById("result1");
    let levelsOutput = document.getElementById("levels");

    if (!text || numbers.some(x => !Number.isSafeInteger(x)) || numbers.length > 250) {
        result.textContent = "Введите не более 250 целых чисел через пробел.";
        result.classList.remove("is-ready");
        levelsOutput.textContent = "Исправь ввод и повтори обход.";
        levelsOutput.classList.remove("is-ready");
        return;
    }

    let root = null;
    for (let number of numbers) {
        root = insert(root, number);
    }

    let a = [], b = [], c = [];
    inorder(root, a);
    preorder(root, b);
    postorder(root, c);
    let levels = levelOrder(root);

    result.textContent = `Симметричный (Inorder): ${a.join(" ")}\n` +
                         `Прямой (Preorder): ${b.join(" ")}\n` +
                         `Обратный (Postorder): ${c.join(" ")}\n` +
                         `Поуровневый (BFS): ${levels.flat().join(" ")}`;
    result.classList.add("is-ready");

    levelsOutput.textContent = levels.map((level, i) =>
        `Уровень ${i}: ${level.join(" ")}`
    ).join("\n");
    levelsOutput.classList.add("is-ready");
}
