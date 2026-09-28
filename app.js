const QUESTIONS=[
{q:'Ile pytań zawiera egzamin brokerski?',a:['50','75','100','120'],c:2,e:'Egzamin obejmuje 100 pytań jednokrotnego wyboru.',cat:'Egzamin'},
{q:'Ile czasu trwa egzamin brokerski?',a:['60 min','90 min','120 min','180 min'],c:2,e:'Na rozwiązanie testu przewidziano 120 minut.',cat:'Egzamin'},
{q:'Jaki minimalny wynik oznacza zdanie egzaminu?',a:['60 pkt','70 pkt','75 pkt','80 pkt'],c:2,e:'Do zaliczenia wymagane jest co najmniej 75 punktów.',cat:'Egzamin'},
{q:'Która instytucja sprawuje nadzór nad rynkiem ubezpieczeniowym w Polsce?',a:['UFG','KNF','PBUK','Rzecznik Finansowy'],c:1,e:'Nadzór nad rynkiem ubezpieczeniowym sprawuje Komisja Nadzoru Finansowego.',cat:'Instytucje'},
{q:'Co oznacza skrót OWU?',a:['Ogólne Warunki Ubezpieczenia','Obowiązkowy Wykaz Ubezpieczeń','Ogólna Wartość Umowy','Ocena Warunków Ubezpieczenia'],c:0,e:'OWU to Ogólne Warunki Ubezpieczenia.',cat:'Podstawy'},
{q:'Czym jest reasekuracja?',a:['Podziałem jednego ryzyka między kilku ubezpieczycieli','Przeniesieniem części ryzyka zakładu ubezpieczeń na reasekuratora','Obowiązkowym ubezpieczeniem brokera','Likwidacją szkody przez UFG'],c:1,e:'Reasekuracja służy przeniesieniu części ryzyka zakładu ubezpieczeń na reasekuratora.',cat:'Reasekuracja'},
{q:'Czym jest koasekuracja?',a:['Podziałem jednego ryzyka między kilku ubezpieczycieli','Rezygnacją z ryzyka','Ubezpieczeniem brokera','Formą pełnomocnictwa'],c:0,e:'Koasekuracja polega na podziale jednego ryzyka między kilku ubezpieczycieli.',cat:'Reasekuracja'},
{q:'Co oznacza SCR?',a:['Minimalny wymóg kapitałowy','Kapitałowy wymóg wypłacalności','Rezerwę techniczno-ubezpieczeniową','Wskaźnik prowizji brokerskiej'],c:1,e:'SCR to Solvency Capital Requirement — kapitałowy wymóg wypłacalności.',cat:'Wypłacalność'},
{q:'Co oznacza MCR?',a:['Minimalny wymóg kapitałowy','Kapitałowy wymóg wypłacalności','Maksymalną cenę reasekuracji','Minimalną rezerwę składki'],c:0,e:'MCR to Minimum Capital Requirement — minimalny wymóg kapitałowy.',cat:'Wypłacalność'},
{q:'Co broker powinien rozpoznać przed rekomendacją produktu?',a:['Wyłącznie cenę konkurencji','Wymagania i potrzeby klienta','Wynik finansowy zakładu','Historię wszystkich szkód na rynku'],c:1,e:'Przed rekomendacją produktu broker powinien rozpoznać wymagania i potrzeby klienta.',cat:'Dystrybucja'},
{q:'Do czego służy slip brokerski?',a:['Do rozliczeń podatkowych','Do przedstawienia ryzyka i oczekiwanych warunków ubezpieczycielowi','Do rejestracji brokera w KNF','Do zgłaszania szkody UFG'],c:1,e:'Slip brokerski służy przedstawieniu ubezpieczycielowi ryzyka i oczekiwanych warunków ochrony.',cat:'Praktyka brokerska'},
{q:'Który akt jest podstawą regulacji dystrybucji ubezpieczeń?',a:['Ustawa o dystrybucji ubezpieczeń','Prawo bankowe','Kodeks pracy','Prawo zamówień publicznych'],c:0,e:'Podstawowym aktem jest ustawa z 15 grudnia 2017 r. o dystrybucji ubezpieczeń.',cat:'Prawo'},
{q:'Który dokument określa oficjalny zakres tematów egzaminu brokerskiego?',a:['Rozporządzenie MF z 23.04.2019 r.','Regulamin UFG','Statut PBUK','Kodeks etyki bankowej'],c:0,e:'Zakres tematów zawiera rozporządzenie Ministra Finansów z 23 kwietnia 2019 r.',cat:'Prawo'},
{q:'Jak najtrafniej opisać PBUK?',a:['Organ nadzoru','Instytucja związana m.in. z systemem Zielonej Karty i szkodami transgranicznymi','Sąd polubowny','Zakład reasekuracji'],c:1,e:'PBUK uczestniczy m.in. w systemie Zielonej Karty i obsłudze określonych szkód transgranicznych.',cat:'Instytucje'},
{q:'Który zestaw najlepiej opisuje podstawowy proces zarządzania ryzykiem?',a:['Identyfikacja, ocena, ograniczenie/transfer','Sprzedaż, faktura, reklamacja','Rejestracja, audyt, windykacja','Tylko transfer ryzyka'],c:0,e:'Zarządzanie ryzykiem obejmuje identyfikację i ocenę ryzyka oraz wybór sposobu jego ograniczenia lub transferu.',cat:'Ryzyko'}
];

