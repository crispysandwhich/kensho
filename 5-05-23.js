## Training Practice
## Primorial of a number

## Task - given a number find out a primorial and return it.

function numPrimorial(n){
  
  let numbers = []
  
  for(let i = 2; i <= 32 ; i++){
    let z = true
    for(let j = 2; j <= Math.sqrt(i); j++){
      if(i % j === 0 ){
        z = false
        break;
      }
    }
    if(z){
      numbers.push(i)
    }
  }
  
  let r = 1
  numbers.splice(n, numbers.length)

  for(let i = 0; i <= numbers.length - 1; i++){
    r *= numbers[i]
  }
  
  return r
}
