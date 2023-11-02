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

let words=document.createElement("div");
words.textContent="360";
words.style.fontSize="64px";
words.style.color="#fff";
words.style.fontWeight="900";
words.style.letterSpacing="1px";
words.style.padding="46px 29px 1px";
card1.appendChild(words);
let www=document.createElement("div");
www.textContent="Hours";
www.style.color="#A5DEFF";
www.style.fontSize="16px";
www.style.fontWeight="300";
card1.appendChild(www);

let card2 = document.createElement("div");
card2.style.borderRadius = "22px";
card2.style.height = "199px";
card2.style.width="199px"
card2.style.background="#080F1A";
card2.style.color="#fff";
cards.appendChild(card2);
let word=document.createElement("div");
word.textContent="24";
word.style.fontSize="64px";
word.style.color="#fff";
word.style.fontWeight="900";
word.style.letterSpacing="1px";
word.style.padding="46px 29px 1px";
card2.appendChild(word);
let ddd=document.createElement("div");
ddd.textContent="Minuts";
ddd.style.color="#A5DEFF";
ddd.style.fontSize="16px";
ddd.style.fontWeight="300";
card2.appendChild(ddd);



let card3 = document.createElement("div");
card3.style.borderRadius = "22px";
card3.style.height = "199px";
card3.style.width="199px"
card3.style.background="#080F1A";
card3.style.color="#fff";
cards.appendChild(card3);

let sss=document.createElement("div");
sss.textContent="60";
sss.style.fontSize="64px";
sss.style.color="#fff";
sss.style.fontWeight="900";
sss.style.letterSpacing="1px";
sss.style.padding="46px 29px 1px";
card3.appendChild(sss);
let min=document.createElement("div");
min.textContent="Seconds";
min.style.color="#A5DEFF";
min.style.fontSize="16px";
min.style.fontWeight="300";
card3.appendChild(min);



let card4 = document.createElement("div");
card4.style.borderRadius = "22px";
card4.style.height = "199px";
card4.style.width="199px"
card4.style.background="#080F1A";
card4.style.color="#fff";
cards.appendChild(card4);


let milli=document.createElement("div");
milli.textContent="60";
milli.style.fontSize="64px";
milli.style.color="#fff";
milli.style.fontWeight="900";
milli.style.letterSpacing="1px";
milli.style.padding="46px 29px 1px";
card4.appendChild(milli);
let second=document.createElement("div");
second.textContent="Milliseconds";
second.style.color="#A5DEFF";
second.style.fontSize="16px";
second.style.fontWeight="300";
card4.appendChild(second);


let button = document.createElement("div");
button.style.display="flex";
button.style.gap="40px";
button.style.marginTop="100px";
button.style.marginLeft="120px";

badge.appendChild(button);
let btn1=document.createElement("button");
btn1.style.width="185px";
btn1.textContent="Start";
btn1.style.color="#ffff";
btn1.style.fontSize="32px";
btn1.style.background="#080F1A";
btn1.style.borderRadius="13px";
btn1.style.border="none";
btn1.style.height="61px";
button.appendChild(btn1);

let btn2=document.createElement("button");
btn2.style.width="185px";
btn2.textContent="Pause";
btn2.style.color="#ffff";
btn2.style.fontSize="32px";
btn2.style.background="#080F1A";
btn2.style.borderRadius="13px";
btn2.style.border="none";
btn2.style.height="61px";
button.appendChild(btn2);

let btn3=document.createElement("button");
btn3.style.width="185px";
btn3.textContent="Reset";
btn3.style.color="#ffff";
btn3.style.fontSize="32px";
btn3.style.background="#080F1A";
btn3.style.borderRadius="13px";
btn3.style.border="none";
btn3.style.height="61px";
button.appendChild(btn3);





body.appendChild(card);