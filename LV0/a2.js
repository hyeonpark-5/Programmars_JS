// 몫 구하기
function solution(num1, num2) {
    var answer = parseInt(num1 / num2);
    return answer;
}

// 두 수의 차 구하기
function solution(num1, num2) {
    var answer = num1 - num2;
    return answer;
}

//숫자 비교하기
function solution(num1, num2) {
    var answer = 0;
    if(num1 == num2){
        answer = 1;
    }
    else{
        answer = -1;
    }
    return answer;
}

// 나이 출력
function solution(age) {
    var answer = 2023 - age;
    return answer;
}

// 두 수의 나눗셈
function solution(num1, num2) {
    var answer = parseInt(num1 / num2 * 1000);
    return answer;
}

// 두 수의 곱 구하기
function solution(num1, num2) {
    var answer = num1 * num2;
    return answer;
}

// 두 수의 합 구하기
function solution(num1, num2) {
    var answer = num1 + num2;
    return answer;
}

// 각도기
function solution(angle) {
    var answer = 0;
    if(angle == 90){
        answer = 2;
    }
    else if(angle == 180){
        answer = 4;
    }
    else if(0 < angle && angle < 90){
        answer = 1;
    }
    else{
        answer = 3;
    }
    return answer;
}

// 양꼬치
function solution(n, k) {
    var answer = 0;
    var water = parseInt(n / 10)
    answer += (n * 12000) + (k * 2000) - (water * 2000)
    return answer;
}

// 짝수의 합
function solution(n) {
    var answer = 0;
    for(let i = 0; i <= n; i++){
        if(i % 2 == 0){
              answer += i;
        }  
    }
    return answer;
}

// 배열의 평균값
function solution(numbers) {
    var answer = 0;
    for(let i = 0; i < numbers.length; i++){
        answer += numbers[i]
    }
    return answer / numbers.length;
}

//배열 뒤집기
function solution(num_list) {
    var answer = [];
    for(const i of num_list){
        answer.unshift(i)
    }
    return answer;
}

//제곱수 판별하기
function solution(n) {
    var answer = 2;
    for(let i = 0; i <= 1000; i++){
        if ((i * i) > n){
            break;
        }
        if ((i * i) == n){
            answer = 1
        }
    }
    return answer;
}