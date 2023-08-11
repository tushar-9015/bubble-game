let timer = 2;
let score = 0;
let rnVal = 0;

function makeBubbles(){
    let clutter = ' ';

for ( var i=1; i<=182; i++) {
  const bubbles = Math.floor(Math.random() * 10)
  clutter += `<div class="bubble">${bubbles}</div>`;
}

document.querySelector(".pbottom").innerHTML = clutter;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
    rnVal = Math.floor(Math.random() * 10);
    document.querySelector('#hitVal').textContent = rnVal
}

function getTimer() {

    const runTimer = setInterval(
        function() {
           if(timer>0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
           }
           else {
            clearInterval(runTimer);
            document.querySelector('.pbottom').innerHTML = `<h1 style="font-size:50px";>Game Over</h1>`
           }

        } ,1000)

}

document.querySelector('.pbottom').addEventListener("click", function(dets){
   const numClicked = Number(dets.target.textContent);
   if( numClicked === rnVal) {
    increaseScore();
    makeBubbles();
    getNewHit();
   }
})

makeBubbles();
getTimer();
getNewHit();
