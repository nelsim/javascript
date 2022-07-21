const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    //lockBoard serve para 'travar' o tabuleiro
    if(lockBoard) return;
    //condição para evitar um duplo clique na mesma carta
    if(this === firstCard) return;

    this.classList.add('flip');

    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false; //reset no hasFlippedCard pois toda carta seria parecida com a outra, seria igual

    checkForMatch();
}
//função que vai checar se as cartas são iguais
//se o dataset da primeira carta for igual ao da segunda vai chamar a função disableCards
function checkForMatch() {
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }
    unflipCards();
}
//função para desabilitar as cartas clicada
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//função para alterar as ordens das cartas no tabuleiro
//e essa função está dentro de uma função que inicializa automaticamente
(function shuffle() {
    cards.forEach((card) => {
        //fazer o sorteio aleatório de um número 0 a 11
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    });
})();

cards.forEach((card) =>{
    card.addEventListener('click', flipCard)
});