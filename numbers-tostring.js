
function randomNumber(n) {
// let array = '1 2 3 4 5 6 7 8 9 10'
//     let ar = array.split(' ')
let numbers = ar.map(str => {
    return Number(str)
} )

let nums = []

for(let i = 0; i < n; i++) {
    
    let x = Math.floor(Math.random() * numbers.length);
    nums.push(numbers[x])
    numbers.splice(x, 1)  
   
}

return nums

}

console.log(randomNumber(3))
