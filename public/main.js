class Computation {

    constructor (previousOperation, currentOperation){
        this.previousOperation = previousOperation;
        this.currentOperation = currentOperation;
        this.clear()
    }

  clear(){
    previousOperation.innerText = '0'
    currentOperation.innerText = '0'
}

  updateDisplay(value){
   
    if (previousOperation.innerText === '0')
         previousOperation.innerText = value.toString()
    else 
    previousOperation.innerText = previousOperation.innerText.toString() + value.toString()
   // currentOperation.innerText = currentOperation.innerText.toString() + value.toString()

   
  }

  delete(){
    previousOperation.innerText = previousOperation.innerText.slice(0, -1)
    //currentOperation.innerText = currentOperation.innerText.slice(0, -1)
    
  }

  result(){
    let result = previousOperation.innerText.split('')
    let cleanResult = result.map(number => {
      // switch(number){
      //   case 'x':
      //     number === '*'
      //     break;
        
      //   case '÷':
      //     number === '/'
      //     break;

      //   case 'π':
      //     number === '3.14'
      //     break;

      //   case '^':
      //     number === '**('
      //     break;

      //   default:
      //     number === number
      //     break;
      // }
      
       if (number === 'x'){
         return '*'
       }
       if(number === '÷') return '/'
       if (number === '^') return '**'
       if (number === 'e') return '2.71828182'
        if (number=== 'π') return '3.14'
        else return number;    
        
    });
    result = cleanResult.join('')
    console.log(eval(result))
    currentOperation.innerText = eval(result)
  }
    
}



const numbers = document.querySelectorAll('[data-number]')
const operation = document.querySelectorAll('[data-operation]')
const bracket = document.querySelectorAll('[data-bracket]')
const specialOperation = document.querySelectorAll('[data-special-operation]')
const deleteButton = document.getElementById('delete')
const equal = document.getElementById('equal')
const clear = document.getElementById('clear')
const previousOperation = document.getElementById('previous-operation')
const currentOperation= document.getElementById('current-operation')


const computation = new Computation (previousOperation, currentOperation)


numbers.forEach(button => {

    button.addEventListener('click', ()=>{
        let value = button.innerText
        console.log(value);
        computation.updateDisplay(value);
    })

})



operation.forEach(button =>{

    button.addEventListener('click', ()=>{
     let  operant = button.innerText
     computation.updateDisplay(operant)
    })

})

deleteButton.addEventListener ('click', ()=> {
    computation.delete()
    //computation.updateDisplay()
})

equal.addEventListener('click', ()=>{
    computation.result()
})

clear.addEventListener('click', ()=>{
  computation.clear()
})

bracket.forEach(button => {
  button.addEventListener('click', ()=>{
    let brackets = button.innerText
    computation.updateDisplay(brackets)
  })
})

specialOperation.forEach(button => {
  button.addEventListener('click', ()=>{
    let special = button.innerText
    computation.updateDisplay(special)
  })
})
