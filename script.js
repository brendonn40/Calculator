const add = (x,y) => x+y
const subtract =(x,y) => x-y
const divide = (x,y) => x/y
const mdivtiply =(x,y) => x*y

const operate = function(operator,x,y) {
    if(operator === "+"){
        return add(x,y)
    }
    if(operator === "-"){
        return subtract(x,y)
    }
    if(operator === "*"){
        return mdivtiply(x,y)
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

function createListeners(){
    buttons.forEach((button) => {
        button.addEventListener("click",function(e){
            e.stopPropagation()
            putThingsDisplay(button.id)
        })
    })
}

function putThingsDisplay(buttonId){
    display.innerText+=buttonId
}