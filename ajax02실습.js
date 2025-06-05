// BMI 계산 API 명세서

// - 엔드포인트: `https://g7w66k5a56aizbvauh6njeca5e0ozwud.lambda-url.us-east-1.on.aws/`
// - HTTP Method: `GET`
// - Query Parameters
//     - `height`: 키 (cm 단위, 숫자형, 필수)
//     - `weight`: 몸무게 (kg 단위, 숫자형, 필수)
// - 쿼리스트링으로 전달된 `height`(cm), `weight`(kg)를 기반으로 BMI를 계산하고,
// BMI수치와 비만도를 응답하는 API

// 서버로부터 값 받고 화면에 표현하기

// - 인풋태그를 통해 키,몸무게 를 입력받는다
// - BMI 계산 버튼을 클릭하면, API 서버에 입력받은 키,몸무게를 전송한다.
// - 응답받은 데이터를 분석하여 화면에 표시한다.

function bodyInfo(){
    //height와 weight의 값을 h와 w를 변수로 설정하고 EL로 감싸준다.
    const h = document.querySelector("#h").value;
    const w = document.querySelector("#w").value;
    const url =`https://g7w66k5a56aizbvauh6njeca5e0ozwud.lambda-url.us-east-1.on.aws/?height=${h}&weight=${w}`;

    fetch(url)
        .then(async resp => {
            if(!resp.ok){//resp.status != 200
                const result = await resp.json();
                //await은 아무곳에서 사용할 수 없고 async함수에서만 사용 가능하므로 async함수로 지정해줘야함
                //동기적으로 만들어주기위해 사용 await과 같은 동기적인 처리 가능 [백그라운드처리]
                console.log(result);
                // resp.json()
                // .then (data => {
                //     console.log(data);
                // })
                throw new Error("어딘가 에러...");
            }
            return resp.jason();
        })
        .then((data) => {
            console.log("두번째 then");
            console.log(data);

        //값이 있으면 if문 통과 | 없으면 error
        // if(data.error){
        //     throw new Error("쿼리스트링 없음"); //에러객체 예외처리
        // }

        document.querySelector("#bmi").innerText = data.bmi;
        document.querySelector("#category").innerText = data.category;
    })
}