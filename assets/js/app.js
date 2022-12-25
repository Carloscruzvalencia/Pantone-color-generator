function newColor(){
    letter = ['A', 'B', 'C', 'D', 'E', 'F']
    color = []
    for (i = 0; i != 3; i++) {

        number = Math.random() * 9;
        number2 = Math.random() * 5;
        trunc = Math.trunc(number)
        trunc2 = Math.trunc(number2)


        color.push(trunc)
        color.push(letter[trunc2])
    }

    finalColor = color.join('')
    
    cardColor = document.getElementById("pantoneColor");
    cardColor.style.backgroundColor = "#" + finalColor;
    cardHex = document.getElementById("pantoneColorHex")
    cardHex.innerHTML = "#"+finalColor;
    
    var n_match  = ntc.name("#"+finalColor);
    n_name       = n_match[1]; 
    cardName = document.getElementById("pantoneColorName")
    cardName.innerHTML = n_name;

}
function reload(){
    document.getElementById("btImage").style.transform = "rotate(360deg)"
    document.getElementById("btImage").style.transition = "0.5s"
    setTimeout(() => {
        document.getElementById("btImage").style.transform = "rotate(0deg)"
        document.getElementById("btImage").style.transition = "0s"
    }, 500);
}
cardNumber = 0
function cardClone(){
    if (cardNumber < 3){
        cardNumber++
        card = document.getElementById("pantoneCard");
        tarjetclone = card.cloneNode(true)
        document.getElementById("pantoneCards").appendChild(tarjetclone)
        document.getElementById("buttonClone").style.display = "inherit"
    }
    if (cardNumber == 3){
        document.getElementById("buttonClone").style.display = "none"
    }
}