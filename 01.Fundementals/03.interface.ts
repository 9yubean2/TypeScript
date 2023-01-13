interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
let seho: User = {
    age: 33,
    name: '세호'
}

//함수에 인터페이스 활용 사용 빈도 ⬆️
function getUser(user: User) {
    console.log(user);
    
}

let capt = {
    name: '캡틴',
    age: 100
}

getUser(capt);

//함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

var sum: SumFunction;
sum = function(a: number, b: number) {
    return a+b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a','b','c'];
//arr[0] = 10; //Type 'number' is not assignable to type 'string'.

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
    // sth: /abc/,
    // cssFile: 'css' //Type 'string' is not assignable to type 'RegExp'.
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

//인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    language: string
}

var diaLee: Developer = {
    language: 'ts',
    name: '규빈', 
    age: 26
}