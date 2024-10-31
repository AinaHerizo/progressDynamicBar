document.addEventListener("DOMContentLoaded", () => {
// Variable
    // bar
    const barNumberEcho = document.querySelector("#barNumber");
    const progressBar = document.querySelector("#progressBar");
    // form
    const numberChange = document.querySelector("#numberChange");
    const changeValue = document.querySelector("#changeValue");
    // initialisation
    let count = 0
    

    changeValue.addEventListener("click", (event)=>{
        event.preventDefault()
        let utilisateurValue =  Number(numberChange.value)
        progressBar.style.transform = "scaleX("+numberChange.value/100+")"
        let timeInterval = 3000/(Math.abs(numberChange.value-count))
        
        if(window.barProgression){
            clearInterval(window.barProgression)
        }
        else{
            window.barProgression = setInterval(() => {
                if (count < utilisateurValue) {
                    count++
                } 
                else if(count > utilisateurValue) {
                    count--
                }
                else{
                    clearInterval(barProgression)
                    barProgression = null;
                    return;
                }
                barNumberEcho.innerHTML = count+"%"                
            }, timeInterval);
        }
    })
});