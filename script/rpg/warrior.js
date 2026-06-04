
class Warrior extends Hero {

    constructor() {
        super(23, 13, 16, 2.9, 1.2, 1.4);
        this.minDamage = 1.7 * this.strength;
        this.maxDamage = 2.1 * this.strength;
        this.defense += 1;
    }

}