const FLASH=[
['Ile pytań zawiera egzamin brokerski?','100 pytań jednokrotnego wyboru.'],['Ile czasu trwa egzamin brokerski?','120 minut.'],['Jaki wynik jest potrzebny do zdania?','Co najmniej 75 punktów.'],['Podstawowy akt dla dystrybucji ubezpieczeń?','Ustawa z 15.12.2017 r. o dystrybucji ubezpieczeń.'],['Akt określający zakres egzaminu?','Rozporządzenie MF z 23.04.2019 r., Dz.U. 2019 poz. 879.'],['Co oznacza zasada swobody umów?','Strony kształtują stosunek prawny w granicach prawa i natury stosunku.'],['Czym jest klauzula abuzywna?','Niedozwolone postanowienie umowne naruszające interes konsumenta.'],['Co obejmuje zarządzanie ryzykiem?','Identyfikację, ocenę, ograniczenie lub transfer ryzyka.'],['Do czego służy slip brokerski?','Do przedstawienia ryzyka i oczekiwanych warunków ubezpieczycielowi.'],['Czym zajmuje się UFG?','M.in. zadaniami związanymi z systemem ubezpieczeń obowiązkowych.'],['Czym zajmuje się PBUK?','M.in. systemem Zielonej Karty i określonymi szkodami transgranicznymi.'],['Kto nadzoruje rynek ubezpieczeniowy?','Komisja Nadzoru Finansowego (KNF).'],['Co to jest OWU?','Ogólne Warunki Ubezpieczenia.'],['Czym jest szkoda w prawie cywilnym?','Uszczerbkiem w chronionym dobru lub interesie.'],['Co oznacza reasekuracja?','Przeniesienie części ryzyka ubezpieczyciela na reasekuratora.'],['Co oznacza koasekuracja?','Podział jednego ryzyka między kilku ubezpieczycieli.'],['Co oznacza SCR?','Solvency Capital Requirement — kapitałowy wymóg wypłacalności.'],['Co oznacza MCR?','Minimum Capital Requirement — minimalny wymóg kapitałowy.'],['Co broker rozpoznaje przed rekomendacją?','Wymagania i potrzeby klienta.'],['Przykładowe dokumenty brokerskie?','Oferta, slip, nota prowizoryczna, dokument ubezpieczenia.']
];

const LS='brokerKNF_v01';
let state=JSON.parse(localStorage.getItem(LS)||'null')||{answered:0,correct:0,lastScore:null,mistakes:[],flashKnown:{},sessions:0};
let currentQuiz=0,quizScore=0,examTimer=null,examStart=null,flashIndex=0;
const save=()=>{localStorage.setItem(LS,JSON.stringify(state)); renderDashboard();};

