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

const display = document.getElementsByClassName("display")
const buttons = document.querySelectorAll("button")

buttons.forEach()
