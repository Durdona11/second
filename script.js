let all = document.getElementsByTagName("*");
for (let index = 0; index < all.length; index++) {
   all[index].style.margin = "0";
   all[index].style.padding = "0";
   all[index].style.boxSizing = "border-box";
    
}

let body = document.querySelector("#root");



let card = document.createElement("div");
card.style.background="url(https://i.47news.ru//titles/2021/08/20210817_n0noi8tt2sshypk71s8g.jpg)"
card.style.width = "100vw";
card.style.height="100vh";
card.style.backgroundSize = "cover";
card.style.display="flex";
card.style.alignItems="center";
card.style.justifyContent="center";

let badge = document.createElement("div");
badge.style.background = "rgba(0, 161, 255, 0.58)";
badge.style.maxWidth="1050px";
badge.style.height="500px";
badge.style.padding = "38px ";
badge.style.textAlign="center";
badge.style.fontFamily="Inter";
badge.style.fontSize="32px";
badge.style.fontWeight="600";
badge.style.letterSpacing="6.4px";
badge.style.color="#A5DEFF";
badge.style.borderRadius = "35px";
badge.textContent = "Secundomer";
card.appendChild(badge);

let cards=document.createElement("div");
cards.style.display="flex";
cards.style.gap="26px";
cards.style.marginTop="40px";
// cards.style.marginLeft="80px";

badge.appendChild(cards);

let card1 = document.createElement("div");
card1.style.borderRadius = "22px";
card1.style.height = "199px";
card1.style.width="199px"
card1.style.background="#080F1A";
cards.appendChild(card1);

let hhh=document.createElement("div");
hhh.style.fontSize="64px";
hhh.style.color="#fff";
hhh.style.fontWeight="900";
hhh.style.letterSpacing="1px";
hhh.style.padding="46px 29px 1px";
card1.appendChild(hhh);



let hoursText=document.createElement("div");
hoursText.textContent="Hours";
hoursText.style.color="#A5DEFF";
hoursText.style.fontSize="16px";
hoursText.style.fontWeight="300";
card1.appendChild(hoursText);

let card2 = document.createElement("div");
card2.style.borderRadius = "22px";
card2.style.height = "199px";
card2.style.width="199px"
card2.style.background="#080F1A";
card2.style.color="#fff";
cards.appendChild(card2);
let ttt=document.createElement("div");
ttt.style.fontSize="64px";
ttt.style.color="#fff";
ttt.style.fontWeight="900";
ttt.style.letterSpacing="1px";
ttt.style.padding="46px 29px 1px";
card2.appendChild(ttt);
let minutesText=document.createElement("div");
minutesText.textContent="Minuts";
minutesText.style.color="#A5DEFF";
minutesText.style.fontSize="16px";
minutesText.style.fontWeight="300";
card2.appendChild(minutesText);



let card3 = document.createElement("div");
card3.style.borderRadius = "22px";
card3.style.height = "199px";
card3.style.width="199px"
card3.style.background="#080F1A";
card3.style.color="#fff";
cards.appendChild(card3);

let ggg=document.createElement("div");
ggg.style.fontSize="64px";
ggg.style.color="#fff";
ggg.style.fontWeight="900";
ggg.style.letterSpacing="1px";
ggg.style.padding="46px 29px 1px";
card3.appendChild(ggg);

let secondsText=document.createElement("div");
secondsText.textContent="Seconds";
secondsText.style.color="#A5DEFF";
secondsText.style.fontSize="16px";
secondsText.style.fontWeight="300";
card3.appendChild(secondsText);



let card4 = document.createElement("div");
card4.style.borderRadius = "22px";
card4.style.height = "199px";
card4.style.width="199px"
card4.style.background="#080F1A";
card4.style.color="#fff";
cards.appendChild(card4);


let mmm=document.createElement("div");
mmm.style.fontSize="64px";
mmm.style.color="#fff";
mmm.style.fontWeight="900";
mmm.style.letterSpacing="1px";
mmm.style.padding="46px 29px 1px";
card4.appendChild(mmm);
let millisecondTexts=document.createElement("div");
millisecondTexts.textContent="Millisecond";
millisecondTexts.style.color="#A5DEFF";
millisecondTexts.style.fontSize="16px";
millisecondTexts.style.fontWeight="300";
card4.appendChild(millisecondTexts);


let button = document.createElement("div");
button.style.display="flex";
button.style.gap="40px";
button.style.marginTop="100px";
button.style.marginLeft="120px";

badge.appendChild(button);
let start=document.createElement("button");
let intervalID;
start.addEventListener("click", ()=>{
    intervalID = setInterval(showMilliseconds, 10);
});
start.style.width="185px";
start.textContent="Start";
start.style.color="#ffff";
start.style.fontSize="32px";
start.style.background="#080F1A";
start.style.borderRadius="13px";
start.style.border="none";
start.style.height="61px";
button.appendChild(start);

let pause=document.createElement("button");
pause.addEventListener("click", ()=>{
    clearInterval(intervalID);
});
pause.style.width="185px";
pause.textContent="Pause";
pause.style.color="#ffff";
pause.style.fontSize="32px";
pause.style.background="#080F1A";
pause.style.borderRadius="13px";
pause.style.border="none";
pause.style.height="61px";
button.appendChild(pause);

let reset=document.createElement("button");
reset.onclick = ()=>{
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    showMilliseconds();
};
reset.style.width="185px";
reset.textContent="Reset";
reset.style.color="#ffff";
reset.style.fontSize="32px";
reset.style.background="#080F1A";
reset.style.borderRadius="13px";
reset.style.border="none";
reset.style.height="61px";
button.appendChild(reset);





body.appendChild(card);

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
function showMilliseconds() {
    // console.log(milliseconds);
    if (millisecond == 100) {
      second++;
      millisecond = 0;
    }
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }
    mmm.textContent=millisecond++;
    ggg.textContent=second;
    ttt.textContent=minute;
    hhh.textContent=hour;
}