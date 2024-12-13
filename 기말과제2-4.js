document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-container img'); // 이미지들 선택
    const audio = new Audio('mine1.mp3'); // 효과음 파일 경로
    audio.volume = 1;
    audio.currentTime = 1.5; // 효과음 시작 지점
    
    const imageChanges = [
        { src: '이미지4-1.png', text: 'The 1972 Vignelli NYC subway map was an attempt at a diagrammatic display for the subway system, consisting of 45 and 90 degree angles, many colors, and extreme legibility.' },
        { src: '이미지4-2.png', text: 'Vignellis map was criticized for being inadequate to obtain geographic information on the ground as a map role because it focused on showing the structure of the system.' },
        { src: '이미지4-3.png', text: 'Through an extensive amount of behavioral research, Vingelli and Noorda discarded the decades-old, crowded and illegible maps, in favor of streamlining the system’s typography using Helvetica, the world’s preferred sans serif typeface, while assigning particular distinction to colors and shapes over an abundance of unnecessary text.' },
        { src: '이미지4-4.jpg', text: 'The culmination of this extensive and enduring project was a hefty, 182-page book entitled, ‘The New York City Transit Authority Graphics Standard Manual’, which first appeared in 1970. This de facto rulebook, outlining everything design-related for the entire subway system, solidified the importance of ‘information design’ as a means of improving efficiency and navigability.' }
    ];

    let changeCount = 0; // 이미지 변경 카운트

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
                    image.style.width = 2000; // 이미지 너비 변경
                    image.style.height = 'auto'; // 이미지 높이는 자동으로
                    image.style.transition = 'all 0.5s'; // 스타일 변경 시 애니메이션 효과
                    image.style.setProperty('mix-blend-mode', 'normal', 'important');
                    image.offsetHeight; 
                    image.style.mixBlendMode = 'normal';
                    image.style.position = 'relative';

                    // 이미지 변경 횟수 증가
                    changeCount++;
                }

                // 모든 이미지 변경 후 숫자 표시
                if (changeCount === imageChanges.length) {
                    // 알림 창을 띄움
                    window.alert(`1972`);
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
