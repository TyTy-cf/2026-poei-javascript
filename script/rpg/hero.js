
class Hero {

    strength;
    agility;
    intelligence;

    currentHp;
    maxHp;

    currentMana;
    maxMana;

    defense;

    minDamage;
    maxDamage;
    malusDefense = 0;

    criticalDamageRatio = 1.5;
    criticalChance = 15;

    level = 1;

    levelUpStrengthGain;
    levelUpAgilityGain;
    levelUpIntelligenceGain;

    constructor(strength, agility, intelligence, levelUpStrengthGain, levelUpAgilityGain, levelUpIntelligenceGain) {
        this.strength = strength;
        this.agility = agility;
        this.intelligence = intelligence;

        this.maxHp = this.strength * 25;
        this.currentHp = this.maxHp;

        this.maxMana = this.intelligence * 20;
        this.currentMana = this.maxMana;

        this.defense = Math.round(this.agility * 0.25);

        this.levelUpStrengthGain = levelUpStrengthGain;
        this.levelUpAgilityGain = levelUpAgilityGain;
        this.levelUpIntelligenceGain = levelUpIntelligenceGain;
    }

    isDead() {
        return this.currentHp <= 0;
    }

    levelUp() {
        this.level++;

        this.strength += this.levelUpStrengthGain;
        this.agility += this.levelUpAgilityGain;
        this.intelligence += this.levelUpIntelligenceGain;

        this.maxHp += this.levelUpStrengthGain * 25;
        this.currentHp += this.levelUpStrengthGain * 25;
    }

    randomBetween(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    /**
     * @param hero Hero
     */
    fight(hero) {
        let avgDamage = randomBetween(this.minDamage, this.maxDamage);
        const isCritical = randomBetween(0, 100) >= this.criticalChance;
        if (isCritical) {
            avgDamage *= this.criticalDamageRatio;
        }

        const defenseRating = (100 - hero.defense * 2) / 100;
        const damageDone = Math.round(avgDamage * defenseRating);
        hero.currentHp -= damageDone;

        if (hero.isDead()) {
            console.log("un hero est mort !");
        }
    }

}