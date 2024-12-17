const readline = require("readline");

const rl = readline.createInterface( {
    input:process.stdin,
    output:process.stdout,
});


function main(){
    displayGuidelines();
    promptTown();
}

function promptTown(){

    rl.question("Enter the name of the town:", (town) => {
        if(town == "nowhere")
            rl.close();
        else{
            promptTown();
        }
    })
}

function displayGuidelines(){
    console.log("\x1b[32mTime zone API - Raffabello\x1b[0m");
    console.log("Instructions----|");
    console.log("- Location must be of the following format: town, country.Example:\x1b[32mRoma, Italy\x1b[0m");
    console.log("- Enter \x1b[32mnowhere\x1b[0m to quit the program.")
    console.log("----------------|\n<Enjoy>");
}


main();
