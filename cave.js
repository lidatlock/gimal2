window.addEventListener('load', () => {
    const audio = document.getElementById('audio');

    // 안내 메시지 출력
    alert("화면을 클릭하면 소리가 재생됩니다.");

    // 사용자 클릭 시 오디오 재생
    document.body.addEventListener('click', () => {
        audio.play()
            .then(() => {
                console.log("오디오가 정상적으로 재생되었습니다.");
            })
            .catch((error) => {
                console.error("오디오 재생에 실패했습니다.", error);
            });
    });
});
