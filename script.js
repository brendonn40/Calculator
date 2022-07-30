const display = document.getElementById("display")
const buttons = document.querySelectorAll("button")

let number1 = null
let number2 = null
let operator = ""


createListeners()


function createListeners(){
    buttons.forEach((button) => {
        button.addEventListener("click",function(e){
            e.stopPropagation()
            if(button.id === "clear"){
                display.innerText=""
                number1 = null
                number2 = null
                operator = ""

            }else{
                divideOperations(button)
                if(operator === "="){
                    operator= ""
                }else{
                    putThingsDisplay(button.id)
                }
            }
            
        })
    })
}

function putThingsDisplay(buttonId){
    display.innerText+=buttonId
}
function divideOperations(button){
    if(button.classList.contains("operator")){
        if(number1 === null){
            number1 = parseInt(display.textContent)
            operator= button.id
    }else if(parseInt(display.textContent.split(operator)[1]) !== 0 && operator !== ""){
            number2 = parseInt(display.textContent.split(operator)[1])
    }else{
        number2 = null
        operator=button.id
    }
    }
    if(number2 !== null){
        number1 = operate(operator,number1,number2)
        number2 = null
        operator = button.id
        display.innerText= ""
        putThingsDisplay(number1)
    }
}


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
