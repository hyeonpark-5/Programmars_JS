// 최댓값 만들기
function solution(numbers) {
    numbers.sort(function(a, b){return b - a;})
    return numbers[0] * numbers[1];
}

// 모음 제거
function solution(my_string) {
    var answer = '';
    const a = ['a', 'e', 'i', 'o', 'u']
    for(const s of my_string){
        if(a.includes(s)){
            continue;
        }
        answer += s;   
    }
    return answer;
}

//자릿수 더하기
function solution(n) {
    var answer = 0;
    while(n > 0){
        answer += n % 10;
        n = parseInt(n / 10);
    }
    return answer;
}

// 머쓱이보다 키 큰 사람
function solution(array, height) {
    var answer = 0;
    for(const p of array){
        if(p > height){
            answer += 1;
        }
    }
    return answer;
}

// 삼각형의 완성조건(1)
function solution(sides) {
  
    sides.sort((a, b) => (a - b));
    if((sides[0] + sides[1]) > sides[2]){
        return 1;      
    }
    return 2;
}

// 배열 자르기
function solution(numbers, num1, num2) {
    var answer = numbers.slice(num1, num2 + 1);
    return answer;
}

// 피자 나눠 먹기(3)
function solution(slice, n) {
    var answer = parseInt(n / slice);
    if(n % slice != 0){
        answer += 1;
    }
    return answer;
}

// 점의 위치 구하기
function solution(dot) {
    var x = dot[0];
    var y = dot[1];
    if(x > -1 && y > -1){
        return 1;
    }
    else if(x < 0 && y > -1){
        return 2;
    }
    else if(x < 0 && y < 0){
        return 3;
    }
    else{
        return 4;
    }

}

// 배열의 유사도
function solution(s1, s2) {
    var answer = 0;
    for(const s of s2){
        if(s1.includes(s)){
            answer += 1;
        }
    }
    return answer;
}