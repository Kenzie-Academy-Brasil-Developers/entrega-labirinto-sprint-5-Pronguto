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
const is = [0];
const js = [0];
let linha = 9;
let coluna = 1;
document.addEventListener("keydown", (event) => {
    let count = 0;
    const keypress = event.key;
    if (keypress == "ArrowRight") {
        for (let i = linha; i < map.length; i++) {
            for (let j = coluna; j < map[i].length; j++) {
                if (map[i][j] === " " && map[i][j] != "W" && count == 0) {
                    // move pra direita
                    console.log(map[i][j]);
                    console.log(i, j)
                    console.log("pra direita")
                    count++;
                    coluna++;
                }
            }
        }
    } else if (keypress == "ArrowLeft") {
        for (let i = linha; i < map.length; i++) {
            for (let j = coluna; j <= map[i].length; j++) {
                if (map[i][j - 1] === " " && map[i][j - 1] != "W" && count == 0) {
                    // move pra esquerda
                    console.log(map[i][j - 1]);
                    console.log(i, j)
                    console.log("pra esquerda")
                    count++;
                    coluna--;
                }
            }
        }
    } else if (keypress == "ArrowUp") {
        if (map[linha][coluna] === " " && map[linha][coluna] != "W" && count == 0) {
            // move pra cima
            console.log(map[linha][coluna]);
            console.log(linha, coluna)
            console.log("pra cima");
            count++;
            linha--;
        }
    } else if (keypress == "ArrowDown") {
        if (map[linha][coluna] === " " && map[linha][coluna] != "W" && count == 0) {
            // move pra baixo
            console.log(map[linha + 1][coluna]);
            console.log(linha, coluna)
            console.log("pra baixo");
            count++;
            linha++;
        }
    }

});
