document.addEventListener("DOMContentLoaded", () => {
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
    n_rgb        = n_match[0]; // This is the RGB value of the closest matching color
    n_name       = n_match[1]; // This is the text string for the name of the match
    n_exactmatch = n_match[2]; // True if exact color match, False if close-match

    // alert(n_match);
    cardName = document.getElementById("pantoneColorName")
    cardName.innerHTML = n_name;






    // cards = document.getElementById("pantoneCards")

    // cardClone = document.getElementById("pantoneCard").cloneNode(true)
    // cards.appendChild(cardClone);
});