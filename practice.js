const prompt = require('prompt-sync')();


const deposit = () => {

    while (true) {
    const amount = prompt (`Enter the amount you want to deposit: `);
    const numberamountdepost = parseFloat(amount);
    if(isNaN(numberamountdepost) || numberamountdepost <= 0) {
        console.log(`Invalid amount. Please enter a positive number.`);
    }else{
        return numberamountdepost;
    }
}};

const NOL = ()=>{

    while (true) {
const lines = prompt(`Enter the number of lines you want to bet on (1-3):`);
const numberOfLines = parseFloat(lines);

if(isNaN(numberOfLines) || numberOfLines <1 || numberOfLines > 3) {
    console.log(`Invalid number of lines. Please enter a number between 1 and 3.`);
}else{
    return numberOfLines;}}
};

let balance = deposit();
const numberOfLines = NOL();