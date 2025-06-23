// 직각삼각형 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for(let i = 1; i < Number(input[0]) + 1; i++) console.log('*'.repeat(i));
});

// 개미 군단
function solution(hp) {
    var answer = 0;
    for(const p of [5, 3, 1]){
        if(hp < 0){
            break
        }
        answer += Math.floor(hp / p)
        hp %= p;
    }
    return answer;
}

//가위 바위 보
function solution(rsp) {
    let dict = {'2':'0', '0':'5', '5':'2'}
    var answer = '';
    for(const s of rsp){
        answer += dict[s]   
    }    
    return answer;
}

// 주사위의 개수
function solution(box, n) {
    var answer = 1;
    for(let i = 0; i < 3; i++){
        answer *= Math.floor(box[i] / n)
    }
    return answer;
}

// 문자열 정렬하기
function solution(my_string) {
    var answer = [];
    for(const s of my_string){
        if(!isNaN(s)){
            answer.push(Number(s));
        }
    }
    answer.sort((a, b) => (a - b));
    return answer;
}

// 숨어있는 숫자의 덧셈(1)
function solution(my_string) {
    var answer = 0;
    for(const s of my_string){
        if(!isNaN(s)){
            answer += Number(s);
        }
    }
    return answer;
}

// 최댓값 만들기(2)
function solution(numbers) {
    var answer = 0
    var answer2 = 0
    numbers.sort((a, b) => (b - a));
    answer = numbers[0] * numbers[1];
    answer2 = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    if(answer > answer2){
        return answer;
    }
    
    return answer2;
}

//암호 해독
function solution(cipher, code) {
    var answer = '';
    for(let i = 1; i < cipher.length + 1; i++){
        if (i % code == 0){
            answer += cipher[i - 1];
        }
    }
    

    return answer;
}
