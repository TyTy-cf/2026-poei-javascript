import {Warrior, Rogue, Mage} from './class_exo.js';
import {fakerFR as faker} from '@faker-js/faker';

function ffa() {

// remplissage du tableau
    let fighters = []

    for (let i = 0; i < 150; i++) {
        let random = Math.floor(Math.random() * 3)
        switch (random) {
            case 0:
                fighters.push(new Warrior());
                break;
            case 1:
                fighters.push(new Rogue());
                break;
            case 2:
                fighters.push(new Mage());
                break;
        }
        fighters[i].name = faker.person.firstName() + " " + faker.person.lastName();
    }

// Print fighters in console
    for (const fighter of fighters) {
        //console.log(fighter.getNameConsole());
    }

// Fight !!

    while (fighters.length > 1) {
        for (const fighter of fighters) {
            // Pick random fighter
            let random;
            while (random !== null && fighter !== fighters[random]) {
                random = Math.floor(Math.random() * fighters.length);
            }

            // Fight the random fighter
            fighter.fight(fighters[random]);

            // verify hp
            if (fighters[random]._current_hp <= 0) {
                fighters.splice(random, 1);
            }
        }
    }

    console.log(
        `Winner is ${fighters[0].getNameConsole()}
    Level : ${fighters[0]._level}
    HP : ${fighters[0]._current_hp} / ${fighters[0]._max_hp}
    Mana : ${fighters[0]._current_mana} / ${fighters[0]._max_mana}
    Defense : ${fighters[0]._defense}
    Strength : ${fighters[0]._strength}
    Agility : ${fighters[0]._agility}
    Intelligence : ${fighters[0]._intelligence}`);

    return fighters[0]._role;

}

function duels() {

// remplissage du tableau
    let fighters = [new Rogue(), new Warrior()]

// Fight !!
    while (fighters.length > 1) {
        for (const fighter of fighters) {
            // Pick random fighter
            let random;
            while (random !== null && fighter !== fighters[random]) {
                random = Math.floor(Math.random() * fighters.length);
            }

            // Fight the random fighter
            fighter.fight(fighters[random]);

            // verify hp
            if (fighters[random]._current_hp <= 0) {
                fighters.splice(random, 1);
            }
        }
    }

    console.log(
        `Winner is ${fighters[0].getNameConsole()}
    Level : ${fighters[0]._level}
    Main stat : ${fighters[0].main_stat_value}
    HP : ${fighters[0]._current_hp} / ${fighters[0]._max_hp}
    Mana : ${fighters[0]._current_mana} / ${fighters[0]._max_mana}
    Defense : ${fighters[0]._defense}
    Strength : ${fighters[0]._strength}
    Agility : ${fighters[0]._agility}
    Intelligence : ${fighters[0]._intelligence}`);

    return fighters[0]._role;

}

let benchmark = {
    warrior: 0,
    rogue: 0,
    mage: 0
}

for (let i = 0; i < 100; i++) {
    switch (ffa()) {
        case "warrior":
            benchmark.warrior += 1;
            break;
        case "rogue":
            benchmark.rogue += 1;
            break;
        case "mage":
            benchmark.mage += 1;
            break;
    }
}

console.log(benchmark);