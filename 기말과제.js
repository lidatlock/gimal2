const draggableBox = document.getElementById("draggable");
const hiddenBox = document.querySelector(".hidden-box");

let isDragging = false;
let offsetX = 0;

// 초기 hiddenBox 설정
hiddenBox.style.display = "none";

// 드래그 시작
draggableBox.addEventListener("mousedown", (e) => {
    isDragging = true;
    const startX = e.clientX;

    // 마우스 이동 이벤트
    function onMouseMove(e) {
        if (isDragging) {
            offsetX = e.clientX - startX; // 드래그 이동 거리 계산

            if (offsetX < 0) { // 왼쪽으로만 드래그 허용
                draggableBox.style.transform = `translateX(${offsetX}px)`; // 이동
            }
        }
    }

    // 드래그 종료
    function onMouseUp() {
        isDragging = false;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);

        // 일정 거리 이상 드래그 시 hiddenBox 보이기
        if (offsetX < -150) { // 왼쪽으로 150px 이상 드래그 시
            hiddenBox.style.display = "block"; // hiddenBox 보이게 설정
        } else {
            draggableBox.style.transform = "translateX(0)"; // draggableBox 초기화
        }
    }

    // 마우스 이동 및 종료 이벤트 등록
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
});




