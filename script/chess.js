
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
        color ? this.color = 'black' : this.color = 'white';
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

        console.log(this.board);
    }


}

window.addEventListener('load', () => {
    const chessContainer = document.querySelector('.chessboard');
    if (!chessContainer) return;

    const chessboard = new ChessBoard();
    chessboard.board.forEach((cell, key) => {

    });

});