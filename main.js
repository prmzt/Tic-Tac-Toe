// Tic-Tac-Toe Game Logic
const canvas = document.getElementById("tic-tac-toe-board");
const ctx = canvas.getContext("2d");
const boardSize = 3;
const cellSize = canvas.width / boardSize;
let board = Array(boardSize).fill().map(() => Array(boardSize).fill(null));
let currentPlayer = "X";

canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / cellSize);
    const y = Math.floor((e.clientY - rect.top) / cellSize);

    if (!board[y][x]) {
        board[y][x] = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        drawBoard();
    }
});

function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 1; i < boardSize; i++) {
        ctx.beginPath();
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, canvas.height);
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(canvas.width, i * cellSize);
        ctx.stroke();
    }

    for (let y = 0; y < boardSize; y++) {
        for (let x = 0; x < boardSize; x++) {
            if (board[y][x]) {
                ctx.fillText(board[y][x], x * cellSize + cellSize / 3, y * cellSize + (2 * cellSize) / 3);
            }
        }
    }
}
drawBoard();

// Terminal Emulator
const terminal = new Terminal();
terminal.open(document.getElementById("terminal-container"));
terminal.write("Welcome to the terminal! Type your C code here.\r\n");

terminal.onData(data => {
    if (data.trim() === "run") {
        terminal.write("\r\nExecuting C code...\r\n");
        runCCode();
    } else {
        terminal.write(`You typed: ${data}\r\n`);
    }
});

// Mock function to execute C code (replace with WebAssembly logic later)
function runCCode() {
    terminal.write("C code executed successfully!\r\n");
}
