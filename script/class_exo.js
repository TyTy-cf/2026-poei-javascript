import {Console_Colors, Stats} from './global_variables.mjs';

/**
 * Classe hero
 */

export class Hero {
    _name = "Hero";
    _role = "hero";
    _current_hp;
    _max_hp;
    _current_mana;
    _max_mana;

    _main_stat;

    _defense;

    _damage_modifier_min = 1.8;
    _damage_modifier_max = 2;
    _crit_damage_modifier = 1.5;
    _crit_chance = .15;
    _level = 1;

    _levelUpStrengthGain;
    _levelUpAgilityGain;
    _levelUpIntelligenceGain;

    _color = Console_Colors._WHITE;

    constructor(strength, agility, intelligence, mainStat, levelUpStrengthGain, levelUpAgilityGain, levelUpIntelligenceGain) {

        this._strength = strength;
        this._agility = agility;
        this._intelligence = intelligence;

        this._levelUpStrengthGain = levelUpStrengthGain;
        this._levelUpAgilityGain = levelUpAgilityGain;
        this._levelUpIntelligenceGain = levelUpIntelligenceGain;

        this.updateStats();
        this.fillHpMana();

        this._main_stat = mainStat;
    }

    set name(value) {
        this._name = value;
    }

    get damage_min() {
        return this._damage_modifier_min * this.main_stat_value;
    }

    get damage_max() {
        return this._damage_modifier_max * this.main_stat_value;
    }

    get defense() {
        return this._defense;
    }

    get main_stat_value() {
        let value;
        switch (this._main_stat)
        {
            case Stats.INTELLIGENCE:
                value = this._intelligence;
                break;
            case Stats.STRENGTH:
                value = this._strength;
                break;
            case Stats.AGILITY:
                value = this._agility;
                break;
        }
        return value;
    }

    nerfDefense(value){
        this._defense -= value;
    }

    fight(enemy) {
        let damage = (Math.random() * (this.damage_max - this.damage_min)) + this.damage_min;
        (this._crit_chance >= Math.random()) && (damage *= this._crit_damage_modifier);

        enemy.getHit(damage);

        //console.log(`${this.getNameConsole()} frappe ${enemy.getNameConsole()} pour ${Math.round(damage)} dégats`);

        (enemy._current_hp) <= 0 && this.levelUp();
    }

    getHit(damage) {
        //console.log("damage = " + damage);
        this._current_hp -= Math.round(damage * ((100 - this._defense * 2) / 100));
    }

    updateStats()
    {
        const oldMaxHp = this._max_hp;

        this._max_hp = 25 * this._strength;

        this._current_hp += this._max_hp - oldMaxHp;

        this._max_mana = 20 * this._intelligence;

        this._defense = 0.25 * this._agility;
    }

    fillHpMana() {
        this._current_hp = this._max_hp;
        this._current_mana = this._max_mana;
    }

    levelUp() {
        this._level ++;
        this._strength += this._levelUpStrengthGain;
        this._agility += this._levelUpAgilityGain;
        this._intelligence += this._levelUpIntelligenceGain;
        this.updateStats()
    }

    getNameConsole() {
        return this._color + this._name + '\x1b[0m';
    }
}

export class Warrior extends Hero {

    _base_defense = 1;
    _name = "Warrior";
    _color = Console_Colors.RED;

    constructor() {
        super(24, 13, 16, Stats.STRENGTH, 3.2, 1.3, 1.4);
        this._damage_modifier_min = 1.6;
        this._damage_modifier_max = 2;
        this._role = "warrior";
    }

    get defense() {
        return super.defense + this._base_defense;
    }
}

export class Rogue extends Hero {
    _name = "Rogue";
    _color = Console_Colors.BLUE;

    constructor() {
        super(17, 24, 17, Stats.AGILITY, 1.9, 3.6, 1.3);
        this._crit_chance = .20;
        this._crit_damage_modifier = 1.75;
        this._damage_modifier_min = 2.1;
        this._damage_modifier_max = 2.4;
        this._role = "rogue";
    }
}

export class Mage extends Hero {
    _name = "Mage";
    _color = Console_Colors.GREEN;

    constructor() {
        super(17, 12, 200, Stats.INTELLIGENCE, 2.2, 1.1, 4);
        this._damage_modifier_min = 1.9;
        this._damage_modifier_max = 2.1;
        this._role = "mage";
    }

    fight(enemy) {
        enemy.nerfDefense(3);
        super.fight(enemy);
        enemy.nerfDefense(-3);
    }
}