import renderGrids from "./renderGameBoards";

export default function startGame(){
    
const info = document.querySelector('.info')

const inputContainer = document.createElement('div')
inputContainer.classList.add("input-container")
const nameLabel = document.createElement('label')
nameLabel.textContent = "Enter Name:"
const nameInput = document.createElement('input')
nameInput.classList.add('name-input')
const startButton: HTMLButtonElement = document.createElement('button') 
startButton.classList.add("start-button")
startButton.textContent = "Start"

inputContainer.appendChild(nameLabel)
inputContainer.appendChild(nameInput)
inputContainer.appendChild(startButton)
info?.appendChild(inputContainer)

startButton.addEventListener('click', function() {
    if(nameInput.value !== ''){
        const name = nameInput.value
        info?.removeChild(inputContainer)
        renderGrids(name)
    }
    else{
        const name = "To lazy to enter a name"
        info?.removeChild(inputContainer)
        renderGrids(name)
    }
})

}