function go(id){document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));document.getElementById(id).classList.add('active'); if(id==='quiz') startQuiz(); if(id==='flashcards') renderFlash(); if(id==='mistakes') renderMistakes(); if(id==='stats') renderStats(); window.scrollTo(0,0)}
document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>go(b.dataset.go));

document.getElementById('resetBtn').onclick=()=>{if(confirm('Usunąć lokalny postęp w tej wersji aplikacji?')){localStorage.removeItem(LS);location.reload();}};

function renderDashboard(){
 const total=Math.max(state.answered,1), pct=Math.round(100*state.correct/total); const ready=Math.min(100,Math.round((pct*0.7)+(Math.min(state.answered,100)*0.3)));
 document.getElementById('todayProgress').textContent=`${Math.min(state.answered,20)} / 20 pytań`;
 document.getElementById('readiness').textContent=`${isNaN(ready)?0:ready}%`;
 document.getElementById('lastScore').textContent=state.lastScore==null?'—':`${state.lastScore}%`;
 document.getElementById('mistakeCount').textContent=state.mistakes.length;
 document.getElementById('progressBar').style.width=`${Math.min(100,state.answered)}%`;
 document.getElementById('progressText').textContent=state.answered<20?'Cel na dziś: odpowiedz na 20 pytań i oznacz fiszki.':'Dzisiejszy cel zrealizowany — przejdź do błędów lub próbnego egzaminu.';
}

function startQuiz(){currentQuiz=0;quizScore=0;renderQuizQuestion();}
function renderQuizQuestion(){
 const box=document.getElementById('quizBox'); const q=QUESTIONS[currentQuiz%QUESTIONS.length];
 box.innerHTML=`<div class="card"><div class="qmeta"><span>${q.cat}</span><span>${currentQuiz+1}/10</span></div><div class="question">${q.q}</div><div class="answers">${q.a.map((x,i)=>`<button class="answer" data-i="${i}">${String.fromCharCode(65+i)}. ${x}</button>`).join('')}</div><div id="fb"></div></div>`;
 box.querySelectorAll('.answer').forEach(b=>b.onclick=()=>answerQuiz(+b.dataset.i));
}
function answerQuiz(i){
 const q=QUESTIONS[currentQuiz%QUESTIONS.length],buttons=[...document.querySelectorAll('#quizBox .answer')]; buttons.forEach(b=>b.disabled=true); buttons[q.c].classList.add('correct');
 state.answered++; if(i===q.c){state.correct++;quizScore++;} else {buttons[i].classList.add('wrong'); if(!state.mistakes.includes(currentQuiz%QUESTIONS.length)) state.mistakes.push(currentQuiz%QUESTIONS.length)}
 document.getElementById('fb').innerHTML=`<div class="feedback ${i===q.c?'good':'bad'}">${q.e}</div><button id="nextQ" class="primary">${currentQuiz===9?'Zobacz wynik':'Następne pytanie'}</button>`;
 save(); document.getElementById('nextQ').onclick=()=>{currentQuiz++; if(currentQuiz>=10){state.lastScore=quizScore*10;state.sessions++;save();document.getElementById('quizBox').innerHTML=`<div class="card"><h2>${quizScore}/10</h2><p>${quizScore>=8?'Bardzo dobry wynik.':'Wróć do błędów i powtórz słabsze obszary.'}</p><button class="primary" onclick="startQuiz()">Nowy quiz</button></div>`;}else renderQuizQuestion();}
}

