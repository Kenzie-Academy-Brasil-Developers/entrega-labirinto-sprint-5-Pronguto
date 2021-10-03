const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];
let linha = 9;
let coluna = 0;
let playerTop = 455;
let playerLeft = 5;

const colunaDiv = document.querySelector("#coluna");
const linhaDiv = document.querySelector("#linha");
const main = document.querySelector("#main");
const victory = document.querySelector("#esconde");

function criandoColuna(labirinto) {
    for (let i = 0; i < labirinto.length; i++) {
        let j = 0;
        const labirintite = document.createElement("div");
        labirintite.classList.add("linha");
        colunaDiv.appendChild(labirintite);
        j++;
    }
}
function criandoLinha(labirinto) {
    const linha = document.querySelectorAll("#coluna>div");
    for (let i = 0; i < labirinto.length; i++) {
        let count = 0;
        for (let j = 0; j < labirinto[i].length; j++) {
            if (count === 0) {
                if (j < 21) {
                    const labirintite = document.createElement("div");
                    if (labirinto[i][j] === "W") {
                        labirintite.classList.add("parede");
                    } else if (labirinto[i][j] === "S") {
                        labirintite.classList.add("start");
                        linha[i].style.justifyContent = "flex-end"
                    } else if (labirinto[i][j] === "F") {
                        labirintite.classList.add("final");
                    }
                    linha[i].appendChild(labirintite);
                }
            }
        }
        count++;
    }
}

criandoColuna(map);
criandoLinha(map);

const player = document.querySelector(".start");
document.addEventListener("keydown", (event) => {
    const keypress = event.key;
    if (keypress == "ArrowRight") {
        if (map[linha][coluna + 1] === " " || map[linha][coluna + 1] === "F") {
            // move pra direita
            playerLeft += 50;
            player.style.left = playerLeft + "px";
            coluna++;
            vitoria();
        }
    } else if (keypress == "ArrowLeft") {
        if (map[linha][coluna - 1] === " " || map[linha][coluna + 1] === "F") {
            playerLeft -= 50;
            player.style.left = playerLeft + "px";
            coluna--;
            vitoria();
        }
    } else if (keypress == "ArrowUp") {
        if (map[linha - 1][coluna] === " " || map[linha][coluna + 1] === "F") {
            playerTop -= 50;
            player.style.top = playerTop + "px";
            linha--;
            vitoria();
        }
    } else if (keypress == "ArrowDown") {
        if (map[linha + 1][coluna] === " " || map[linha + 1][coluna] === "F") {
            playerTop += 50;
            player.style.top = playerTop + "px";
            linha++;
            vitoria();
        }
    }

});

function vitoria() {
    if (map[linha][coluna] === "F") {
        colunaDiv.classList.add("hidden");
        victory.classList.remove("hidden")
    }
}

const butaoreload = document.querySelector("button");
butaoreload.addEventListener("click", function () {
    document.location.reload();
});