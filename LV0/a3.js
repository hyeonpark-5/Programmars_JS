// 짝수 홀수 개수
function solution(num_list) {
    var even = 0;
    var odd = 0;
    for(const n of num_list){
        if(n % 2 == 0){
            even += 1;
        }
        else {
            odd += 1;
        }
    }
    return [even, odd];
}

// 특정 문자 제거하기
function solution(my_string, letter) {
    var answer = '';
    for(const s of my_string){
        if(s == letter){
            continue;
        }
        answer += s;
    }
    return answer;
}

//뒤집힌 문자열
function solution(my_string, letter) {
    var answer = '';
    for(const s of my_string){
        if(s == letter){
            continue;
        }
        answer += s;
    }
    return answer;
}

// 편지
function solution(message) {    
    return message.length * 2;
}

// 피자 나눠 먹기
function solution(n) {
    var answer = parseInt(n / 7)
    if (n % 7 != 0){
        answer += 1
    }
    return answer;
}

// 세균 증식
function solution(n, t) {
    var answer = n;
    for(let i = 1; i <= t; i++){
       answer *= 2;
    }
    
    return answer;
}