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
                clearDisplay()
            }else{
                if(divideOperations(button)!== false){
                    if(operator === "="){
                        operator= ""
                    }else{
                        putThingsDisplay(button.id)
                }}
                else{
                    clearDisplay()
                }
            }
            
        })
    })
}
function clearDisplay(){
    display.innerText=""
    number1 = null
    number2 = null
    operator = ""
}

function putThingsDisplay(buttonId){
    display.innerText+=buttonId
}
function divideOperations(button){
    if(button.classList.contains("operator")){
        if(number1 === null){
            number1 = parseInt(display.textContent)
            operator= button.id
    }else if(display.textContent.split(operator)[1] !== "" && operator !== ""){
            number2 = parseInt(display.textContent.split(operator)[1])
    }else{
        number2 = null
        operator=button.id
    }
   }
    if(number2 !== null){
        if(operate(operator,number1,number2) !== false){
            number1 = operate(operator,number1,number2)
            number2 = null
            operator = button.id
            display.innerText= ""
            putThingsDisplay(number1)
        }else{
            return false
        }
    }
}


const add = (x,y) => x+y
const subtract =(x,y) => x-y
const divide = (x,y) => x/y
const multiply =(x,y) => x*y

function round(num){
    return Math.round((num + Number.EPSILON) * 100) / 100
}
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
        if(y !== 0 ){
            return round(divide(x,y))
        }
        else{
            alert("Divison by 0 error")
            return false
        }
    }
}
