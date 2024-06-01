const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = Array(256).join(1).split('');
const fontSize = 30;  // Aumenta el tamaño de la fuente
const columns = canvas.width / fontSize;

const word = "Remote";
const wordColumn = Math.floor(columns / 2) - Math.floor(word.length / 2); // Centra horizontalmente
let wordPosition = 0;
let wordRow = Math.floor(canvas.height / fontSize / 2); // Centra verticalmente

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    letters.map((y, index) => {
        let text;
        if (index >= wordColumn && index < wordColumn + word.length && y === wordRow * fontSize) {
            text = word[index - wordColumn];
            wordPosition++;
            if (wordPosition >= word.length) {
                wordPosition = 0;
            }
        } else {
            text = String.fromCharCode(3e4 + Math.random() * 33);
        }
        const x = index * fontSize;
        ctx.fillText(text, x, y);
        letters[index] = y > canvas.height + Math.random() * 1e4 ? 0 : y + fontSize;
    });
}

setInterval(draw, 50);
