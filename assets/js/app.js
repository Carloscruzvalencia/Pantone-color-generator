function newColor() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  
    for (let i = 0; i < 5; i++) {
        let finalColor = '';

        for (let j = 0; j < 3; j++) {
            const number = Math.trunc(Math.random() * 10);
            const letterIndex = Math.trunc(Math.random() * 6);
            finalColor += number + letters[letterIndex];
        }

        const cardColor = document.getElementById("pantoneColor" + i);
        cardColor.style.backgroundColor = "#" + finalColor;
        
        const cardHex = document.getElementById("pantoneColorHex" + i);
        cardHex.innerHTML = "#" + finalColor;

        const n_match = ntc.name("#" + finalColor);
        const n_name = n_match[1];

        const cardName = document.getElementById("pantoneColorName" + i);
        cardName.innerHTML = n_name;
    }
}
function reload() {
    document.getElementById("btImage").style.transform = "rotate(360deg)"
    document.getElementById("btImage").style.transition = "0.5s"
    setTimeout(() => {
        document.getElementById("btImage").style.transform = "rotate(0deg)"
        document.getElementById("btImage").style.transition = "0s"
    }, 300);
}
