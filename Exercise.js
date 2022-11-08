class Exercise{
    stringLength(string) {
        const length = string.length;
        if(length > 0 && length < 10){
            return length;
        }else{
            throw 'error the string is lees then 1 or loger then 10';
        }
    }
    reverseString(string){
        return string.split('').reverse().join('');
    }

    add(num1 = 0, num2 = 0){
        return num1 + num2;
    }
    subtract(num1 = 0, num2 = 0){
        return num1 - num2;
    }
    divide(num1 = 1, num2 = 1){
        return num1 / num2;
    }
    multiply(num1 = 1, num2 = 1){
        return num1 * num2;
    }
    
    capitalize(string){
        string = string.split(' ');
        for(let i = 0; i < string.length; i++){
            string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
        }
        return string.join(' ');
    }
}

module.exports = Exercise;