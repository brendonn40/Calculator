const add = (x,y) => x+y
const subtract =(x,y) => x-y
const divide = (x,y) => x/y
const multiply =(x,y) => x*y

const operate = function(operator,x,y) {
    if(operator === "+"){
        return add(x,y)
    }
    if(operator === "-"){
        return subtract(x,y)
    }
    if(operator === "*"){
        return multiply(x,y)
    }
    if(operator === "/"){
        return divide(x,y)
    }
}

const power = function(b,e) {
	return b ** e
};

const factorial = function(number) {
	if(number === 0 ){
    return 1
  }
  else{
    return number * factorial(number -1)
  }
};

const display = document.getElementById("display")
const buttons = document.querySelectorAll("button")


createListeners()

let number1 = null
let number2 = null
function createListeners(){
    buttons.forEach((button) => {
        button.addEventListener("click",function(e){
            e.stopPropagation()
            if(button.classList.contains("operator")){
                if(number1 === null){
                    number1 = parseInt(display.textContent)
            }else{
                number2 = parseInt(display.textContent.split(button.id)[1])
            }
            }
            if(number2 !== null){
                number1 = operate(button.id,number1,number2)
                number2 = null
                display.innerText= ""
                putThingsDisplay(number1)
            }
            putThingsDisplay(button.id)
        })
    })
}

function putThingsDisplay(buttonId){
    display.innerText+=buttonId
}

