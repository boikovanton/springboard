function countDown(time) {
    let remainTime = time;
    let timerId = setInterval(function() {
        console.log(remainTime);
        remainTime--;
        if (remainTime <= 0) {
            clearInterval(timerId);
            console.log("DONE!");
        }
    }, 1000);
}