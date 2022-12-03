//1
function returnMin(a,b){
    return a < b ? a : b;
}

//2
function pow(val, pow){
    return val**pow;
}

//3
function func(val1, val2, symbol){
    if(symbol=='+'){
        return +val1 + +val2;
    }
    else if(symbol=='-'){
        return val1 - val2;
    }
    else if(symbol=='*'){
        return val1 * val2;
    }
    else if(symbol=='/'){
        return val1 / val2;
    }
    else{
        return 0;
    }
}

//4
function isPrime(val){
    for (var i = 2; i <= val - 1; i++)  
            {  
                if (val % i == 0)  
                {  
                    return false;  
                }  
            }  
            if (i == val)  
            {  
                return true;  
            }  
            return false;  
}

//5
function multyTable(n){
    for(i = 2; i < 10; i++){
        console.log(`${i} * ${n} = ${i*n}`);
    }
}

//6
function remainder(val1, val2){
    let diference;
    while(val1 > val2){
        diference = val1 - val2
        val1 = diference;
    }
    return diference;
}

//7
function sum(){
    let sum = 0;
    for(i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

//8
function max(){
    let max = arguments[0];
    for(i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

//9
function showEvenOrNotEven(val1, val2, bool){
    for(i = val1; i < val2; i++){
        if(i%2===0 && bool === true){
            console.log(i);
        }

        if(i%2 !==0 && bool === false){
            console.log(i);
        }
    }
}

//10
function nextDate(day,month,year){
    if(day >= 1 && day <= 31 && month >=1 && month <= 12){
        if(day == 31 && month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10){
            day = 1;
            month++;
        }
        else if(day === 31 && month === 12){
            day = 1;
            month = 1;
            year++;
        }
        else if(day == 30 && month === 4 || month === 6 || month === 9 || month === 11){       
            day = 1;
            month++;
        }
        else if(day === 28 && leapYear(year)){
            day = 29;
        }
        else if(day === 29 && leapYear(year)){
            day = 1;
            month++;
        }
        else if(day === 28 && !leapYear(year)){
            day = 1;
            month++;
        }
        else{
            day++;
        }
        console.log(`${day}.${month}.${year}`);
    }
}

function leapYear(year){
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        return true;
    }
    return false;
}
//Recursions
//1
function factorial(n){
    if(n===1)
        return 1;
    return n * factorial(n-1);
}

//2
function numberArr(head, teil){
    if(head > teil){
        let tmp = head;
        head = teil;
        teil = tmp;
    }
    console.log(head);
    if(head < teil){
        numberArr(head+1, teil);
    }
}

function numberReverseArr(head, teil){ 
    if(head > teil){
        let tmp = head;
        head = teil;
        teil = tmp;
    }
    console.log(teil);
    if(head < teil){
        numberReverseArr(head, teil-1);
    }
}

//3
function numberReverse(n){ ///
    if(n <= 0) return;
    console.log(n % 10);
    numberReverse(n / 10 - n % 10 / 10);
}

//4
function sumRec(n, sum){
    if(n == 0) return sum;
    return sumRec(n / 10 - n % 10 / 10, sum + n % 10); //teil
}

function sumRec2(n){
    if(n == 0) return n;
    return n % 10 + sumRec2(n / 10 - n % 10 / 10 ); //non teil
}

//5
function bracketsRec(n){
    if (n==0) return ''
    return '(' + bracketsRec(n-1) + ')'
}