const cards= document.querySelectorAll('.memory-card');

let hasFlippedCard= false;
let firstCard, secondCard;
let lockBoard= false;

function flipCard(){
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.toggle('flip');

    if(!hasFlippedCard){
        //first click
        hasFlippedCard= true;
        firstCard = this;
    }else{
        //second click
        hasFlippedCard= false;
        secondCard= this;

        //do cards match?
        if (firstCard.dataset.framework === secondCard.dataset.framework){
            //it's a match
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        } else{
            lockBoard= true;
            //it's not a match
          setTimeout(() =>{
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            lockBoard= false;
          }, 1500);  
        }
    }
}

function resetBoard(){
    [hasFlippedCard, lockBoard]= [false, false];
    [firstCard, secondCard]= [null, null];
}

(function shuffle(){
    cards.forEach(card=>{
        let randomPos= Math.floor(Math.random()*12);
        card.getElementsByClassName.order= randomPos;
    });
})();

cards.forEach(card=> card.addEventListener('click', flipCard));




function showImage(){
    document.getElementById('picture').style.visibility='visible';
}