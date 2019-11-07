// 請完成calc function裡面的內容
// 題目說明: 請完成簡易的加減乘除運算，輸入一串數學式子，請輸出運算後的答案
// 輸入說明: 輸入一串數學式子的字串
// 輸出說明: 請直接console.log出答案
// 提示: String.includes, String.split


//let calc = function (calcString: string) {
//    for (let i = 1; i < ; i++) {       
//        for (let j = 1; j < 10; j++) {                    
//            console.log(`${i} X ${j} = ${i * j}`);    
//        }   
//    }
//}
//calc('8*2')
//calc('1+1')
//calc('5/5')
//calc('9-1')

let a = function (a: number, b: number) {   
    for (let i = 1; i <= a; i++) {       
        for (let j = 1; j <= b; j++) {           
            console.log(i + ' X ' + j + ' = ' + i * j);           
            // console.log(`${i} X ${j} = ${i * j}`); // ES6 語法       
        }   
    }   
}

a(8,2)
//a('1+1')
//a('5/5')
//a('9-1')

let c = function (a: number, b: number) {   
    for (let i = 1; i <= a; i++) {       
        for (let j = 1; j <= b; j++) {                    
            console.log(`${i} + ${j} = ${i + j}`); // ES6 語法       
        }   
    }   
}

//a(8,2)
c(1,1)
//a('5/5')
//a('9-1')

let d =function (a: number, b: number) {   
    for (let i = 1; i <= a; i++) {       
        for (let j = 1; j <= b; j++) {                    
            console.log(`${i} / ${j} = ${i / j}`); // ES6 語法       
        }   
    }   
}

//a(8,2)
//c(1,1)
d(5,5)
//a('9-1')

let e =function (a: number, b: number)  {   
    for (let i = 1; i <= a; i++) {       
        for (let j = 1; j <= b; j++) {                    
            console.log(`${i} - ${j} = ${i - j}`); // ES6 語法       
        }   
    }   
}

//a(8,2)
//c(1,1)
//d(5,5)
e(9,1)