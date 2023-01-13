// 함수의 파랔미터에 타입을 정의하는 방식
// function sum(a: number, b: number){
//     return a + b;
// }

// sum(10, 20);

//함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number{
    return a + b;
}

sum(10, 20);


//JS
// function sumJ(a, b){
//     return a + b;
// }
// sumJ(10,20,30,40) // 오류 발생 X : JS의 유연함

//함수의 옵셔널 파라미터 (?)
function log( a: string, b?: string){
}

log('hello world','hello ts');
log('hello world');