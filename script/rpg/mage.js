
class Mage extends Hero {

    constructor() {
        super(17, 12, 30, 2.2, 1.1, 4);
        this.malusDefense = 3;
        this.minDamage = 1.9 * this.intelligence;
        this.maxDamage = 2.1 * this.intelligence;
    }

}