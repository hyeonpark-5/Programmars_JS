// 순서쌍의 개수
function solution(n) {
    var answer = 0;
    for(let i = 1; i < n + 1; i++){
        for(let j = 1; j < n + 1; j++){
            if(i * j > n){
                break;
            }
            if(i * j == n){
                answer += 1;
            }
        }
    }
    return answer;
}

// n의 배수 고르기
function solution(n, numlist) {
    var answer = [];
    for(const num of numlist){
        if(num % n == 0){
            answer.push(num);
        }
    }
    return answer;
}

//배열 원소의 길이
function solution(strlist) {
    var answer = [];
    for(const s of strlist){
        answer.push(s.length);
    }
    return answer;
}

// 아이스 아메리카노
function solution(money) {
    var answer = [parseInt(money / 5500), money % 5500];
    return answer;
}

// 문자열안에 문자열
function solution(str1, str2) {
    if(str1.indexOf(str2) != -1){
        return 1
    }
    return 2;
}

// 문자 반복 출력하기
function solution(my_string, n) {
    var answer = '';
    for(const s of my_string){
        for(let i = 0; i < n; i++){
            answer += s;
        }
    }
    return answer;
}

//중복된 숫자 개수
function solution(array, n) {
    var answer = 0;
    for(const a of array){
        if(n == a){
            answer += 1;
        }
    }
    return answer;
}

// 배열 두배 만들기
function solution(numbers) {
    var answer = [];
    for(const num of numbers){
        answer.push(num * 2);
    }
    return answer;
}

// 중앙값 구하기
function solution(array) {
    const m = Math.floor(array.length / 2);
    array.sort((a, b) => (a - b));
    return array[m];
}

//짝수는 싫어요
function solution(n) {
    var answer = [];
    for(let i = 1; i < n + 1; i++){
        if(i % 2 != 0){
            answer.push(i);
        }
    }
    return answer;
}

// 옷가게 할인 받기
function solution(price) {
    if(price >= 500000){
        return Math.floor(price * 0.8);
    }
    else if(price >= 300000){
        return Math.floor(price * 0.9);
    }
    else if(price >= 100000){
        return Math.floor(price * 0.95);
    }
    else{
        return price
    }

}