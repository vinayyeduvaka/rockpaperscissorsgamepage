let  score={
    Wons:0,
    Losses:0,
    Ties:0
};

let scores=document.querySelector('.scores');

function playGame(playerMove){
            
            var result='';
            let computerMove=pickComputerMove();
            let headElement=document.querySelector('.head');
            let paragraphElement=document.querySelector('.para');
            console.log(computerMove);
            

            if(playerMove==="rock"){
               if(computerMove === 'rock'){
                    result='Tie';
               }
               else if(computerMove ==='scissors' ){
                    result='You Lose';
               }

               else if(computerMove ==='paper' ){
                    result='You Win';
               }
            }

            else if(playerMove==='paper'){
               if(computerMove === 'paper'){
                    result='Tie';
               }
               else if(computerMove ==='scissors' ){
                    result='You Lose';
               }

               else if(computerMove ==='rock' ){
                    result='You Win';
               }
               
               
            }

            else if(playerMove==='scissors'){

               if(computerMove === 'scissors'){
                    result='Tie';
               }
               else if(computerMove ==='paper' ){
                    result='You Win';
               }

               else if(computerMove ==='rock' ){
                    result='You Lose';
               }
             
            }

            paragraphElement.innerHTML=`you <img src="${playerMove}-emoji.png" class="image"/> computer <img src="${computerMove}-emoji.png" class="image"/>`;
            headElement.innerHTML=result;
    console.log(playerMove);
    console.log(result);
    if(result==='You Win'){
        score.Wons+=1;
    
    }
    else if (result==='You Lose'){
        score.Losses+=1;
    }
    else if (result==='Tie'){
        score.Ties+=1;
    }
    updateScore();
}


function updateScore(){
scores.innerHTML=`Wins:${score.Wons},Losses:${score.Losses},Ties:${score.Ties}`;
} 

            
            function pickComputerMove(){
                const randomNumber=Math.random()*100;
                let number=Math.round(randomNumber);
                let computerMove='';
               if(number>=0 && number<=33){
                 computerMove='rock';
               }
               else if(number>33 && randomNumber<=66){
                 computerMove='paper';
               }
               else{
                     computerMove='scissors';
               }
               return computerMove;
            }
