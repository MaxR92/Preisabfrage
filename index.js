function calc() {
    let days = document.querySelector("#days").value;
    let guests = document.querySelector("#guests").value;
    let breakfast = document.querySelector("#yes").checked;
    
    const night = 50;
    const person = 10;
    const breakfastPrice = 8;

    if(guests > 1 && breakfast == true) {
        let result = days * night + (guests - 1) * person * days + days * breakfastPrice * guests
        return result
    } else if (guests == 1 && breakfast == true) {
        let result = (night + breakfastPrice) * days
        return result
    } else if (guests > 1 && breakfast == false) {
        let result = days * night + (guests - 1) * person * days 
        console.log(result)
        return result
    } else if (guests == 1 && breakfast == false) {
        let result = night * days
        return result
    } else {
        console.log("Fehlermeldung 404 Error ohje ohje")
    };

}




function run(days , guests , breakfast) {
     document.querySelector("#ausgabe").innerHTML = "der Preis beträgt  " + calc(days , guests , breakfast) + "€"

}

run();


// 