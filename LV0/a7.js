// 대문자와 소문자

function solution(my_string) {
    var answer = '';
    for(const s of my_string){
        if(s == s.toUpperCase()){
            answer += s.toLowerCase();
        }
        else{
            answer += s.toUpperCase();
        }
    }
    return answer;
}

// 인덱스 바꾸기
function solution(my_string, num1, num2) {
    var answer = '';
    for(let i = 0; i < my_string.length; i++){
        if(i == num1){
            answer += my_string[num2]; 
        }
        else if(i == num2){
            answer += my_string[num1];
        }
        else{
            answer += my_string[i];
        }
    }
    return answer;
}

// 약수 구하기
function solution(n) {
    var answer = [];
   
    for(let i = 1; i < Math.sqrt(n) + 1; i++){
        if(n % i == 0){
            answer.push(i);
            if (i < parseInt(n / i)){
            answer.push(parseInt(n / i));
            }
        }

    }
    answer.sort((a, b) => (a - b))
    return answer;
}

// 가장 큰 수 찾기
function solution(array) {
    var maxx = Math.max(...array);
    var answer = [maxx, array.indexOf(maxx)];
    return answer;
}

//문자열 정렬하기(2)
function solution(my_string) {
    var s = my_string.toLowerCase();
    var answer = [...s];
    answer.sort();
    return answer.join('');
}

// 숫자 찾기
function solution(num, k) {
    var answer = 1;
    var str = String(num);
    var array = [...str];
    for(a of array){
        if(a == k){
            break;
        }
        answer += 1;
    }
    if(answer > array.length){
        answer = -1;
    }
    return answer;
}