let result = 0;
let days = Number(prompt("Enter Number of Days"))
if(!(days===String)){
    switch(days%7){
        case 0:
            result = " Tuesday";
            break;
        case 1:
            result = " Wednesday";
            break;
        case 2:
            result = " Thursday";
            break;
        case 3:
            result = " Friday";
            break;
        case 4:
            result = " Saturday";
            break;
        case 5:
            result = " Sunday";
            break;
        case 6:
            result = " Monday";
            break;
    }

    document.getElementById("show").innerHTML = `
    
    <h1>On ${days} Day, it is ${result}</h1>
    <h4>&copy; 2024 by Deepto Osman..Coder all the way and Warrior of Remittance...work hard and code harder but not before being smart.</h4>
    
    
    `
} else {
    document.getElementById(
        "show"
    ).innerHTML = `<h2>Only Number Input is Accepted</h2>`
}