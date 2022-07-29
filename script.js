const add = function(x,y) {
	return x+y
};

const subtract = function(x,y) {
	return x-y
};

const sum = function(array) {
	result = 0
  for (const i of array) {
    result+=i
  }
  return result
}
  


const multiply = function(array) {
  result = 1
  for (const i of array) {
    result*=i
  }
  return result
};

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
