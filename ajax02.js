// DB에 있는 Member 테이블 데이터 조회
// 아래 API 사용
// 요청 URL : https://3wphap52cgoisea6bs2h26wss40nudgw.lambda-url.us-east-1.on.aws/
// 응답은 JSON 형식
// 결과는 화면에 출력

const url01 = "https://3wphap52cgoisea6bs2h26wss40nudgw.lambda-url.us-east-1.on.aws/?nick=abc";

function loadMemberVo(){
    fetch(url01)
    //파라미터가 하나일때 | return만 할때 화살표 함수 생략해도 됨
    .then(resp => resp.json())
    .then( data =>{
        console.log(data.userId);
        console.log(data.userPwd);
        console.log(data.userNick);

        const h2userId = document.createElement('h2');
        h2userId.innerText = data.userId;

        const h2userPwd = document.createElement('h2');
        h2userPwd.innerText = data.userPwd;

        const h2userNick = document.createElement('h2');
        h2userNick.innerText = data.userNick;

        const body = document.querySelector("body");
        body.appendChild(h2userId);
        body.appendChild(h2userPwd);
        body.appendChild(h2userNick);
    });

    // fetch(url)
    // .then((resp)=>{
    //     return resp.text();
    // })
    // .then( (data)=>{
    //     const vo = JSON.parse(data);
    //     document.querySelector("#userId").innerHTML = vo.userId;
    //     document.querySelector("#userPwd").innerHTML = vo.userPwd;
    //     document.querySelector("#userNick").innerHTML = vo.userNick;
    // });

    // 쿼리스트링에 nick 추가하면, 닉네임 변경
    // -> 요청 url뒤에 쿼리스트링 직접 추가해보기 [~~/?nick=abc]
}

// DB에 있는 Board 테이블 데이터 조회
// 아래 API 사용
// 요청 URL : https://pngwdv4mvgmegshcyonpmu6b3e0trmpw.lambda-url.us-east-1.on.aws/?bno=1
// 응답은 JSON 형식
// 결과는 화면에 출력
const url02 = "https://pngwdv4mvgmegshcyonpmu6b3e0trmpw.lambda-url.us-east-1.on.aws/?bno=1"
function loadBoardVo(){
    fetch(url02)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
    })
}