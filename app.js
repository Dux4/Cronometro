const minutesEl= document.querySelector("#minutes")
const secondsEl= document.querySelector("#seconds")
const milisecondsEl= document.querySelector("#miliseconds")
const StartBtnEl= document.querySelector("#StartBtn")
const PauseBtnEl= document.querySelector("#PauseBtn")
const ResumeBtn= document.querySelector("#Resume")
const ResetBtnEl= document.querySelector("#Resetar")

let inverval;
let minutes = 0
let seconds = 0
let miliseconds = 0
let Paused = false

//Adicionando eventos ao clicar
StartBtnEl.addEventListener("click", startTimer ) 
PauseBtnEl.addEventListener("click", pausar)
ResumeBtn.addEventListener ("click", continuar )
ResetBtnEl.addEventListener("click", reiniciar)


function startTimer() {
    inverval=setInterval(() =>{

        if (!Paused){
            miliseconds += 10

            if (miliseconds === 1000) {
                seconds++
                miliseconds=0
            }

            if(seconds === 60 ){
                minutes++
                seconds= 0
            }
           
            minutesEl.textContent = formatar(minutes)
            secondsEl.textContent = formatar(seconds)
            milisecondsEl.textContent = formatarMilisegundos(miliseconds)



        }

    }, 10 )

    StartBtnEl.style.display = "none"
    PauseBtnEl.style.display = "block"
    
}

function reiniciar(){
    clearInterval (inverval)

    minutesEl.textContent= "00"
    secondsEl.textContent= "00"
    milisecondsEl.textContent= "000"

    minutes=0
    seconds=0
    miliseconds=0

    StartBtnEl.style.display= "block"
    ResumeBtn.style.display= "none"
    PauseBtnEl.style.display = "none"

   
    Paused = false // Bug resolvido onde o cronometro não iniciava ao resetar.



}

function pausar() {
    Paused = true
    PauseBtnEl.style.display = "none" // Botão pause saí
    ResumeBtn.style.display = "block" // Botão Continuar aparece 
} // Faz a contagem do invertal parar 

function continuar() {
    Paused = false
    PauseBtnEl.style.display = "block" 
    ResumeBtn.style.display = "none" 
    
}


function formatar(tempo) {
    return tempo<10 ? `0${tempo}` : tempo
} // Formata os número abaixo de 10 colocando 0 a frente.

function formatarMilisegundos(tempo) {
    return tempo<100 ? `${tempo}`.padStart( 3,"0" ) : tempo
} // Formata os número abaixo de 10 colocando 0 a frente.