( ()=> {

// 1  Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны. 

const MoreLess = ( a,b ) => {

let result = null; 
    
    switch( true ) {

        case a < b :
        result = -1 
        break;
        
        case a > b : 
        result = 1;
        break;

        case a == b :
        result = 0
        break;

        default :
        result = "Isn't valid "
    }

   return result 
}

console.log("1,1 = ", MoreLess(1,1)  )
console.log("1,2 =", MoreLess(1,2))
console.log("3,2 = ", MoreLess(3,2) )
console.log("[],[] = ", MoreLess([],[]))

// Конец

// 2  Написать функцию, которая вычисляет факториал переданного ей числа.

const factorialOfNumber = (num) => {
let factorial = Array.from( {length:num},( x,index ) => index + 1 )
                     .reduce( ( a,b ) => a * b );


return `${num}! = ${factorial}` 

}                     
console.log("Факториал числа",factorialOfNumber(3));
console.log("Факториал числа",factorialOfNumber(4));

// Конец 


//  3 Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.


// 2 вариант, если не шаблонними строками   return "" + a + b + c
const mergeNumbers = (a = 1,b = 4 ,c = 9) => `${a}${b}${c}`
console.log("Задание 3",mergeNumbers())

// Конец

// 4 Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

const areOfRectangle = (length,width = null) => {

    let area = null;


    if( !(width == null) ){
    area =  length * width
        return `Площади прямоугольника: ${area}`
    } 
       
    return `Площадь квадрата: ${length ** 2}`  
}   

console.log(areOfRectangle(3,5))
console.log(areOfRectangle(2))  

//  Конец 

// 5 Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 


const checkPerfectNumber = num => {

    if( num % 2 ) return false 


    let divedersSum = 0

    for (let i = 1 ; i < num; i ++ ){
        divedersSum += (!( num % i )) ? i : 0
    }
    
    if ( divedersSum == num ) return true 
    
    return false
}   

const perfectNumbers = (start,end) => {

    let numbers = [];
    for( i = start ; i <= end; i++ )  {
        if(checkPerfectNumber(i)) numbers.push(i)
    }  
    
    return numbers.join(',')
} 
console.log( "Задание 6 ", perfectNumbers(2,30) );

//  Конец

  

  

// 7 Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

const showTime = (h=0,m=0,s=0) =>{
    if(isNaN(h+m+s)) return
    let outTime  = document.querySelector( '.outTime' ),
        hours    = ( "0" + Math.abs(h) ).slice(-2),
        minutes  = ( "0" + Math.abs(m) ).slice(-2),
        seconds  = ( "0" + Math.abs(s) ).slice(-2)

    outTime.innerHTML = `${hours}:${minutes}:${seconds}`  
}  
    
 showTime(12,-1,3)   
   
   


// 8 Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
const getSeconds = (h,m=0,s=0) => sec = (h * 3600) + (m * 60) + s
 console.log("Время в секундах ",getSeconds(12,20,20))


//  Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

const convertAtSeconds = sec => { 
    let hour    =  Math.floor( sec / 60 / 60 ),
    minutes     =  Math.floor( sec / 60 ) - ( hour * 60 ),
    seconds     =  sec % 60 

    return `${( "0" + hour ).slice(-2)}:${( "0" + minutes ).slice(-2)}:${( "0" + seconds ).slice(-2)}`
}
console.log("Секунды hh|mm|ss",convertAtSeconds(4000))

// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»


let time = [{
    h:12,
    m:10,
    s:15
},
{
    h:15,
    m:16,
    s:18
}]
const calcDateDifference = arr => {
    let tmp = []   
    arr.map((e,i)=> i < 1 ? tmp.push(getSeconds(e.h,e.m,e.s)) : tmp.push(getSeconds(e.h,e.m,e.s)))
    tmp = Math.abs(tmp.reduce((a,b)=> a - b))
    return convertAtSeconds(tmp)
    }
    console.log("Разница во времени",calcDateDifference(time))

})()

















