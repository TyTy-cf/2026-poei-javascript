export class Stats {
    // Private Fields
    static _STRENGTH = 0;
    static _AGILITY = 1;
    static _INTELLIGENCE = 2;

    // Accessors for "get" functions only (no "set" functions)
    static get STRENGTH() {
        return this._STRENGTH;
    }

    static get AGILITY() {
        return this._AGILITY;
    }

    static get INTELLIGENCE() {
        return this._INTELLIGENCE;
    }
}

export class Console_Colors {
    // Private Fields
    static _WHITE = 0;
    static _BLACK = 30;
    static _RED = 31;
    static _GREEN = 32;
    static _BLUE = 34;

    static getColor(color) {
        return '\x1b[' + color + 'm';
    }

    static get WHITE() {
        return this.getColor(this._WHITE);
    }

    static get BLACK() {
        return this.getColor(this._BLACK);
    }

    static get RED() {
        return this.getColor(this._RED);
    }

    static get GREEN() {
        return this.getColor(this._GREEN);
    }

    static get BLUE() {
        return this.getColor(this._BLUE);
    }
}