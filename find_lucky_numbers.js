

// function luckyNumbers(n) {
//     let arNumbers = [1,2,3,4,5,6,7,8,9,10]
//     let luckyNums = []
    
//     for (let i = 0; i < n; i++) {
//         let x = Math.floor(Math.random() * arNumbers.length);
//         luckyNums.push(arNumbers[x])
//         arNumbers.splice(x, 1)

//     }
//  return luckyNums
// }

// console.log(luckyNumbers(3))


function randomcolor(g) {
    let array = 'red blue green purple black white yellow'
    array = array.split(' ')
    let random = []

    for (let i = 0; i < g; i++) {
        let x = Math.floor(Math.random() * array.length)
        random.push(array[x])
        array.slice(x, 1)
    }
    return random
}

console.log(randomcolor(2))
