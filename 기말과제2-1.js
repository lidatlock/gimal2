document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-container img'); // 이미지들 선택
    const audio = new Audio('mine1.mp3'); // 효과음 파일 경로
    audio.volume = 1;
    audio.currentTime = 1.5; // 효과음 시작 지점
    
    const imageChanges = [
        { src: '이미지2.png', text: 'Same scale in vertical relationship', width: '1200px', borderRadius: '100px' },
        { src: '이미지3.png', text: 'Rebus and spacing are on a grid', width: '1000px', borderRadius: '50px' },
        { src: '이미지4.png', text: 'Keep the rebus and totem rebus separated from other visual elements by a distance equal to the M height. This distance is considered the minimum uninterrupted space surrounding the rebus. We call it the area of isolation, or clear space, and it should be adhered to in most situations.', width: '1100px', borderRadius: '150px' },
        { src: '이미지5.png', text: 'Patterns can be useful tools in a variety of graphic applications. In the workplace for example, distraction patterns on glass walls and doors can prevent injury. Event structure facades might use graphic wallcovering. They can also be used effectively on merchandise. There are a few approved patterns based on the rebus, with positive and reversed options.', width: '1300px', borderRadius: '20px' }
    ];

    let changeCount = 0; // 변경된 이미지의 횟수를 추적

    images.forEach((image, index) => {
        let isMouseDown = false;
        let timer;
        let hasChangedImage = false; // 이미지 변경 상태 추적

        // 클릭 시작 시 타이머 시작
        image.addEventListener('mousedown', () => {
            if (hasChangedImage) return; // 이미지가 이미 변경된 상태라면 아무 일도 일어나지 않음

            isMouseDown = true;
            
            // 효과음 시작 (마우스 클릭 중에만)
            audio.play();

            // 일정 시간이 지나면 이미지 변경을 시작
            timer = setInterval(() => {
                if (!hasChangedImage) {
                    image.src = imageChanges[index].src; // 각 이미지에 맞는 변경
                    hasChangedImage = true; // 이미지 변경 상태 설정
                    audio.pause(); // 효과음 중지

                    // 이미지 변경 후 텍스트박스 추가
                    const textBox = document.createElement('div');
                    textBox.classList.add('text-box'); // 스타일링을 위한 클래스 추가
                    textBox.textContent = imageChanges[index].text; // 텍스트 내용 설정

                    // 텍스트박스를 이미지 아래에 추가
                    image.parentElement.appendChild(textBox);

                    // 이미지 스타일 변경 (예시)
                    image.style.width = imageChanges[index].width; // 이미지 너비 변경
                    image.style.height = 'auto'; // 이미지 높이는 자동으로
                    image.style.transition = 'all 0.5s'; // 스타일 변경 시 애니메이션 효과
                    image.style.setProperty('mix-blend-mode', 'normal', 'important');
                    image.offsetHeight; 
                    image.style.mixBlendMode = 'normal';

                    // 이미지 변경 횟수 증가
                    changeCount++;

                    // 모든 이미지 변경 후 숫자 표시
                    if (changeCount === imageChanges.length) {
                        // 알림 창을 띄움
                        window.alert(`1914`);
                    }
                }

                clearInterval(timer); // 타이머 중지
            }, 2000); // 2초 후 이미지 변경
        });

        // 클릭 종료 시 타이머 중지 및 소리 멈추기
        image.addEventListener('mouseup', () => {
            clearInterval(timer);
            isMouseDown = false;
            audio.pause(); // 클릭 종료 시 소리 멈추기
        });

        // 클릭을 떼지 않고 마우스를 벗어나면 타이머 초기화 및 소리 멈추기
        image.addEventListener('mouseleave', () => {
            if (isMouseDown) {
                clearInterval(timer);
                isMouseDown = false;
                audio.pause(); // 소리 멈추기
            }
        });
    });
});








