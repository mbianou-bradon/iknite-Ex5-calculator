class Calculator {
constructor (previousOperation, currentOperation){
this.previousOperation = previousOperation;
this.currentOperation = currentOperation;
}


delete() {

}

equal(){

}

appendNumber(numbers){

}

chooseOperation(operation)

updateResult(){

}

computation(){

}



}





const numbers = document.querySelectorAll('[data-number]')
const deleteButton = document.getElementById('delete')
const equal = document.getElementById('equal')
const operation = document.querySelectorAll('[data-operation]')
const previousOperation = document.querySelector('[previous-operation]')
const currentOperation= document.querySelector('[current-operation]')


numbers.addEventListener('click', ()=>{
     
})

deleteButton.addEventListener ('click', ()=> {

})

equal.addEventListener('click', ()=>{

})

operation.addEventListener('click', ()=>{
    let operant = operation.innerText;
})