
class Rogue extends Hero {

    constructor() {
        super(17, 25, 17, 1.9, 3.6, 1.3);
        this.minDamage = 2.1 * this.agility;
        this.maxDamage = 2.4 * this.agility;
        this.criticalDamageRatio = 1.75;
        this.criticalChance = 20;
    }

}