// 문법 : fetch(요청URL [, OPTION]); 패치함수를 통해서 JS와 서버간 직접통신
/*
    개발자도구 network탭에서 확인가능
    Request URL 
    Request Method (GET)
    Status Code 

    비동기통신(ajax) : fetch, 제이쿼리...
    //promise
*/

const url="https://3wphap52cgoisea6bs2h26wss40nudgw.lambda-url.us-east-1.on.aws/";

// HTTP 요청을 보내기
fetch(url)
.then((resp)=>{
    return resp.json(); //데이터 읽기 
    // Stream 통해서 데이터를 text형식으로 읽기
    // promise객체를 return
})
.then( (data) => {
    console.log(data);
    // const memberVo = JSON.parse(data);
    // console.log(memberVo);
})
;


// fetch(url) 
// .then( ( r )=> { //response 객체
//     return r.text();
// } )
// .then((data) => {
//     console.log(data);
// });

// const p = new Promise(f01); // 할일 (함수명만 삽입)
// p.then( good );             // 다음 할일
// p.catch( bad );             // 실패 시 실행
//         // ok | fail
// function f01(a, b){
//     console.log("f01 called~~");
//     a(200);
//     // b(100);
// }

// function good(temp){
//     console.log("Good!!!");
//     console.log(temp);
// }

// function bad(temp){
//     console.log("Bad........");
//     console.log(temp);
// }