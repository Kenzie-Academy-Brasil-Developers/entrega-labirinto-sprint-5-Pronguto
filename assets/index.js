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
let coluna = 1;

const colunaDiv = document.querySelector("#coluna");
const linhaDiv = document.querySelector("#linha");

function criandoColuna(labirinto) {
    for (let i = 0; i < labirinto.length; i++) {
        let j = 0;
        const labirintite = document.createElement("div");
        // labirintite.classList = `linha ${i + 1}`;
        labirintite.classList = "parede";
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
                        labirintite.classList = "parede";
                    }else if (labirinto[i][j] === "S"){
                        labirintite.classList = "start";
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
document.addEventListener("keydown", (event) => {
    const keypress = event.key;
    if (keypress == "ArrowRight") {
        if (map[linha][coluna + 1] === " ") {
            // move pra direita
            console.log("oi")
            coluna++;
        }
    } else if (keypress == "ArrowLeft") {
        if (map[linha][coluna - 1] === " ") {
            console.log("oi")
            // move pra esquerda
            coluna--;
        }
    } else if (keypress == "ArrowUp") {
        if (map[linha - 1][coluna] === " ") {
            console.log("oi")
            // move pra cima
            linha--;
        }
    } else if (keypress == "ArrowDown") {
        if (map[linha + 1][coluna] === " ") {
            console.log("oi")
            // move pra baixo
            linha++;
        }
    }

});