document.getElementById('startExam').onclick=()=>startExam();
function startExam(){
 let idx=0,score=0,answers=[]; examStart=Date.now(); clearInterval(examTimer); examTimer=setInterval(updateTimer,1000);
 const render=()=>{const q=QUESTIONS[idx];document.getElementById('examBox').innerHTML=`<div class="card"><div class="qmeta"><span class="timer" id="timer">00:00</span><span>${idx+1}/${QUESTIONS.length}</span></div><div class="question">${q.q}</div><div class="answers">${q.a.map((x,i)=>`<button class="answer" data-i="${i}">${String.fromCharCode(65+i)}. ${x}</button>`).join('')}</div></div>`;document.querySelectorAll('#examBox .answer').forEach(b=>b.onclick=()=>{answers.push(+b.dataset.i);if(+b.dataset.i===q.c)score++;else if(!state.mistakes.includes(idx))state.mistakes.push(idx);idx++;if(idx<QUESTIONS.length)render();else finish();});updateTimer();};
 const finish=()=>{clearInterval(examTimer);const pct=Math.round(score/QUESTIONS.length*100);state.lastScore=pct;state.answered+=QUESTIONS.length;state.correct+=score;state.sessions++;save();document.getElementById('examBox').innerHTML=`<div class="card"><div class="eyebrow">WYNIK PRÓBNEGO TESTU</div><h2>${score}/${QUESTIONS.length} (${pct}%)</h2><p>${pct>=75?'Próg 75% został przekroczony w tej demonstracyjnej próbie.':'W tej demonstracyjnej próbie wynik jest poniżej 75%. Przejdź do „Moje błędy”.'}</p><button class="primary" onclick="startExam()">Spróbuj ponownie</button></div>`;};
 render();
}
function updateTimer(){const el=document.getElementById('timer');if(!el||!examStart)return;const s=Math.floor((Date.now()-examStart)/1000),m=Math.floor(s/60);el.textContent=`${String(m).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;}

function renderFlash(){const box=document.getElementById('flashcardBox'),f=FLASH[flashIndex%FLASH.length],known=!!state.flashKnown[flashIndex%FLASH.length];box.innerHTML=`<div class="qmeta"><span>${flashIndex+1}/${FLASH.length}</span><span class="pill">${known?'opanowana':'do nauki'}</span></div><div id="fc" class="card flashcard"><div class="frontText">${f[0]}<div class="small muted spacer">Dotknij, aby odwrócić</div></div><div class="backText">${f[1]}</div></div><div class="flashActions"><button id="dontKnow" class="badBtn">Jeszcze nie</button><button id="know" class="goodBtn">Umiem</button></div>`;document.getElementById('fc').onclick=e=>e.currentTarget.classList.toggle('flipped');document.getElementById('dontKnow').onclick=()=>{state.flashKnown[flashIndex%FLASH.length]=false;flashIndex=(flashIndex+1)%FLASH.length;save();renderFlash();};document.getElementById('know').onclick=()=>{state.flashKnown[flashIndex%FLASH.length]=true;flashIndex=(flashIndex+1)%FLASH.length;save();renderFlash();};}

function renderMistakes(){const box=document.getElementById('mistakesBox'); if(!state.mistakes.length){box.innerHTML='<div class="card"><h3>Brak zapisanych błędów</h3><p class="muted">Rozwiąż quiz lub próbny test.</p></div>';return}box.innerHTML=`<div class="card"><p class="muted">Lista pytań, na których popełniłeś błąd.</p>${state.mistakes.map(i=>`<div class="listItem"><strong>${QUESTIONS[i].q}</strong><div class="small muted">${QUESTIONS[i].e}</div></div>`).join('')}<button id="clearMistakes">Wyczyść listę błędów</button></div>`;document.getElementById('clearMistakes').onclick=()=>{state.mistakes=[];save();renderMistakes();};}
function renderStats(){const known=Object.values(state.flashKnown).filter(Boolean).length;const acc=state.answered?Math.round(state.correct/state.answered*100):0;document.getElementById('statsBox').innerHTML=`<div class="card"><div class="statRow"><span>Odpowiedzi</span><strong>${state.answered}</strong></div><div class="statRow"><span>Skuteczność</span><strong>${acc}%</strong></div><div class="statRow"><span>Sesje</span><strong>${state.sessions}</strong></div><div class="statRow"><span>Fiszki opanowane</span><strong>${known}/${FLASH.length}</strong></div><div class="statRow"><span>Błędy do powtórki</span><strong>${state.mistakes.length}</strong></div></div><div class="card"><h3>Docelowo</h3><p class="muted">W kolejnych wersjach: analiza działów, 100 pytań/120 min, pełne testy KNF, powtórki adaptacyjne i harmonogram do grudnia.</p></div>`;}

if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
renderDashboard();
