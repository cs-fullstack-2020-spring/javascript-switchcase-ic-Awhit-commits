function main(){
// problemOn();
problemTwo();
}

//Problem 1

function problemOn(){
    let number;
    numberMonth = prompt("Enter a month number from 1 to 4");
    switch (numberMonth) {
        case "1":
            console.log("January");
            break;
        case "2":
            console.log("February");
            break;
        case "3":
            console.log("March");
            break;
        case "4":
            console.log("April");
            break;
        
    
        default:
            console.log ("That month doesn't exist")
            break;
    }
}
function problemTwo(){
    let spanDay;
    spanDay = prompt("Enter a day in spanish");
    switch (spanDay){
        case 'lunes':
            console.log("Monday")
            break;
        case 'martes':
            console.log("Tuesday");
            break;
        case 'miercoles':
            console.log("Wednesday");
            break;
         case 'jueves':
            console.log("Thursday");
            break;
        case 'viernes':
            console.log("Friday");
            break;
        case 'sabado':
            console.log("Saturday");
            break;
        case 'domingo':
            console.log("Sunday");
            break;
        default:
            console.log(`That is not a day of the week in English`);
    }
}

main();