
class Piece {
    color;
    image;

    constructor(color, image) {
        this.color = color;
        this.image = image;
    }
}

class Rook extends Piece {
    constructor(color) {
        super(color, './images/chess/rook-'+color+'.png');
    }
}

class Knight extends Piece {
    constructor(color) {
        super(color, './images/chess/knight-'+color+'.png');
    }
}

class Bishop extends Piece {
    constructor(color) {
        super(color, './images/chess/bishop-'+color+'.png');
    }
}

class Queen extends Piece {
    constructor(color) {
        super(color, './images/chess/queen-'+color+'.png');
    }
}

class King extends Piece {
    constructor(color) {
        super(color, './images/chess/king-'+color+'.png');
    }
}

class Pawn extends Piece {
    constructor(color) {
        super(color, './images/chess/pawn-'+color+'.png');
    }
}

class Cell {
    x;
    y;
    color;
    piece;

    constructor(x, y, color, piece) {
        this.x = x;
        this.y = y;
        color ? this.color = 'grey' : this.color = 'white';
        this.piece = piece;
    }
}

class ChessBoard {

    board = new Map();

    constructor() {
        let color = true;
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const cell = new Cell(i, j, color, undefined);
                if (j !== 7) {
                    color = !color;
                }
                this.board.set(i + '-' + j, cell);
            }
        }

        // Black pieces
        this.board.get('0-0').piece = new Rook('black');
        this.board.get('0-1').piece = new Knight('black');
        this.board.get('0-2').piece = new Bishop('black');
        this.board.get('0-3').piece = new Queen('black');
        this.board.get('0-4').piece = new King('black');
        this.board.get('0-5').piece = new Bishop('black');
        this.board.get('0-6').piece = new Knight('black');
        this.board.get('0-7').piece = new Rook('black');

        for (let col = 0; col < 8; col++) {
            this.board.get(`1-${col}`).piece = new Pawn('black');
        }

        // White pieces
        for (let col = 0; col < 8; col++) {
            this.board.get(`6-${col}`).piece = new Pawn('white');
        }

        this.board.get('7-0').piece = new Rook('white');
        this.board.get('7-1').piece = new Knight('white');
        this.board.get('7-2').piece = new Bishop('white');
        this.board.get('7-3').piece = new Queen('white');
        this.board.get('7-4').piece = new King('white');
        this.board.get('7-5').piece = new Bishop('white');
        this.board.get('7-6').piece = new Knight('white');
        this.board.get('7-7').piece = new Rook('white');

        console.log(this.board);
    }
}

const chessboard = new ChessBoard();
let lastSelectedCell;

function toggleCell(cellKey, cellColor) {
    const cell = document.querySelector('[data-cell=\"' + cellKey + '\"]');
    cell.classList.toggle("bg-" + cellColor);
    cell.classList.toggle("bg-warning");
}

function checkMove(currentCell, targetCell) {
    let authorized = true;
    if (targetCell.piece !== undefined && currentCell.piece.color === targetCell.piece.color)
    {
        authorized = false;
    }

    return authorized;
}

function movePiece(cellPosition, currentCell) {
    let targetCell = chessboard.board.get(cellPosition);

    console.log(checkMove(currentCell, targetCell));

    if (checkMove(currentCell, targetCell))
    {
        targetCell.piece = currentCell.piece;
        currentCell.piece = undefined;
        refreshBoard();
    } else {
        toggleCell(currentCell.x + "-" + currentCell.y, currentCell.color);
    }
    lastSelectedCell = undefined;
}

function selectCell(e) {
    console.log(e.currentTarget);
    const cellPosition = e.currentTarget.attributes["data-cell"].nodeValue;
    const selectedCell = chessboard.board.get(cellPosition);
    console.log(selectedCell);

    if (lastSelectedCell !== undefined)
    {
        movePiece(cellPosition, lastSelectedCell);
    } else {
        if (selectedCell.piece !== undefined) {
            console.log(selectedCell.piece);
            lastSelectedCell = selectedCell;
            toggleCell(selectedCell.x + "-" + selectedCell.y, selectedCell.color);
        }
    }

}

function refreshBoard() {
    const chessContainer = document.querySelector('.chessboard');
    if (!chessContainer) return;

    chessContainer.innerHTML = '';

    chessboard.board.forEach((cell, key) => {
        let row;
        cell.y === 0 ? row = document.createElement('div') : row = document.querySelector('.chessboard .row:last-of-type')
        row.classList.add('row');
        row.classList.add('column-gap-0');
        row.classList.add('justify-content-center');

        const div = document.createElement('div');
        div.classList.add('col-1');
        div.classList.add('p-0');
        div.setAttribute('data-cell', key)
        div.addEventListener('click', selectCell);
        cell.color === 'white' ? div.classList.add("bg-white") : div.classList.add("bg-secondary")

        const cbCell = document.createElement('div');
        cbCell.classList.add('ratio');
        cbCell.classList.add('ratio-1x1');
        const pieceDiv = document.createElement('div');
        pieceDiv.classList.add('d-flex');

        div.appendChild(cbCell);
        if (cell.piece !== undefined)
        {
            const piece = document.createElement('img');
            piece.src = cell.piece.image;
            piece.classList.add('w-75');
            piece.classList.add('h-75');
            piece.classList.add('m-auto');
            piece.classList.add('d-block');
            pieceDiv.appendChild(piece);
        }

        cbCell.appendChild(pieceDiv);
        row.appendChild(div);
        key.substring(key.length - 1) === '0' && chessContainer.appendChild(row);
    });
}

window.addEventListener('load', () => {
    refreshBoard();
});