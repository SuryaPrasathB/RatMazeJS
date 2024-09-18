let level1 = [
    [1, 0, 1, 0],
    [1, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 0, 1, 1]
]

let level2 = [
    [1, 1, 1, 0, 1, 0],
    [1, 0, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 0],
    [1, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0],
    [1, 1, 1, 0, 1, 1]
]

let level3 = [
    [1, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 0, 0, 1]
]

let level4 = [
    [1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1]
];

let level5 = [
    [1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

let mazearray = level1;
let Level = document.getElementById("levelselect");
Level.addEventListener("change", function () {
    let level = Level.value;
    if (level == 1) {
        mazearray = level1;
    }
    else if (level == 2) {
        mazearray = level2;
    }
    else if (level == "3") {
        mazearray = level3;
    }
    else if (level == "4") {
        mazearray = level4;
    }
    else if (level == "5") {
        mazearray = level5;
    }
    maze.innerHTML =
        `<img src="rat.png" id="rat" width="50px" height="50px" alt="rat">
        <img src="food.png" id="food" width="50px" height="50px" alt="food">`
    createMaze();
});

let maze = document.getElementById("maze-container");
let rat = document.getElementById("rat");
let food = document.getElementById("food");

function setRatPostition(x, y) {
    rat.style.top = x + "px";
    rat.style.left = y + "px";
}

function setFoodPosition(x, y) {
    food.style.bottom = x + "px";
    food.style.right = y + "px";
}

function createMaze() {
    for (let i = 0; i < mazearray.length; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < mazearray[i].length; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");

            if (mazearray[i][j] == 0) {
                cell.classList.add("wall");
            }

            if (i == 0 && j == 0) {
                mazearray[i][j] = 2;
            }

            row.appendChild(cell);
        }
        maze.appendChild(row);
    }
}

function getRatPosition() {
    for (let i = 0; i < mazearray.length; i++) {
        for (let j = 0; j < mazearray[i].length; j++) {
            if (mazearray[i][j] == 2) {
                return [i, j];
            }
        }
    }
    return [0, 0]; // default position if rat is not found
}

document.addEventListener("keydown", function (e) {
    let rat = document.getElementById("rat");
    let food = document.getElementById("food");
    let ratLeft = rat.offsetLeft;
    let ratTop = rat.offsetTop;
    let foodLeft = food.offsetLeft;
    let foodTop = food.offsetTop;
    let ratPosition = getRatPosition();

    if (e.key == "ArrowRight"
        && ratLeft < (mazearray.length - 1) * 50
        && mazearray[ratPosition[0]][ratPosition[1] + 1] == 1) {
        ratLeft += 50;
        rat.style.left = ratLeft + "px";
        mazearray[ratPosition[0]][ratPosition[1]] = 1;
        mazearray[ratPosition[0]][ratPosition[1] + 1] = 2;
    }
    if (e.key == "ArrowLeft"
        && ratLeft > 0
        && mazearray[ratPosition[0]][ratPosition[1] - 1] == 1) {
        ratLeft -= 50;
        rat.style.left = ratLeft + "px";
        mazearray[ratPosition[0]][ratPosition[1]] = 1;
        mazearray[ratPosition[0]][ratPosition[1] - 1] = 2;
    }
    if (e.key == "ArrowUp"
        && ratTop > 0
        && mazearray[ratPosition[0] - 1][ratPosition[1]] == 1) {
        ratTop -= 50;
        rat.style.top = ratTop + "px";
        mazearray[ratPosition[0]][ratPosition[1]] = 1;
        mazearray[ratPosition[0] - 1][ratPosition[1]] = 2;
    }
    if (e.key == "ArrowDown"
        && ratTop < (mazearray.length - 1) * 50
        && mazearray[ratPosition[0] + 1][ratPosition[1]] == 1) {
        ratTop += 50;
        rat.style.top = ratTop + "px";
        mazearray[ratPosition[0]][ratPosition[1]] = 1;
        mazearray[ratPosition[0] + 1][ratPosition[1]] = 2;
    }

    if (ratLeft == foodLeft && ratTop == foodTop) {
        alert("YOU WIN!") ;
    }
})