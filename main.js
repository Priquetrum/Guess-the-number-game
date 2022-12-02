var again = true;

while (again){

// welcome
alert('Welcome to guess the number game!\nYou have 3 chance to guess the right number from 1-10');

var live = 3;


// computer number
 var comp = Math.random();

// var comp = Math.round(Math.random() * 10); // easier way to add random number

if(comp < 0.1 ){
    comp = 1; 

}   else if (comp >= 0.1 && comp < 0.2){
    comp = 2;

}   else if (comp >= 0.2 && comp < 0.3){
    comp = 3;

}   else if (comp >= 0.3 && comp < 0.4){
    comp = 4;

}   else if (comp >= 0.4 && comp < 0.5){
    comp = 5;

}   else if (comp >= 0.5 && comp < 0.6){
    comp = 6;

}   else if (comp >= 0.6 && comp < 0.7){
    comp = 7;

}   else if (comp >= 0.7 && comp < 0.8){
    comp = 8;

}   else if (comp >= 0.8 && comp < 0.9){
    comp = 9;

}   else {
    comp = 10;
}      


//rules
while ( live > 0 ){

var player = prompt('Enter your guessed number from 1 to 10!\nYou have ' + live + ' chance left!');

    if ( player == comp){
        alert('You WIN The answer is ' + comp + ' !');
        break;

    }   else if ( player == null || player == '' || player == ' ' ){
        alert('you have not entered anything')

    }   else if ( player < comp ){
        alert('Your number lower than the answer!');
        live -= 1;

    }   else if ( player > comp){
        alert('Your number higher than the answer!');
        live -= 1;
        
    }   else {
        alert('You not entered a valid answer!');
    }
} 


//ending lose
if (live <= 0)
alert("You lose! the answer is " + comp );

//play again
var again = confirm('Play Again?')

}