/* console.log("It's working"); */
/* Step 1: get the name from user
        store in variable (name)
step 2: ask if they will play 3 or 6 holes today,
        store in variable (holesCount)
step 3: loop 3 or 6 holes (holesCount)
    -ask for putts
    -add the putts to the total
step 4: print the total
step 5: display the total number of pars

*/ 
// Note! prompt always gives a string

let name = prompt("Welcome to GC mini golf! What is your name?");
let holes = prompt("Hi, "+ name +"! Would you like to play 3 or 6 holes?");
let total = 0;
let putt = 0;
let holeNumber = 1;
let totalPar = holes * 3;
while(holes != "3" && holes != "6"){
    holes = prompt("You can't play " + holes + "! Please choose 3 or 6 holes.");
}

for (let i=0; i < holes; i++){
    let putt = Number( prompt("How many putts for hole "+ holeNumber +"? (par: 3)") );
    holeNumber ++;
    total += putt;
}

if (total === totalPar){
    console.log("Good game, " + name + ". Your total par was: 0");
}else if (total < totalPar){
    console.log("Great job, " + name + "! Your total par was: " + (total - totalPar));
}else {
    console.log("Nice try, " + name + "... Your total par was: + " + (total - totalPar));
}

// console.log("Great job, "+ name +"! Your total par was: "+ total +".");

