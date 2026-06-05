const pieces = new Map;
pieces.set('default', [8, 9, 10, 11, 12, 13, 14, 15, 48, 49, 50, 51, 52, 53, 54, 55]);
pieces.set('tower', [0, 7, 56, 63]);
pieces.set('horse', [1, 6, 57, 62]);
pieces.set('bishop', [2, 5, 58, 61]);
pieces.set('queen', [3, 59]);
pieces.set('king', [4, 60]);

class Cell {
    x;
    y;
    color;
    piece;

    constructor(pos) {
        this.x = x;
        this.y = y;
    }
}

class Piece {
    color;
    img;
}

class Pawn extends Piece {
    constructor(color) {
        super(color, `../images/pieces/pawn-${color}.png`)
    }
}

class Tower extends Piece {
    constructor(color) {
        super(color, `../images/pieces/tower-${color}.png`)
    }
}

class Knight extends Piece {
    constructor(color) {
        super(color, `../images/pieces/knight-${color}.png`)
    }
}

class Bishop extends Piece {
    constructor(color) {
        super(color, `../images/pieces/bishop-${color}.png`)
    }
}

class Queen extends Piece {
    constructor(color) {
        super(color, `../images/pieces/queen-${color}.png`)
    }
}

class King extends Piece {
    constructor(color) {
        super(color, `../images/pieces/king-${color}.png`)
    }
}

class ChessBoard {
    board = new Map;

    constructor() {
        let color = '#333';
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const cell = new Cell(i, j, color, undefined);
                if (j !== 7) {
                    color = !color;
                }
            }
        }
    }
}

window.addEventListener('load', () => {
    const chessContainer = document.querySelector('.chessboard');
    if (!chessContainer) return;

    const chessboard = new ChessBoard();
})