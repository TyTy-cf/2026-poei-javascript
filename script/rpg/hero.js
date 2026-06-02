
class Hero {

    strength;
    agility;
    intelligence;

    currentHp;
    maxHp;

    // 0 = strength, 1 = agility, 2 = intelligence
    primaryStats;

    constructor(strength, agility, intelligence, primaryStats) {
        this.strength = strength;
        this.agility = agility;
        this.intelligence = intelligence;
        this.primaryStats = primaryStats;

        this.maxHp = this.strength * 25;
        this.currentHp = this.maxHp;

        if (this.primaryStats === 0) {
            // define damages based on strength
        }

        if (this.primaryStats === 1) {
            // define damages based on agility
        }

        if (this.primaryStats === 2) {
            // define damages based on intelligence
        }
    }

}