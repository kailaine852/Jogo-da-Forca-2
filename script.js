(function(){
  const WORDS = [
     ["AVENIDA BRASIL","Tem Nina, Carminha e Tufão."],
    ["O CLONE","Tem Jade, Lucas e uma história envolvendo clonagem."],
    ["A FORÇA DO QUERER","Tem Bibi, Ritinha e Jeiza."],
    ["CHEIAS DE CHARME","Três empregadas domésticas formam um grupo musical."],
    ["CHOCOLATE COM PIMENTA","Ana Francisca é a protagonista e trabalha com chocolates."],
    ["O CRAVO E A ROSA","É uma comédia romântica inspirada em Shakespeare."],
    ["ALMA GÊMEA","Conta a história de amor entre Rafael e Luna."],
    ["SENHORA DO DESTINO","Tem Maria do Carmo e a vilã Nazaré."],
    ["LAÇOS DE FAMÍLIA","Tem Helena e uma história envolvendo mãe e filha."],
    ["POR AMOR","Conta a história de Helena e Eduarda."],
    ["A DONA DO PEDAÇO","Maria da Paz fica famosa vendendo bolos."],
    ["TOTALMENTE DEMAIS","Eliza participa de um concurso de beleza."],
    ["ÊTA MUNDO BOM!","Tem Candinho como personagem principal."],
    ["FINA ESTAMPA","Tem Griselda, conhecida como Pereirão."],
    ["CAMINHO DAS ÍNDIAS","A trama envolve a cultura indiana."],
    ["VERDADES SECRETAS","A história envolve o mundo da moda."],
    ["IMPÉRIO","José Alfredo constrói um grande império."],
    ["TIETA","A personagem principal volta para sua cidade depois de muitos anos."],
    ["ROQUE SANTEIRO","A história acontece na cidade fictícia de Asa Branca."],
    ["O REI DO GADO","A trama envolve fazendas e conflitos por terras."],
    ["VALE TUDO","Tem Raquel, Maria de Fátima e Odete Roitman."],
    ["PANTANAL","A história se passa principalmente no Pantanal."],
    ["TERRA E PAIXÃO","A trama envolve uma grande fazenda e disputas familiares."],
    ["SALVE JORGE","A personagem Morena enfrenta o tráfico de pessoas."],
    ["AMÉRICA","Tem como tema a imigração e o sonho de viver nos Estados Unidos."],
    ["BELÍSSIMA","A história envolve uma família poderosa e uma empresa de lingerie."],
    ["CELEBRIDADE","A trama envolve fama, televisão e rivalidade."],
    ["MULHERES DE AREIA","Tem as famosas gêmeas Ruth e Raquel."],
    ["A VIAGEM","A história envolve espiritualidade e vida após a morte."],
    ["CARAS & BOCAS","A trama envolve arte, dinheiro e animais."],
    ["TI TI TI","A história envolve estilistas e o mundo da moda."],
    ["PARAÍSO TROPICAL","A trama envolve duas irmãs gêmeas e muitos segredos."],
    ["O OUTRO LADO DO PARAÍSO","A protagonista busca justiça depois de sofrer injustiças."],
    ["NOVO MUNDO","A história se passa durante a chegada da família real ao Brasil."],
    ["DEUS SALVE O REI","É uma novela de época ambientada em um reino fictício."],
    ["O TEMPO NÃO PARA","Pessoas congeladas acordam muitos anos depois."],
    ["VERÃO 90","A trama se passa principalmente nos anos 1990."],
    ["ORGULHO E PAIXÃO","É inspirada em obras da escritora Jane Austen."],
    ["LIBERDADE, LIBERDADE","A história se passa no período da Inconfidência Mineira."],
    ["NOS TEMPOS DO IMPERADOR","A trama se passa durante o período do Império do Brasil."],
    ["BABILÔNIA","A história envolve três mulheres com personalidades diferentes."],
    ["AMOR À VIDA","Tem Félix, Paloma e muitos conflitos familiares."],
    ["MÃE SÓ TEM DUAS","A trama envolve duas mães e suas famílias."],
    ["SEGUNDO SOL","A história envolve Beto Falcão e uma nova identidade."],
    ["A LEI DO AMOR","A trama envolve duas famílias e muitos conflitos."],
    ["O SÉTIMO GUARDIÃO","A história envolve uma fonte secreta com poderes especiais."],
    ["HISTÓRIA DE AMOR","A trama envolve Helena e sua família."],
    ["POR TI","A novela apresenta histórias de amor e conflitos familiares."],
    ["A FAVORITA","Tem Flora e Donatela, duas personagens envolvidas em uma grande rivalidade."],

    // NOVELAS DO SBT / EXIBIDAS PELO SBT
    ["CARROSSEL","A história acontece em uma escola e tem a professora Helena."],
    ["CHIQUITITAS","Conta a história de crianças que vivem em um orfanato."],
    ["CÚMPLICES DE UM RESGATE","Duas irmãs gêmeas trocam de identidade."],
    ["CARINHA DE ANJO","A protagonista é uma menina chamada Dulce Maria."],
    ["AS AVENTURAS DE POLIANA","Poliana gosta de jogar o jogo do contente."],
    ["POLIANA MOÇA","É a continuação da história de Poliana."],
    ["A INFÂNCIA DE ROMEU E JULIETA","É inspirada na famosa história de Romeu e Julieta."],
    ["ESMERALDA","A protagonista é uma jovem chamada Esmeralda."],
    ["MARISOL","A protagonista enfrenta dificuldades e tenta mudar de vida."],
    ["PÉROLA NEGRA","A história acompanha uma jovem chamada Pérola."],
    ["PÍCARA SONHADORA","Uma jovem trabalha para conseguir realizar seus sonhos."],
    ["PEQUENA TRAVESSA","A protagonista enfrenta vários desafios."],
    ["CANAVIAL DE PAIXÕES","A trama envolve famílias, amor e conflitos."],
    ["MARIA ESPERANÇA","Uma jovem humilde enfrenta muitas dificuldades."],
    ["AMIGAS E RIVAIS","A história envolve amizade, rivalidade e romances."],
    ["REVELAÇÃO","A trama envolve segredos e conflitos familiares."],
    ["AMOR E REVOLUÇÃO","A história se passa durante a ditadura militar."],
    ["VENDE-SE UM VÉU DE NOIVA","A trama envolve uma família rica e vários conflitos."],
    ["ÉRAMOS SEIS","Conta a história de uma família ao longo de várias décadas."],
    ["FASCINAÇÃO","A história envolve romance e diferenças sociais."],
    ["CRISTAL","A protagonista descobre segredos sobre sua origem."],
    ["CORAÇÕES FERIDOS","A novela envolve romances e conflitos familiares."],
    ["UMA ROSA COM AMOR","A protagonista é Serafina."],
    ["OS RICOS TAMBÉM CHORAM","A história envolve uma jovem humilde e uma família rica."],
    ["O DIREITO DE NASCER","É uma história clássica sobre família e segredos."],
    ["MEUS FILHOS, MINHA VIDA","A trama gira em torno de uma família."],
    ["SEUS OLHOS","A novela envolve romances e conflitos familiares."],
    ["A CAVERNA ENCANTADA","A história acontece principalmente em uma escola."],
    ["MARIA DO BAIRRO","A protagonista começa sua vida de forma humilde."],
    ["A USURPADORA","Duas mulheres muito parecidas trocam de lugar."],
    ["RUBI","A protagonista busca riqueza e uma vida luxuosa."],
    ["REBELDE","A história acompanha jovens em uma escola."],
    ["SORTILÉGIO","A trama envolve amor, riqueza e conflitos familiares."],
    ["TERESA","A protagonista deseja mudar sua condição social."],
    ["TRIUNFO DO AMOR","A história envolve amor, família e diferenças sociais."],
    ["MAR DE AMOR","A trama envolve romance e uma comunidade litorânea."],
    ["ABISMO DE PAIXÃO","A história envolve amor e rivalidade entre famílias."],
    ["CORAÇÃO INDOMÁVEL","A protagonista é uma jovem humilde que enfrenta dificuldades."],
    ["MEU PECADO","A história envolve amor, família e muitos segredos."],
    ["A GATA","A protagonista enfrenta uma vida cheia de dificuldades."],
    ["QUANDO ME APAIXONO","A trama envolve amor, vingança e segredos."],
    ["AMANHÃ É PARA SEMPRE","A história envolve amor, família e vingança."],
    ["A QUE NÃO PODIA AMAR","A protagonista enfrenta conflitos familiares e amorosos."],
    ["SORTILÉGIO","A história envolve dois irmãos e uma grande disputa familiar."],
    ["A MADRASTA","Uma mulher tenta descobrir quem é o verdadeiro culpado por um crime."],
    ["TERESA","A protagonista quer deixar a pobreza para trás."],
    ["CORAÇÃO GUERREIRO","A trama envolve romance, vingança e conflitos familiares."],
    ["MEU CAMINHO É TEU","A história envolve amor e dificuldades familiares."],
    ["MARIA MERCEDES","A protagonista é uma jovem pobre que vende flores."],
    ["A USURPADORA","A trama envolve duas mulheres idênticas e uma troca de identidade."]
    ["A COR DA PAIXÃO","A história envolve amor, família e antigos segredos."],
    ["VIVER A VIDA","A protagonista enfrenta mudanças e desafios depois de um acidente."],
  ];
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const MAX_LIVES = 6;
  function shuffle(arr){
    const a = arr.slice();
    for(let i = a.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const deck = shuffle(WORDS);
  let index = 0;
  let score = 0;
  let word = "";
  let hint = "";
  let guessed = new Set();
  let wrongCount = 0;
  let over = false;
  const els = {
    rig: document.getElementById("rig"),
    word: document.getElementById("word"),
    hint: document.getElementById("hint"),
    keyboard: document.getElementById("keyboard"),
    wordNum: document.getElementById("wordNum"),
    wordTotal: document.getElementById("wordTotal"),
    scoreCount: document.getElementById("scoreCount"),
    overlay: document.getElementById("overlay"),
    modal: document.getElementById("modal"),
    modalTitle: document.getElementById("modalTitle"),
    modalText: document.getElementById("modalText"),
    nextBtn: document.getElementById("nextBtn"),
  };
  els.wordTotal.textContent = deck.length;
  function buildRig(){
    els.rig.innerHTML = `
        <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="150" x2="100" y2="150" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="150" x2="40" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="18" x2="112" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="38" x2="62" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="112" y1="18" x2="112" y2="34" stroke="#A78BFA" stroke-width="5" stroke-linecap="round"/>
        <circle id="part0" class="part" cx="112" cy="47" r="13" fill="none" stroke="#FFD23F" stroke-width="5"/>
        <line id="part1" class="part" x1="112" y1="60" x2="112" y2="96" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part2" class="part" x1="112" y1="70" x2="97" y2="86" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part3" class="part" x1="112" y1="70" x2="127" y2="86" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part4" class="part" x1="112" y1="96" x2="99" y2="118" stroke="#06D6A0" stroke-width="5" stroke-linecap="round"/>
        <line id="part5" class="part" x1="112" y1="96" x2="125" y2="118" stroke="#06D6A0" stroke-width="5" stroke-linecap="round"/>
      </svg>`;
}
  function normalize(str){
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function startWord(){
    if(index >= deck.length){
      showEndOfDeck();
      return;
    }
    const pick = deck[index];
    word = pick[0];
    hint = pick[1];
    guessed = new Set();
    wrongCount = 0;
    over = false;
    els.overlay.classList.remove("show");
    els.wordNum.textContent = index + 1;
    els.scoreCount.textContent = score;
    buildRig();
    els.hint.textContent = "Dica: " + hint;
    renderWord();
    buildKeyboard();
  }
  function showEndOfDeck(){
    els.modal.className = "modal win";
    els.modalTitle.textContent = "Você completou todas as palavras! 🎉";
    els.modalText.innerHTML = "Placar final: <b>" + score + "</b> de <b>" + deck.length + "</b>";
    els.nextBtn.textContent = "Jogar novamente";
    els.overlay.classList.add("show");
    els.nextBtn.focus();
    launchConfetti();
    els.nextBtn.onclick = () => { index = 0; score = 0; startWord(); };
  }
  function renderWord(){
    els.word.innerHTML = "";
    word.split("").forEach(ch => {
      if(ch === " "){
        const s = document.createElement("div");
        s.className = "letter-slot space";
        els.word.appendChild(s);
        return;
      }
      const slot = document.createElement("div");
      slot.className = "letter-slot";
      const normCh = normalize(ch);
      if(guessed.has(normCh)){
        slot.textContent = ch;
        slot.classList.add("reveal");
      }
      els.word.appendChild(slot);
    });
  }
  function buildKeyboard(){
    els.keyboard.innerHTML = "";
    const rows = [
      ALPHABET.slice(0,9),
      ALPHABET.slice(9,18),
      ALPHABET.slice(18,26).concat(["Ç"])
    ];
    rows.forEach(rowLetters => {
      const row = document.createElement("div");
      row.className = "kb-row";
      rowLetters.forEach(letter => {
        const btn = document.createElement("button");
        btn.className = "key";
        btn.textContent = letter;
        btn.addEventListener("click", () => handleGuess(letter, btn));
        row.appendChild(btn);
      });
      els.keyboard.appendChild(row);
    });
  }
  function handleGuess(letter, btnEl){
    if(over || guessed.has(letter)) return;
    guessed.add(letter);
    btnEl.disabled = true;
    const normWord = normalize(word);
    if(normWord.includes(letter)){
      btnEl.classList.add("correct");
      renderWord();
      checkWin();
    } else {
      btnEl.classList.add("wrong");
      const part = document.getElementById("part" + wrongCount);
      if(part) part.classList.add("show");
      wrongCount++;
      if(wrongCount >= MAX_LIVES){
        loseWord();
      }
    }
  }
  function checkWin(){
    const normWord = normalize(word);
    const allGuessed = normWord.split("").every(ch => ch === " " || guessed.has(ch));
    if(allGuessed){
      winWord();
    }
  }
  function winWord(){
    over = true;
    score++;
    els.modal.className = "modal win";
    els.modalTitle.textContent = "Você acertou! 🎉";
    els.modalText.innerHTML = "A palavra era <b>" + word + "</b>";
    els.nextBtn.textContent = index + 1 >= deck.length ? "Ver placar final" : "Próxima palavra";
    els.overlay.classList.add("show");
    els.nextBtn.focus();
    disableKeyboard();
    launchConfetti();
    els.nextBtn.onclick = () => { index++; startWord(); };
  }
  function loseWord(){
    over = true;
    els.modal.className = "modal lose";
    els.modalTitle.textContent = "Ah, não! 💥";
    els.modalText.innerHTML = "A palavra era <b>" + word + "</b>";
    els.nextBtn.textContent = index + 1 >= deck.length ? "Ver placar final" : "Próxima palavra";
    els.overlay.classList.add("show");
    els.nextBtn.focus();
    disableKeyboard();
    els.nextBtn.onclick = () => { index++; startWord(); };
  }
  function disableKeyboard(){
    document.querySelectorAll(".key").forEach(k => k.disabled = true);
  }
  function launchConfetti(){
    const colors = ["#FF4D8D","#FFD23F","#06D6A0","#FF8C42","#A78BFA"];
    for(let i=0;i<40;i++){
      const piece = document.createElement("div");
      piece.className = "confetti";
      piece.style.left = Math.random()*100 + "vw";
      piece.style.background = colors[Math.floor(Math.random()*colors.length)];
      piece.style.animationDuration = (2 + Math.random()*1.5) + "s";
      piece.style.animationDelay = (Math.random()*0.4) + "s";
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 4000);
    }
  }
  function findKey(letter){
    return Array.from(document.querySelectorAll(".key")).find(b => b.textContent === letter);
  }
  document.addEventListener("keydown", (e) => {
    // Enter ou espaço avançam para a próxima palavra quando o modal está aberto
    if((e.key === "Enter" || e.key === " ") && els.overlay.classList.contains("show")){
      e.preventDefault();
      els.nextBtn.click();
      return;
    }
    const letter = e.key.toUpperCase();
    if(ALPHABET.includes(letter) || letter === "Ç"){
      e.preventDefault();
      const btn = findKey(letter);
      if(btn && !btn.disabled){
        btn.classList.add("key-pressed");
        handleGuess(letter, btn);
      }
    }
  });
  document.addEventListener("keyup", (e) => {
    const letter = e.key.toUpperCase();
    if(ALPHABET.includes(letter) || letter === "Ç"){
      const btn = findKey(letter);
      if(btn) btn.classList.remove("key-pressed");
    }
  });
  startWord();
})();