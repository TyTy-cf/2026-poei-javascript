
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
    id;
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
        let color = false;
        let tmpId = 1;
        for (let i = 1; i <= 8; i++) {
            for (let j = 8; j > 0; j--) {
                const cell = new Cell(i, j, color, undefined);
                cell.id = tmpId;
                if (j !== 7) {
                    color = !color;
                }
                this.board.set(i + '-' + j, cell);
                tmpId++;
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