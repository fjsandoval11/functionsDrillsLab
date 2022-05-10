let jonSnowHealth = 100

let boolVersion = Boolean(jonSnowHealth)

let theWinnerIs = 'jamie is the winner.'

let newWinner = theWinnerIs.replace('jamie', 'Jon Snow')

// if (newWinner.includes("Jon")){
//     console.log('replace jamie with jon inside of newWinner variable')
// }

console.log("NEW WINNER HERE:" ,newWinner)

let newWinnerLower = newWinner.toLowerCase()

console.log({newWinnerLower})

newWinner = newWinner.split(' ')
console.log(newWinner)

newWinner = newWinner.join('_')
console.log({newWinner})

function isJonAlive() {
    if (jonSnowHealth > 0) {
        console.log('jon is alive')
    } else {
        console.log('jon is dead')
    }
}

isJonAlive()

let supriseAttack = (damage) => {
    jonSnowHealth -= damage
    console.log(jonSnowHealth)
    isJonAlive()
}

supriseAttack(40)

supriseAttack(20)

let greeting = (person1, person2) => {
    console.log(`${person1} and ${person2} say hello to each other`)
}

greeting('freddy', 'tina')

let rollDice = () => {
    let possibleRolls = [1, 2, 3, 4, 5, 6]
    let randomRoll = Math.floor(Math.random() * possibleRolls.length)
    return possibleRolls[randomRoll]
}

let rollMultiplayer = () => {

    let sum = rollDice() * rollDice()

    console.log(sum)
}

rollMultiplayer()