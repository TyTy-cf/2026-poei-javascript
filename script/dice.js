window.addEventListener('load', () => {
gigaLancer();
})

function diceOnLoad(){
    let numDice = Math.floor(Math.random() * 6) + 1;
    const div = document.querySelector("div");
    const dice = document.createElement("img");
    if (div){
        div.appendChild(dice);
        dice.src = "./images/dice/" + numDice + ".webp";
        dice.classList.add("img-fluid");
    }
}

function diceOnButton(){
    const div = document.querySelector("div");
    const diceButt = document.createElement("button");
    // const diceImg = document.createElement("img")
    const diceImg = document.querySelector("img");
    diceButt.classList.add("p-4");
  div.appendChild(diceButt);
  div.appendChild(diceImg);
    diceButt.addEventListener('click', () => {
            if(div) {

                let numDice = Math.floor(Math.random() * 6) + 1;
                diceImg.src = "./images/dice/" + numDice + ".webp";

            }
         })}


function gigaLancer(){
    for (let i = 0; i < 5; i++){
        diceOnLoad();
    }
    const div = document.querySelector("div");
    const diceButt = document.createElement("button");
    // const diceImg = document.createElement("img")
    const diceImg = document.querySelectorAll("img");
    console.log(diceImg);
    diceButt.classList.add("p-4");
    div.appendChild(diceButt);

    diceButt.addEventListener('click', () => {
        if(div) {
            for (let i = 0; i<5;i++) {
                let numDice = Math.floor(Math.random() * 6) + 1;
                diceImg[i].src = "./images/dice/" + numDice + ".webp";
            }
        }
    })
}