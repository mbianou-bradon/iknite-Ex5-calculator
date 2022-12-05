class Computation {

    constructor (previousOperation, currentOperation){
        this.previousOperation = previousOperation;
        this.currentOperation = currentOperation;
    }

  updateDisplay(value){
    if (previousOperation.innerText.includes('.')) return 
    previousOperation.innerText = previousOperation.innerText.toString() + value.toString()
   // currentOperation.innerText = currentOperation.innerText.toString() + value.toString()
  }

  delete(){
    previousOperation.innerText = previousOperation.innerText.slice(0, -1)
    //currentOperation.innerText = currentOperation.innerText.slice(0, -1)
    
  }

    
}



const numbers = document.querySelectorAll('[data-number]')
const deleteButton = document.getElementById('delete')
const equal = document.getElementById('equal')
const operation = document.querySelectorAll('[data-operation]')
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
