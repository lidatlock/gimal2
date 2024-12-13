const water = document.getElementById('water');
const object = document.getElementById('object');
let waterHeight = 0;
let interval;

// 물이 밀려오는 애니메이션 시작
function startWaterFlow() {
    water.style.left = '100%'; // 오른쪽에서 시작
    waterHeight = 0; // 물 높이 초기화
    interval = setInterval(() => {
        waterHeight += 2; // 물 높이 증가
        water.style.height = `${waterHeight}px`; // 물 높이 설정
        water.style.left = `${parseInt(water.style.left) - 2}px`; // 물이 왼쪽으로 이동

        // 물의 높이가 오브젝트에 닿으면 오브젝트를 띄우기
        if (waterHeight >= 50) { // 물 높이 기준 설정
            object.style.bottom = `${waterHeight - 50}px`; // 오브젝트 띄우기
        } else {
            object.style.bottom = '30px'; // 물이 아직 안 닿으면 오브젝트는 바닥에 고정
        }

        // 물이 화면을 넘어가면 애니메이션 종료
        if (parseInt(water.style.left) < -100) {
            clearInterval(interval);
        }
    }, 100); // 100ms 간격으로 애니메이션 진행
}

// 애니메이션 시작
startWaterFlow();
