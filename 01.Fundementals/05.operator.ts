// function logMessage(value: any){
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);
// logMessage(false);

//유니온 타입
var seho: string | number | boolean;
function logMessage(value: string | number){
    if(typeof value === 'number'){
        value.toLocaleString();
    }
    if(typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);


interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person){
    someone.name
}