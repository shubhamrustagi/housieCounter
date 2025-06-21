const gridContainer = document.getElementById('gridContainer');
const newNumBtn = document.getElementById("new-num-btn");
const restartBtn = document.getElementById("restart-btn");

function speakText(text) {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = window.speechSynthesis.getVoices()[3]
  utterance.rate = 1
  window.speechSynthesis.speak(utterance);
}

speakText();
for (let i = 1; i <= 90; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.textContent = i;
    gridItem.id = `number${i}`
    gridContainer.appendChild(gridItem);
}

const numArr = ['zero','one','two','three','four','five','six','seven','eight','nine']
var arr = [];
let count = 0;
for(let i = 0 ; i < 90 ; i++){
    arr.push(false);
}
newNumBtn.addEventListener("click",()=>{
    if(count < 90){
        let rand = Math.floor(90*Math.random())
        while(arr[rand]){
            rand = Math.floor(90*Math.random())
        }
        let actual = 1 + rand
        const clicked = document.getElementById(`number${1+rand}`)
        clicked.classList.add("clicked-num")
        text = 
        actual > 9 
        ? `${numArr[Math.floor(actual/10)]} , ${numArr[actual%10]} ... ${actual}` 
        : `Only number ${actual}`
        
        
        speakText(text)
        
        arr[rand] = true;
        count++;
    }else{
        speakText("Game ended!!!!")
        
    }
    
})
function doRestart() {
arr = Array(90).fill(false);
count = 0;

for (let i = 1; i <= 90; i++) {
    document.getElementById(`number${i}`).classList.remove("clicked-num");
}
speakText("Game has been restarted");
}

// === modal elements ===
const modal = document.getElementById("restart-modal");
const yesBtn = document.getElementById("confirm-yes");
const noBtn  = document.getElementById("confirm-no");

restartBtn.addEventListener("click", () => {
modal.classList.remove("hidden");        // show modal
});

yesBtn.addEventListener("click", () => {
modal.classList.add("hidden");           // hide modal
doRestart();                             // perform restart
});

noBtn.addEventListener("click", () => {
modal.classList.add("hidden");           // just hide
});




